import { User } from "@/type/User";
import { useCallback } from "react";
import axios from "axios";

export const usePost = () => {
  const fetchPosts = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/posts`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return { fetchPosts };
};
