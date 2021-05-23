import mockRequest from "./mocks/mockRequests";
import { request } from "./utils/request";
const accessTokenKey = "$TOKEN";

function getToken(token, error, ...rest) {
  return window.localStorage.getItem(accessTokenKey, token);
}

function handleUserResponse(response) {
  if (response.error) {
    return Promise.reject({ message: response.error });
  }

  window.localStorage.setItem(accessTokenKey, response.token);
  return Promise.resolve(response);
}

function register({ email, name, password }) {
  return request("users", {
    body: { email, name, password },
  }).then(handleUserResponse);
}

function login({ email, password }) {
  return request("users/signin", {
    body: { email, password },
  }).then(handleUserResponse);
}

async function logout() {
  return request("users/logout", { method: "POST" }).then((res) => {
    // TODO: Prevent redirect when has a failure
    if (res.error) {
      return Promise.reject({ message: res.error });
    }

    window.localStorage.removeItem(accessTokenKey);
    return Promise.resolve(res);
  });
}

export { getToken, register, login, logout };
