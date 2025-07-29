import Cookies from "js-cookie";
import type { NavigateFunction } from "react-router-dom";
import { decryptData, encryptData } from "../utils/crypto";

const Auth = {
  isAuthorization() {
    if (Cookies.get("accessToken")) return true;
    return null;
  },
  getAccessToken() {
    const accessToken = Cookies.get("accessToken");
    return decryptData(accessToken);
  },
  clearAccessToken() {
    Cookies.remove("accessToken");
  },
  signOut(navigate: NavigateFunction) {
    Cookies.remove("accessToken");
    navigate("/login");
  },
  storeUserInfoToCookie(data: { name: string; email: string; token: string }) {
    if (!data.token) return null;

    // Data
    const { name, email, token } = data;

    // Encrypt Data
    const accessToken = encryptData(token);
    const user = encryptData({ name, email });

    // Get time for expires cookie
    const accessTokenExpires = new Date();
    accessTokenExpires.setTime(accessTokenExpires.getTime() + 24 * 60 * 60 * 1000); // 1 day

    // Set cookies and local storage
    Cookies.set("accessToken", accessToken, { expires: accessTokenExpires });
    Cookies.set("user", user, { expires: accessTokenExpires });

    return data;
  },
};

export default Auth;
