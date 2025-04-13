"use client";
import { Controller, useForm } from "react-hook-form";

import "@ant-design/v5-patch-for-react-19";
import { zodResolver } from "@hookform/resolvers/zod";

import Egg from "@/assets/egg.svg";

import { Button, Form, Input, Space } from "antd";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(1, "パスワードを入力してください")
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center h-screen my-6">
      <Egg />

      <div className="my-auto flex flex-col justify-center items-center w-full max-w-xs">
        <p className="text-dark-grey tracking-[1.6px] mb-4.5">
          EggUマイページへログインする
        </p>

        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          className="w-full"
        >
          <Form.Item
            label={<span className="text-dark-grey">メールアドレス</span>}
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="メールアドレス" />
              )}
            />
          </Form.Item>
          <Form.Item
            label="パスワード"
            className="text-dark-grey"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password {...field} placeholder="パスワード" />
              )}
            />
          </Form.Item>
          <Form.Item>
            <Space direction="vertical" className="w-full">
              <Button type="primary" htmlType="submit" className="w-full">
                ログイン
              </Button>
              <Button
                type="primary"
                className="!bg-[#06C755] !border-[#06C755] !text-white !font-bold !px-6 w-full"
                icon={
                  <img
                    src="/images/line-app.png"
                    alt="LINE"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                }
              >
                LINEでログイン
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
