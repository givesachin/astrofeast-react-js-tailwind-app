import axios from 'axios';
import {useAuth} from './auth.utils'
export const baseUrl =
  'https://test.astrofeast.com/admin/guest/customers/api' || 'http://localhost:3000/api/';

export const cAxios = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 60 * 60,
  maxBodyLength: Infinity,
});

export const attachClientSideNetworkChain = () => {
  // const {errorHandlingCallback} = useClientSideErrorHandler();

  const returnResponseFn = (res) => {
    // console.log(res);
    return res;
  };
  const attachThen = (promise) => promise.then(returnResponseFn);
  const attachCatch = (promise) => promise
  // .catch < AxiosResponse < T >> (errorHandlingCallback)
  //   .catch < AxiosResponse < T >> ((res) => {
  //   // console.log(res);
  //   return Promise.reject(res);
  // });

  const attachNetworkChain = (promise) => attachCatch(attachThen(promise));

  return {attachNetworkChain};
};

/**
 *
 * Create attach for dynamic handling and logout
 *
 * */
// export const useClientSideErrorHandler = () => {
//   const errorHandlingCallback = (e) => {
//     console.log(e)
//     // if (e.request.status === 401) {
//     // } else if (e.request.status === 400) {
//     // } else if (e.request.status === 500) {
//     // } else if (e.request.status === 404) {
//     // } else if (e?.response?.data?.error ?? false) {
//     // } else throw e;
//     // return Promise.reject(e);
//   };
//   return {errorHandlingCallback};
// };

export const clientSideOpenNetworkHandler = () => {
  const {attachNetworkChain} = attachClientSideNetworkChain();
  const networkHandler = {
    get: (endpoint, params) => attachNetworkChain(cAxios.get(endpoint, params)),
    post: (endpoint, body, params,) => {
      // console.log(endpoint);
      return attachNetworkChain(
        cAxios.post(endpoint, body, {
          ...params,
          headers: {
            'Content-Type': body ? 'application/json' : undefined,
            ...params?.headers,
          },
        })
      );
    },
  }
  return {networkHandler};
};

export const useClientSideAuthorizedNetworkHandler = () => {
  const {attachNetworkChain} = attachClientSideNetworkChain();
  const {helpers} = useAuth();
  const authorizedGet = async (
    endpoint,
    params
  ) => {
    const authToken = helpers.getAuthToken();
    return attachNetworkChain(
      cAxios.get(endpoint, {
        ...params,
        headers: {
          Authorization: authToken ? `Bearer ${authToken}` : undefined,
          ...params?.headers,
        },
      })
    );
  };
  const authorizedPost = async (
      endpoint,
      body,
      params
    ) => {
      const authToken = helpers.getAuthToken();
      return attachNetworkChain(
        cAxios.post(endpoint, body, {
          ...params,
          headers: {
            ...params?.headers,
            Authorization: authToken ? `Bearer ${authToken}` : undefined,
          },
        })
      );
    }
  ;

  const authorizedPut = async (
      endpoint,
      body,
      params
    ) => {
      const authToken = helpers.getAuthToken();
      return attachNetworkChain(
        cAxios.put(endpoint, body, {
          ...params,
          headers: {
            ...params?.headers,
            Authorization: authToken ? `Bearer ${authToken}` : undefined,
          },
        })
      );
    }
  ;

  const authorizedDelete = async (
      endpoint,
      params
    ) => {
      const authToken = helpers.getAuthToken();
      return attachNetworkChain(
        cAxios.delete(endpoint, {
          ...params,
          headers: {
            ...params?.headers,
            Authorization: authToken ? `Bearer ${authToken}` : undefined,
          },
        })
      );
    }
  ;

  const authorizedFileUpload = async (
      endpoint,
      formData,
      params
    ) => {
      const authToken = helpers.getAuthToken();
      return attachNetworkChain(
        cAxios.post(endpoint, formData, {
          ...params,
          maxBodyLength: Infinity,
          headers: {
            ...params?.headers,
            Authorization: authToken ? `Bearer ${authToken}` : undefined,
            ...formData.getHeaders,
            // "Content-Type": "multipart/form-data",
          },
        })
      );
    }
  ;

  return {
    authorizedGet,
    authorizedPost,
    authorizedPut,
    authorizedDelete,
    authorizedFileUpload,
  };
};
