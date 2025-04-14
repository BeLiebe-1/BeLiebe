import { useState } from "react";
import { useRouter } from "next/router";

import Egg from "@/assets/egg.svg";

import { Button, Form, Input } from "antd";

export default function Onboarding() {
  const router = useRouter();
  const [form] = Form.useForm<{ name: string }>();

  const nameValue = Form.useWatch("name", form);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleClickSubmit = () => {
    if (isSuccess) router.push("/");
    else setIsSuccess(true);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between bg-white p-6">
      <div className="mb-16 mt-8 mx-auto text-center">
        <Egg />
      </div>
      <div className="flex flex-col w-full h-full">
        {isSuccess ? (
          <div className="text-dark-grey mt-auto">
            <p>ありがとう！</p>
            <p>EggUアプリをはじめよう！🥚</p>
          </div>
        ) : (
          <div className="mb-16 space-y-8">
            <div className="text-left">
              <p className="text-dark-grey">はじめまして、</p>
              <p className="text-dark-grey">あなたの名前をおしえて！ ✏️</p>
            </div>

            <Form className="space-y-2" layout="vertical" form={form}>
              <Form.Item
                name="name"
                initialValue={""}
                extra={
                  <p className="text-[9px] text-dark-grey">
                    設定画面より変更可能
                  </p>
                }
                label={<span className="text-dark-grey"> おなまえ</span>}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="名前を入力してください"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 focus:border-gray-300 focus:outline-none"
                />
              </Form.Item>
            </Form>
          </div>
        )}

        <div className="mt-auto">
          <Button
            className="w-full rounded-md bg-gray-500 py-3 text-white hover:bg-gray-600"
            onClick={handleClickSubmit}
            disabled={!nameValue}
          >
            {isSuccess ? "はじめる" : "つぎへ"}
          </Button>
          {isSuccess && (
            <a
              href="#"
              className="text-dark-grey text-xs text-center block mt-2 underline"
            >
              入力しなおす
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
