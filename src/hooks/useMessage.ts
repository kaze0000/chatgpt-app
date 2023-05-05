import { User } from "@/type/User";
import { useCallback, useState } from "react";
import axios from "axios";
import { getAccessToken } from "@/libs/cookie";
import { log } from "console";
import { Message } from "@/type/Message";

export const usePost = () => {
  const access_token = getAccessToken();
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = useCallback(() => {
    axios
      .get(`http://localhost:8080/messages`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        console.log(res.data);
        setMessages(res.data.messages);
      })
      .catch((err) => console.log(err));
  }, [access_token]);

  const createMessage = useCallback((message: string) => {
    axios
      .post(
        `http://localhost:8080/messages`,
        {
          content: message,
        },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        fetchMessages();
      })
      .catch((err) => console.log(err));
  }, []);
  return { fetchMessages, createMessage, messages };
};
