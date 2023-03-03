import { useState, useCallback, useMemo } from 'react';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from './index';

/* -------------------------------------------------------------------------- */

//Firebase 인증 로그아웃 훅입니다.

//로그아웃을 처리하는 signOut 함수 그리고 로딩, 오류 상태를 관리합니다.

//signOut 함수는 Firebase 인증 로그아웃을 시도합니다.

/**
 * Firebase 인증: 로그아웃 유틸리티 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  signOut: () => Promise<void>;
 * }}
 */
export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      return await firebaseSignOut(auth);
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
      signOut,
    }),
    [isLoading, error, signOut]
  );
}
