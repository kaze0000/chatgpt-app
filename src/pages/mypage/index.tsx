import { Button } from "@/components/atoms/Button";
import { BaseLayout } from "@/components/layouts/base";
import { Header } from "@/components/molecules/Header";

import { getIcon } from "@/libs/icon";
import { getTitle } from "@/libs/title";
import { log } from "console";
import { useRouter } from "next/router";

import { FC, ReactElement, useState } from "react";

type MypageListItemProps = {
  title: string;
};

const MypageListItem: FC<MypageListItemProps> = ({ title }) => {
  return <li className="p-4">{title}</li>;
};

const Mypage = () => {
  const { pathname } = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <BaseLayout>
        <div className="grid grid-cols-2 h-screen ">
          <div className="col-span-1 my-10 pl-4 border-l-2 border-gray-100 ">
            <Header title={getTitle(pathname)} icon={getIcon(pathname)} />
            <ul>
              <MypageListItem title="名前" />
              <MypageListItem title="年齢" />
              <MypageListItem title="性別" />
              <MypageListItem title="自己紹介" />
            </ul>
            <Button label="プロフィールを入力" onClick={handleClick} />
          </div>
          {isEdit && (
            <div className="my-10 pl-4 border-l-2 border-gray-100">
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form>
                <div>
                  <label className="block text-sm">名前</label>
                  <input
                    // defaultValue={userProfile.name}
                    type="text"
                    // {...register("name")}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                  />
                </div>
                <div>
                  <label className="block text-sm">性別</label>
                  <select
                    // {...register("gender")}
                    // defaultValue={userProfile ? userProfile.gender : 0}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                  >
                    <option value="0">未選択</option>
                    <option value="1">男性</option>
                    <option value="2">女性</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm">年齢</label>
                  {/* {userProfile ? ( */}
                  <input
                    // defaultValue={userProfile.age}
                    type="number"
                    // {...register("age")}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                  />
                </div>
                <div>
                  <label className="block text-sm">自己紹介</label>
                  {/* {userProfile ? ( */}
                  <textarea
                    // defaultValue={userProfile.self_introducement}
                    // {...register("self_introducement")}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                  />
                </div>
                <Button label="登録" />
              </form>
            </div>
          )}
        </div>
      </BaseLayout>
    </>
  );
};

export default Mypage;
