import { useState, useCallback, useMemo } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification as firebaseSendEmailVerification,
} from 'firebase/auth';
import { auth } from './index';

/* -------------------------------------------------------------------------- */

//Firebase 인증 회원가입 훅입니다.

//이메일/패스워드 회원가입을 처리하는 signUp 함수 그리고 로딩, 오류, 인증 사용자 상태를 관리합니다.
//useSignUp 훅에 `true` 값을 설정하면 회원가입 사용자에게 이메일 인증(email validation)을 요청합니다.

//signUp 함수는 이메일, 패스워드, 사용자 이름(옵션) 인자를 전달 받습니다.
//사용자 이름을 전달하면 회원가입 된 사용자의 `displayName` 값으로 설정됩니다.


/**
 * Firebase 인증: 이메일/패스워드 회원가입 유틸리티 훅
 * @param {boolean} sendEmailVerification 이메일 확인 메일 보내기 (기본 값: false)
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  user: null | import('firebase/auth').UserCredential;
 *  signUp: (email: string, password: string, displayName?: string) => Promise<import('firebase/auth').UserCredential>;
 * }}
 */
export function useSignUp(sendEmailVerification = false) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const signUp = useCallback(
    async (email, password, displayName) => {
      setIsLoading(true);
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const { user } = userCredentials;

        if (displayName && user) {
          await updateProfile(user, { displayName });
        }

        if (sendEmailVerification && user) {
          await firebaseSendEmailVerification(user);
        }

        setUser(user);
        return user;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [sendEmailVerification]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      signUp,
    }),
    [isLoading, error, user, signUp]
  );
}
