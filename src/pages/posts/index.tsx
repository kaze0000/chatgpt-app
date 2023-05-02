// userのmessageとresponseを掲載するページ
import { Button } from "@/components/atoms/Button";
import { BaseLayout } from "@/components/layouts/base";
import { Header } from "@/components/molecules/Header";
import { usePost } from "@/hooks/usePost";
import { getIcon } from "@/libs/icon";
import { getTitle } from "@/libs/title";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type PostsListItemProps = {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
};

const PostsListItem: FC<PostsListItemProps> = ({ isShow, setIsShow }) => {
  return (
    <div className="my-2 block p-6 bg-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p>ユーザー名</p>
      <p>投稿日時</p>
      <p>投稿内容(gptへの質問内容)</p>
      <Button label="詳細を見る" onClick={() => setIsShow(!isShow)} />
    </div>
  );
};

const Posts = () => {
  const [isShow, setIsShow] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const { fetchPosts } = usePost();
  const { pathname } = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BaseLayout>
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1 my-10 px-4 border-l-2 border-gray-100">
          <Header title={getTitle(pathname)} icon={getIcon(pathname)} />
          <PostsListItem isShow={isShow} setIsShow={setIsShow} />
          <PostsListItem isShow={isShow} setIsShow={setIsShow} />
          <PostsListItem isShow={isShow} setIsShow={setIsShow} />
          <div className="text-right">
            <Button
              label="投稿する"
              onClick={() => {
                if (isShow) {
                  setIsShow(!isShow);
                }
                setIsPost(!isPost);
              }}
            />
          </div>
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
        {isPost && (
          <form
            className="my-10 text-gray-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block text-sm">chatgptへの質問内容</label>
              <textarea className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4" />
            </div>
            <Button label="投稿" primary={true} type="submit" />
          </form>
        )}
      </div>
    </BaseLayout>
  );
};

export default Posts;
