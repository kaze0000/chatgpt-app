import { Button } from "@/components/atoms/Button";
import { BaseLayout } from "@/components/layouts/base";
import { Header } from "@/components/molecules/Header";
import { getIcon } from "@/libs/icon";
import { getTitle } from "@/libs/title";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useLogin } from "@/hooks/useLogin";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { pathname } = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();
  const { login } = useLogin();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    login(data);
  };

  return (
    <BaseLayout>
      <div className="my-10">
        <Header title={getTitle(pathname)} icon={getIcon(pathname)} />
        <div className="w-full max-w-xs">
          <form
            className="px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                メールアドレス
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                {...register("email")}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                パスワード
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                {...register("password")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button label="ログイン" primary={true} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
