import { tokenService } from "./token";
import { decodeToken } from "./jwt";
import { loginSuccess, logout } from "../store/slices/authSlice";
import type { AppDispatch } from "../store/store";

export const bootstrapAuth = (dispatch: AppDispatch) => {
  const token = tokenService.getToken();

  if (!token) {
    dispatch(logout());
    return;
  }

  const user = decodeToken(token);

  if (!user) {
    tokenService.clearToken();
    dispatch(logout());
    return;
  }

  dispatch(
    loginSuccess({
      user,
      token,
    })
  );
};
