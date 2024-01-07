import { useCookies } from 'react-cookie';

const AUTH_KEY = 'auth';
const LARAVEL_SESSION = "laravel_session";
const SESSION_KEY = 'session_id'

export const useAuth = () => {
  const [authCookie, setAuthCookie, removeAuthCookie] = useCookies([AUTH_KEY, LARAVEL_SESSION]);
  const setAuthToken = async (token) => {
    if (token === '') return;
    setAuthCookie(AUTH_KEY, JSON.stringify({ token }), {
      maxAge: 1704085200,
      sameSite: 'none',
      secure: true,
    });
  };
  const getAuthToken = () => {
    const authKey = authCookie.auth;//getCookie(AUTH_KEY);
    try {
      if (!authKey) return '';
      else if (typeof authKey === 'string') return JSON.parse(authKey).token;
      return authKey;
    } catch (e) {
      return '';
    }
  };
  const [authSeesionCookie, setAuthSessionCookie, removeAuthSessionCookie] = useCookies([SESSION_KEY, LARAVEL_SESSION]);
  const setAuthSessionToken = async (token) => {
    if (token === '') return;
    setAuthSessionCookie(SESSION_KEY, JSON.stringify({ sessionToken:token }), {
      maxAge: 1704085200,
      sameSite: 'none',
      secure: true,
    });
  };
  const getAuthSessionToken = () => {
    const authKey = authSeesionCookie.session_id;//getCookie(AUTH_KEY);
    try {
      if (!authKey) return '';
      else if (typeof authKey === 'string') return JSON.parse(authKey).sessionToken;
      return authKey;
    } catch (e) {
      return '';
    }
  };

  const isLoggedIn = () => {
    return Boolean(getAuthToken());
  };
  const invalidateAuth = async () => {
    removeAuthCookie(AUTH_KEY);
  };

  const setSession = async (token) => {
    if (token === '') return;
    setAuthCookie(LARAVEL_SESSION, JSON.stringify({ token }), {
      maxAge: 1704085200,
      sameSite: 'none',
      secure: true,
    });
  };
  const getSessionToken = () => {
    const authKey = authCookie.laravel_session;//getCookie(AUTH_KEY);
    try {
      if (!authKey) return '';
      else if (typeof authKey === 'string') return JSON.parse(authKey).token;
      return authKey;
    } catch (e) {
      return '';
    }
  };


  // const renewToken = () => {
  //   if (hasCookie(AUTH_KEY)) {
  //     const authKey = getCookie(AUTH_KEY);
  //     setCookie(AUTH_KEY, authKey, {
  //       maxAge: 1704085200,
  //     });
  //   }
  // };

  return {
    helpers: {
      setAuthToken,
      getAuthToken,
      isLoggedIn,
      invalidateAuth,
      setSession,
      getSessionToken,
      setAuthSessionToken,
      getAuthSessionToken,
    },
  };
};
