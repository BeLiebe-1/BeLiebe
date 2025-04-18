"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import Egg from "@/assets/egg.svg";

import { Button, Form, Input, Space } from "antd";
import * as z from "zod";

const loginSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(1, "パスワードを入力してください")
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function ChangeAccountSettings() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col min-h-screen p-6 bg-[#FAFAFA]">
      <main className="flex-1 flex flex-col max-w-md mx-auto w-full mb-8">
        <div className="flex justify-center mb-12">
          <Egg />
        </div>

        <h1 className="text-dark-grey text-2xl tracking-widst mb-16 text-left">
          アカウント設定
        </h1>

        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          className="w-full"
        >
          <Form.Item
            label={<span className="text-dark-grey">お名前</span>}
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} placeholder="お名前" />}
            />
          </Form.Item>
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
            label={<span className="text-dark-grey">パスワード</span>}
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
          <Form.Item className="!mt-12">
            <Space
              direction="vertical"
              className="!w-full !gap-y-4"
              classNames={{ item: "!w-full !text-center" }}
            >
              <Button type="primary" htmlType="submit" className="!w-full">
                変更する
              </Button>
              <Button
                type="text"
                className="!text-dark-grey !text-center !mx-auto"
              >
                戻る
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
}
