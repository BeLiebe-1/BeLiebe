"use client";
import React from "react";
import Link from "next/link";

import Egg from "@/assets/egg.svg";

import { Button, Space } from "antd";

export default function AccountSettings() {
  return (
    <div className="flex flex-col min-h-screen p-6 bg-[#FAFAFA]">
      <main className="flex-1 flex flex-col max-w-md mx-auto w-full mb-8">
        <div className="flex justify-center mb-12">
          <Egg />
        </div>

        <h1 className="text-dark-grey text-2xl tracking-widst mb-16 text-left">
          アカウント設定
        </h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-dark-grey">お名前</p>
            <p className="text-dark-grey">まりこ</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-dark-grey">メールアドレス</p>
            <p className="text-dark-grey">eggumail@eggu.jp</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-dark-grey">パスワード</p>
            <p className="text-dark-grey">●●●●●●●●●●</p>
          </div>
        </div>

        <Space
          direction="vertical"
          className="!w-full !gap-y-4 !my-16"
          classNames={{ item: "!w-full !text-center" }}
        >
          <Link href="/account-settings/change">
            <Button type="primary" htmlType="submit" className="!w-full">
              変更する
            </Button>
          </Link>
          <Button
            variant="text"
            color="danger"
            className=" !text-center !mx-auto"
          >
            アカウント削除
          </Button>
        </Space>
      </main>
    </div>
  );
}
