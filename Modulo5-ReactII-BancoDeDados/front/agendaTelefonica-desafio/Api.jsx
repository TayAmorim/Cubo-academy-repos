export const API_URL = "https://api-contacts.pedagogico.cubos.academy";

export function TOKEN_USER(body) {
  return {
    url: `${API_URL}/login`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_POST(body) {
  return {
    url: `${API_URL}/usuarios`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function CONTACT_GET(token) {
  return {
    url: `${API_URL}/contatos`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function CONTACT_POST(token, body) {
  return {
    url: `${API_URL}/contatos`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
