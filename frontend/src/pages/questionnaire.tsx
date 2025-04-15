import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { zodResolver } from "@hookform/resolvers/zod";

import Egg from "@/assets/egg.svg";

import { Button, Checkbox, Form, Input } from "antd";
import { z } from "zod";

const questionnaireSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  age: z.coerce.number().min(1, "年齢を入力してください"),
  height: z.coerce.number().min(1, "身長を入力してください"),
  weight: z.coerce.number().min(1, "体重を入力してください"),
  privacyPolicy: z
    .boolean()
    .refine((value) => value, "プライバシーポリシーに同意してください")
});

const QuestionnaireForm: FC = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<z.infer<typeof questionnaireSchema>>({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: {
      name: "",
      age: 0,
      height: 0,
      weight: 0,
      privacyPolicy: false
    },
    mode: "onBlur"
  });

  console.log(errors);

  const onSubmit = (data: z.infer<typeof questionnaireSchema>) => {
    console.log(data);
    // Add form validation and submission logic here
    // For now, we'll just simulate a successful submission
    router.push("/home-after-use");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] pb-8 font-sans">
      {/* Header with Egg Logo */}
      <div className="relative flex justify-center my-6">
        <Egg />
      </div>

      {/* Form Title Section */}
      <div className="px-6 mb-6">
        <h1 className="text-[22px] text-[#878787] tracking-[0.2em] mb-2">
          問診票
        </h1>
        <p className="text-[16px] text-[#878787] tracking-[0.1em]">
          以下の項目のご回答をお願いします。
        </p>
      </div>

      <Form
        layout="vertical"
        rootClassName="!px-6"
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item
          label={<span className="text-dark-grey">名前</span>}
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="例：山田 花子" />
            )}
          />
        </Form.Item>
        <Form.Item
          label={<span className="text-dark-grey">年齢</span>}
          validateStatus={errors.age ? "error" : ""}
          help={errors.age?.message}
        >
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <Input {...field} type="number" placeholder="例：30" min={0} />
            )}
          />
        </Form.Item>
        <Form.Item
          label={<span className="text-dark-grey">身長</span>}
          validateStatus={errors.height ? "error" : ""}
          help={errors.height?.message}
        >
          <Controller
            name="height"
            control={control}
            render={({ field }) => <Input {...field} placeholder="例：160" />}
          />
        </Form.Item>
        <Form.Item
          label={<span className="text-dark-grey">体重</span>}
          validateStatus={errors.weight ? "error" : ""}
          help={errors.weight?.message}
        >
          <Controller
            name="weight"
            control={control}
            render={({ field }) => <Input {...field} placeholder="例：50" />}
          />
        </Form.Item>
        <Form.Item
          name="privacyPolicy"
          validateStatus={errors.privacyPolicy ? "error" : ""}
          label={null}
          className="flex justify-center items-center"
        >
          <Controller
            name="privacyPolicy"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value}>
                <span className="text-dark-grey text-xs">
                  <u className="text-[#EC0000] text-xs">プライバシーポリシー</u>
                  に同意します。
                </span>
              </Checkbox>
            )}
          />
        </Form.Item>

        <Form.Item className="flex justify-center mb-6 !w-full">
          <Button
            htmlType="submit"
            disabled={!isValid}
            type="primary"
            className=" text-white !w-full !py-4 text-[22px] tracking-[0.2em]"
          >
            入力内容確認
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default QuestionnaireForm;
