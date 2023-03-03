import { useState, useCallback, useMemo } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';

/* -------------------------------------------------------------------------- */

//Firebase 인증 로그인 훅입니다.

//이메일/패스워드 로그인을 처리하는 signUp 함수 그리고 로딩, 오류, 인증 사용자 상태를 관리합니다.

//signIn 함수는 이메일, 패스워드 인자를 전달 받아 Firebase 인증 로그인을 시도합니다.

/**
 * Firebase 인증: 이메일/패스워드 로그인 유틸리티 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  user: null | import('firebase/auth').UserCredential;
 *  signIn: (email: string, password: string) => Promise<import('firebase/auth').UserCredential>;
 * }}
 */
export function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const signIn = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredentials);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      signIn,
    }),
    [isLoading, error, user, signIn]
  );
}
