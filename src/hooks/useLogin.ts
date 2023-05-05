import { User } from "@/type/User";
import { useCallback } from "react";
import axios from "axios";
import { setAccessToken } from "@/libs/cookie";
import { useRouter } from "next/router";

export const useLogin = () => {
  const router = useRouter();
  const login = useCallback((user: User) => {
    axios
      .post(
        // `${process.env.REACT_APP_SERVER_URL}/login`,
        "http://localhost:8080/login",
        {
          email: user.email,
          password: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        // { withCredentials: true }
        // withCredentials は、axios の設定オプションの一つで、ブラウザが CORS (Cross-Origin Resource Sharing) のリクエストにクッキーや HTTP 認証情報を含めるかどうかを指定するものです。このオプションが true に設定されている場合、リクエストにクッキーや認証情報が含まれます。
        // デフォルトでは、withCredentials は false に設定されており、リクエストに認証情報が含まれません。ただし、クロスオリジンのリクエストでセッション情報や認証情報を保持する必要がある場合は、このオプションを true に設定することで、ブラウザが認証情報を送信できるようになります。
        // ただし、withCredentials を true に設定すると、サーバーサイドでも CORS の設定を調整する必要があります。具体的には、サーバーが Access-Control-Allow-Origin ヘッダーで具体的なオリジンを指定し、Access-Control-Allow-Credentials ヘッダーを true に設定する必要があります。ワイルドカード（*）では、withCredentials が true の場合には動作しません。
      )
      .then((res) => {
        console.log(res.data);
        setAccessToken(res.data);
        router.push("/mypage");
        console.log("ログインに成功しました");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return { login };
};
