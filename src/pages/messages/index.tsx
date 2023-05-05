// userのmessageとresponseを掲載するページ
import { Button } from "@/components/atoms/Button";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { BaseLayout } from "@/components/layouts/base";
import { Header } from "@/components/molecules/Header";
import { usePost } from "@/hooks/useMessage";
import { getIcon } from "@/libs/icon";
import { getTitle } from "@/libs/title";
import { Message } from "@/type/Message";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type PostsListItemProps = {
  message: Message;
};

const PostsListItem: FC<PostsListItemProps> = ({ message }) => {
  return (
    <div className="text-white my-2 block p-6 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p>ユーザー名: テストユーザー</p>
      <p>投稿日時</p>
      <p>{message.content}(gptへの質問内容)</p>
      <div className="my-10 pl-4 border-l-2 border-gray-100">
        <h5 className="mb-2 text-gray-300 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          chat gptの回答
        </h5>
        <p className="font-normal text-gray-300 dark:text-gray-400">
          {message.response.content}
        </p>
      </div>
    </div>
  );
};

type Inputs = {
  question: string;
};

const Posts = () => {
  const [isPost, setIsPost] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchMessages, createMessage, messages } = usePost();
  const { pathname } = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    createMessage(data.question);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <BaseLayout>
      <div className="grid grid-cols-2 h-screen">
        <div className="relative overflow-scroll col-span-1 my-10 px-4 border-l-2 border-gray-100">
          <Header title={getTitle(pathname)} icon={getIcon(pathname)} />
          {messages.map((message) => (
            <PostsListItem key={message.id} message={message} />
          ))}
          <div className="sticky bottom-20 text-center">
            <Button
              label="投稿する"
              size="large"
              onClick={() => {
                setIsPost(!isPost);
              }}
            />
          </div>
        </div>
        {isPost && (
          <form
            className="my-10 text-gray-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block text-sm">chatgptへの質問内容</label>
              <textarea
                className="block w-full mt-1 border border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                {...register("question")}
              />
            </div>
            <div className="flex justify-center items-center">
              {isLoading && <LoadingSpinner />}
            </div>
            <Button label="投稿" primary={true} type="submit" />
          </form>
        )}
      </div>
    </BaseLayout>
  );
};

export default Posts;
