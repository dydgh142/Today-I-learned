import { useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './index';

/* -------------------------------------------------------------------------- */

//Firebase 인증 상태 관리 훅으로 로딩, 오류, 인증 사용자 상태를 관리합니다.
//인증 상태가 변경될 때 마다 인증 사용자 정보가 업데이트 됩니다.
/**
 * Firebase 인증: 인증 상태 감지 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  user: null | UserCredential;
 * }}
 */
export function useAuthState() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    return onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      }
    );
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
    }),
    [isLoading, error, user]
  );
}
