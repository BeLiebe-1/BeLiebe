import { FC, useState } from "react";
import Head from "next/head";

import Egg from "@/assets/egg.svg";

import { Button, Checkbox } from "antd";
import { twMerge } from "tailwind-merge";

type ActionItemProps = {
  text: string;
  completed?: boolean;
  disabled?: boolean;
  onChange: (label: string, completed: boolean) => void;
};

const ActionItem: FC<ActionItemProps> = ({
  text,
  completed = false,
  disabled = false,
  onChange
}) => {
  return (
    <div className="flex items-center">
      <div className="flex-1 py-3 px-4 bg-white rounded-[10px]">
        <Checkbox
          onChange={(e) => onChange(text, e.target.checked)}
          checked={completed}
          disabled={disabled}
          className=" !text-[13px] !text-dark-grey !fill-[#E88D6A]"
        >
          {text}
        </Checkbox>
      </div>
    </div>
  );
};

export default function ActionPlanPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [todoList, setTodoList] = useState<
    { label: string; completed: boolean }[]
  >([
    { label: "体重を３キロ増やす", completed: false },
    { label: "パートナーと子供のタイミングを相談する", completed: false },
    { label: "BMIの指数を標準値+-2以内におさめる", completed: false }
  ]);

  const handleClickSubmit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleTodoChange = (label: string, completed: boolean) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.label === label ? { ...todo, completed } : todo))
    );
  };

  return (
    <>
      <Head>
        <title>アクションプラン | EggU</title>
        <meta
          name="description"
          content="自分らしい人生計画を立てるためのアクションプラン"
        />
      </Head>

      <main className="flex flex-col min-h-screen bg-[var(--color-background)] px-6 pb-8 font-sans">
        {/* Logo */}
        <div className="flex justify-center items-center mt-12 mb-12">
          <Egg />
        </div>

        {/* Page Title */}
        <h1 className="text-[22px] text-[#878787] tracking-[0.2em] leading-[1.44] mb-4">
          アクションプラン
        </h1>

        {/* Description */}
        <p className="text-[13px] text-[#585556] tracking-[0.25em] leading-[1.84] mb-8">
          自分らしい人生計画を立ててみたい。今すぐ妊娠したいわけではないけれど、いつかのために今できることをやっておきたい、そんなあなたに。
        </p>

        {/* Incomplete Action List */}
        <h2 className="text-[13px] text-[#878787] tracking-[0.1em] leading-[1.44] mb-4">
          未達成のアクションりすと✅
        </h2>

        <div className="mb-8 flex-col flex gap-1.5">
          {todoList.map((todo) => (
            <ActionItem
              key={todo.label}
              text={todo.label}
              disabled={!isEditing}
              completed={todo.completed}
              onChange={handleTodoChange}
            />
          ))}
        </div>

        {/* Completed Action List */}
        <h2 className="text-[13px] text-[#878787] tracking-[0.1em] leading-[1.44] mb-4">
          達成済みのアクションりすと🎉
        </h2>

        <div className="flex flex-col gap-1.5 mb-12">
          <ActionItem
            text="1日の食事を記録して食生活を整える"
            completed={true}
            disabled={true}
            onChange={() => {}}
          />
          <ActionItem
            text="パートナーと子供のタイミングを相談する"
            completed={true}
            disabled={true}
            onChange={() => {}}
          />
        </div>

        {/* Edit Button */}
        <div className="mt-auto">
          <Button
            onClick={handleClickSubmit}
            variant={!isEditing ? "outlined" : "solid"}
            color="primary"
            className={twMerge(
              "w-full !py-4 !rounded-4xl bg-transparent border !text-[#E88D6A] !text-[13px] !tracking-[0.25em] focus:outline-none !focus:ring-2 !h-auto",
              isEditing && "!text-white"
            )}
            aria-label="アクションプランを編集する"
          >
            編集する
          </Button>
        </div>
      </main>
    </>
  );
}
