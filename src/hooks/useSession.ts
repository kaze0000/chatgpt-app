import { getAccessToken } from "@/libs/cookie";
import { useEffect, useState } from "react";

export const useSession = (): { isSignedIn: boolean } => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = getAccessToken();
    setIsSignedIn(!!token);
  }, []);

  return { isSignedIn };
};
