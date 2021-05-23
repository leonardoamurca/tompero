import { baseUrl } from "./env";

function request(endpoint, { body, ...customConfig } = {}) {
  const token = window.localStorage.getItem("$TOKEN");
  const headers = { "content-type": "application/json" };
  if (token) {
    headers.token = `${token}`;
  }
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window.fetch(`${baseUrl()}/${endpoint}`, config).then((r) => r.json());
}

export { request };
