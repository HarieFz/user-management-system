import { AES, enc } from "crypto-js";
import { CRYPTO_KEY } from "../constants";

export const encryptData = (data: unknown) => {
  const ciphertext = AES.encrypt(JSON.stringify(data), CRYPTO_KEY).toString();
  return ciphertext;
};

export const decryptData = (ciphertext: string | undefined) => {
  try {
    if (!ciphertext) {
      return null;
    }

    const bytes = AES.decrypt(ciphertext, CRYPTO_KEY);
    const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

    if (!decryptedData) {
      return null;
    }

    return decryptedData;
  } catch (error) {
    return error;
  }
};
