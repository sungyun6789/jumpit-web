import { createContext, useEffect, useState } from 'react';

import type { User, UserCredential } from 'firebase/auth';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

type Props = {
  children: ReactNode;
};

type UserV2 = {
  stsTokenManager: {
    accessToken: string;
    expirationTime: number;
    refreshToken: string;
  };
} & User;

export type UserCredentialImpl = {
  user: UserV2;
} & Omit<UserCredential, 'user'>;

type AuthContextModel = {
  userData: UserCredentialImpl | undefined;
  setUserData: Dispatch<SetStateAction<UserCredentialImpl | undefined>>;
};

export const AuthContext = createContext<AuthContextModel | undefined>(undefined);

/** @todo 로컬스토리지 값으로 자동로그인 (로그인 상태 유지) */
const AuthProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserCredentialImpl>();

  useEffect(() => {
    if (userData) {
      localStorage.setItem('j_sns_login', 'true');
      localStorage.setItem('j_mem_token', userData.user.stsTokenManager.accessToken);
      localStorage.setItem('j_mem_rt', userData.user.stsTokenManager.refreshToken);
    } else {
      localStorage.removeItem('j_sns_login');
      localStorage.removeItem('j_mem_token');
      localStorage.removeItem('j_mem_rt');
    }
  }, [userData]);

  return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
