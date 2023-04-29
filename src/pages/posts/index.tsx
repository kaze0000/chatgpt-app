// userのmessageとresponseを掲載するページ
import { Button } from "@/components/atoms/Button";
import { BaseLayout } from "@/components/layouts/base";
import { Header } from "@/components/molecules/Header";
import { getIcon } from "@/libs/icon";
import { getTitle } from "@/libs/title";
import { useRouter } from "next/router";
import { FC, useState } from "react";

type PostsListItemProps = {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
};

const PostsListItem: FC<PostsListItemProps> = ({ isShow, setIsShow }) => {
  return (
    <div className="my-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p>ユーザー名</p>
      <p>投稿日時</p>
      <p>投稿内容(gptへの質問内容)</p>
      <Button label="詳細を見る" onClick={() => setIsShow(!isShow)} />
    </div>
  );
};

const Posts = () => {
  const [isShow, setIsShow] = useState(false);
  const { pathname } = useRouter();

  return (
    <BaseLayout>
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1 my-10 px-4 border-l-2 border-gray-100 ">
          <Header title={getTitle(pathname)} icon={getIcon(pathname)} />
          <PostsListItem isShow={isShow} setIsShow={setIsShow} />
          <PostsListItem isShow={isShow} setIsShow={setIsShow} />
          <PostsListItem isShow={isShow} setIsShow={setIsShow} />
        </div>
        {isShow && (
          <div className="my-10 pl-4 border-l-2 border-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              chat gptの回答
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              今日の天気は...... 明日の天気は...です。
            </p>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default Posts;
