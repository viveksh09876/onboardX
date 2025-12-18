import http from "./http";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const response = await http.post("/auth/login", payload);
  return response.data;
};
