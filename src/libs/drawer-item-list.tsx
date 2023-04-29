import { ReactNode } from "react";

// icon reference
// https://www.tailwindtoolbox.com/icons
export const MyPageIcon = () => (
  <svg
    className="h-6 w-6 text-gray-500"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {" "}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />{" "}
    <polyline points="14 2 14 8 20 8" /> <line x1="16" y1="13" x2="8" y2="13" />{" "}
    <line x1="16" y1="17" x2="8" y2="17" /> <polyline points="10 9 9 9 8 9" />
  </svg>
);

const PostsIcon = () => (
  <svg
    className="h-6 w-6 text-gray-500"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {" "}
    <path stroke="none" d="M0 0h24v24H0z" />{" "}
    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
    <line x1="12" y1="11" x2="12" y2="11.01" />{" "}
    <line x1="8" y1="11" x2="8" y2="11.01" />{" "}
    <line x1="16" y1="11" x2="16" y2="11.01" />
  </svg>
);

const MessagesIcon = () => (
  <svg
    className="h-6 w-6 text-gray-500"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {" "}
    <path stroke="none" d="M0 0h24v24H0z" />{" "}
    <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
  </svg>
);

const LoginIcon = () => (
  <svg
    className="h-6 w-6 text-gray-500"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {" "}
    <path stroke="none" d="M0 0h24v24H0z" />{" "}
    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
    <path d="M7 12h14l-3 -3m0 6l3 -3" />
  </svg>
);

type Item = {
  listName: string;
  path: string;
  icon?: ReactNode;
};

export const itemList: Item[] = [
  {
    listName: "マイページ",
    path: "/mypage",
    icon: <MyPageIcon />,
  },
  {
    listName: "掲示板",
    path: "/posts",
    icon: <PostsIcon />,
  },
  // {
  //   listName: "メッセージ",
  //   path: "/messages",
  //   icon: <MessagesIcon />,
  // },
  {
    listName: "ログイン",
    path: "/login",
    icon: <LoginIcon />,
  },
];
