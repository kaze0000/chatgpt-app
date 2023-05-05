import { addYears } from "date-fns";
import { COOKIE_KEYS } from "../../constants";
import Cookies from "js-cookie";

type AccessToken = string;

export const getAccessToken = (): AccessToken =>
  Cookies.get(COOKIE_KEYS.ACCESS_TOKEN) || "";

export const setAccessToken: (value: AccessToken) => void = (value) => {
  const oneYearSince = addYears(new Date(), 1);

  Cookies.set(COOKIE_KEYS.ACCESS_TOKEN, value, {
    secure: true,
    sameSite: "strict",
    domain: process.env.NEXT_PUBLIC_API_HOSTNAME,
    expires: oneYearSince,
  });
};
