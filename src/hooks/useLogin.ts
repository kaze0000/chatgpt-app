import { User } from "@/type/User";
import { useCallback } from "react";
import axios from "axios";

export const useLogin = () => {
  const login = useCallback((user: User) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/login`,
        {
          user: {
            email: user.email,
            password: user.password,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.logged_in === true) {
          console.log("ログインに成功しました");
        } else {
          console.log("ログインに失敗しました");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return { login };
};
