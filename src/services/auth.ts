import { apiRequest } from "../services/apiClient";

export async function register(name: string, email: string, password: string) {
  return apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

export async function login(email: string, password: string) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function me(token: string) {
  return apiRequest("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
