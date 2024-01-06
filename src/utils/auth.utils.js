import {useCookies} from 'react-cookie';

const AUTH_KEY = 'auth';

export const useAuth = () => {
  const [authCookie, setAuthCookie, removeAuthCookie] = useCookies([AUTH_KEY]);
  const setAuthToken = async (token) => {
    if (token === '') return;
    setAuthCookie(AUTH_KEY, JSON.stringify({token}), {
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

  const isLoggedIn = () => {
    return Boolean(getAuthToken());
  };
  const invalidateAuth = async () => {
    removeAuthCookie(AUTH_KEY);
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
    },
  };
};
