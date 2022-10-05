import { startLoadingBar, stopLoadingBar } from '../lib/loading';
import { User } from '../classes/User';
import getBackendResponse from '../lib/endpoints';
import { signIn as authSignIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

export const signIn = async (email: string, password: string): Promise<boolean> => {

  const credentials = {
    email: email,
    password: password,
    redirect: false
  };

  startLoadingBar();

  const response: any = await authSignIn('credentials', credentials);
  if (response?.error !== null) {
    stopLoadingBar();
    return false;
  }

  stopLoadingBar();

  return true;
}

export const signUp = async (user: User) : Promise<boolean> => {

  startLoadingBar();

  const { response } = await getBackendResponse("user", "POST", JSON.stringify(user), undefined);

  if (response.error !== undefined) {
    stopLoadingBar();
    return false;
  }

  stopLoadingBar();

  return true;
}

export const logout = (): void => {
  
  startLoadingBar();
  
  signOut({redirect: false});

  stopLoadingBar();
}

export const isUserLoggedIn = (session: Session | null, shouldRedirect: boolean = false) => {
  let isAuthenticated: boolean = false;

  if (session?.error) {
    signOut({ callbackUrl: '/login', redirect: shouldRedirect });
  } 
  if (session === undefined || session === null) {
    isAuthenticated = false;
  } else {
    isAuthenticated = true
  }

  return isAuthenticated;
}

export const isAdmin = (session: Session | null) : boolean | undefined => {
  return isUserLoggedIn(session) && session?.roles && session?.roles.includes("ROLE_ADMIN");
}

export const isUser = (session: Session | null) : boolean | undefined => {
  return isUserLoggedIn(session) && session?.roles && session?.roles.includes("ROLE_USER");
}

export const getUsername = (session: Session | null) : string | null | undefined => {
  return  session?.user?.name;
}