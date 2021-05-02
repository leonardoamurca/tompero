import mockRequest from "./mocks/mockRequests";

const accessTokenKey = "$TOKEN";

async function getToken() {
  return window.localStorage.getItem(accessTokenKey);
}

function handleUserResponse({ user }) {
  window.localStorage.setItem(accessTokenKey, user.token);
  return user;
}

// TODO: We will need the password later
function register({ email, name }) {
  return mockRequest("/register", true, { email, name }).then(
    handleUserResponse
  );
}

// TODO: We will need the password later
function login({ email }) {
  return mockRequest("/login", true, { email }).then(handleUserResponse);
}

async function logout() {
  window.localStorage.removeItem(accessTokenKey);
}

export { getToken, register, login, logout };
