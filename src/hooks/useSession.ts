import { getAccessToken } from "@/libs/cookie";

export const useSession = (): { isSignedIn: boolean } => {
  const token = getAccessToken();
  const isSignedIn = !!token;

  return { isSignedIn };
};
