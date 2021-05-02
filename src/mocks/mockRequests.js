function loginResponse({
  email = "cazalbe@gmail.com",
  name = "Carlos Alberto de Nobrega",
}) {
  return {
    user: {
      id: "123456",
      token: "MzQwNTYzNDIxMA==",
      email,
      name,
    },
  };
}

function boostrapResponse(data) {
  return {
    user: loginResponse(data).user,
  };
}

const mock = (success, data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject({ message: "Houve um erro!" });
      }
    }, 3000);
  });

export default function mockRequest(endpoint, success, data = {}) {
  switch (endpoint) {
    case "/login":
      return mock(success, loginResponse(data));
    case "/bootstrap":
      return mock(success, boostrapResponse(data));
    case "/register":
      return mock(success, loginResponse(data));
    default:
      return mock(false, { message: "Error" });
  }
}
