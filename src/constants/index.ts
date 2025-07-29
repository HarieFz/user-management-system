export const BASE_API_URL = `${import.meta.env.VITE_BASE_API_URL}/api/v1`;
export const CRYPTO_KEY = import.meta.env.VITE_CRYPTO_KEY;

export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
} as const;

export const ITEMS_PER_PAGE = 10;

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

export const GENDER_OPTIONS = [
  { value: "male", label: "Laki-laki" },
  { value: "female", label: "Perempuan" },
];
