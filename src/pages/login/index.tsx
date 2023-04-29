import { Button } from "@/components/atoms/Button";
import { BaseLayout } from "@/components/layouts/base";
import { Header } from "@/components/molecules/Header";
import { getIcon } from "@/libs/icon";
import { getTitle } from "@/libs/title";

import { useRouter } from "next/router";

import { FC, ReactElement, useState } from "react";

const Login = () => {
  const { pathname } = useRouter();

  return (
    <BaseLayout>
      <div className="my-10">
        <Header title={getTitle(pathname)} icon={getIcon(pathname)} />
        <div className="w-full max-w-xs">
          <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                // for="username"
              >
                メールアドレス
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                // for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button label="ログイン" />
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
