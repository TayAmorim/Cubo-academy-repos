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
