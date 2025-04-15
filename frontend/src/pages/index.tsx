import { FC } from "react";
import Link from "next/link";

import Egg from "@/assets/egg.svg";

const MenuItem: FC<{
  number?: string;
  title: string;
  highlighted?: boolean;
  className?: string;
}> = ({ number, title, highlighted = false, className = "" }) => {
  return (
    <div
      className={`flex items-center bg-white rounded-[10px] px-4 py-3 mb-3 ${
        highlighted
          ? "border border-[var(--color-light-orange)]"
          : "border border-[var(--color-border)]"
      } ${className}`}
    >
      {number && (
        <div
          className={`mr-3 text-sm tracking-widest ${highlighted ? "text-[var(--color-light-orange)]" : "text-[var(--color-light-grey)]"}`}
        >
          {number}
        </div>
      )}
      <div
        className={`text-lg tracking-wider ${highlighted ? "text-[var(--color-light-orange)]" : "text-[var(--color-light-grey)]"}`}
      >
        {title}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] pb-8 font-sans">
      {/* Header with Egg Logo */}
      <div className="relative flex justify-center my-6">
        <Egg />
      </div>

      {/* Greeting Section */}
      <div className="px-6 mb-6">
        <div className="text-[26px] text-dark-grey tracking-wider leading-[1.4] mb-4.5">
          まりこさん
          <br />
          こんにちは！
        </div>
        <div className="text-[16px] text-dark-grey tracking-wider leading-[1.4] mb-4.5">
          EggUマイページへようこそ🥚
          <br />
          自分のからだについて知ろう！
        </div>
        <div className="text-[13px] text-red tracking-wider mb-6">
          キットの使用期限まであと84日です！
        </div>
      </div>

      {/* To-Do Section */}
      <div className="px-6 mb-6">
        <div className="text-[22px] text-dark-grey tracking-[0.2em] mb-3">
          やること
        </div>
        <Link href="/line-registration">
          <MenuItem number="01" title="LINE登録" highlighted={true} />
        </Link>
        <MenuItem number="0２" title="キットで検査して郵送" />
        <MenuItem number="0３" title="問診票へ回答" />
        <MenuItem number="0４" title="カウンセリング予約" />
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-2 gap-3 px-6 mb-6">
        <div className="flex text-center bg-white rounded-[10px] px-4 py-3 items-center justify-center text-dark-grey text-lg tracking-wider">
          検査結果
        </div>
        <div className="text-center bg-white rounded-[10px] text-dark-grey text-lg tracking-wider px-4 py-3 items-center justify-center">
          ネクストアクションリスト
        </div>
        <div className="text-dark-grey text-lg tracking-wider text-center bg-white rounded-[10px] px-4 py-3 justify-center col-span-2 items-center flex">
          ライフプラン
          <br />
          シート
        </div>
      </div>

      <p className="my-20 text-center text-dark-grey text-lg">アカウント設定</p>

      <div>
        <p className="text-dark-grey text-lg tracking-wider">
          プライバシーポリシー
        </p>
        <div className="flex items-center flex-row">
          <p className="text-dark-grey text-lg tracking-wider">お問い合わせ</p>
          <p className="text-dark-grey text-lg tracking-wider">FAQ</p>
        </div>
      </div>

      {/* Navigation to After-Use Homepage */}
      <div className="flex justify-center mt-10">
        <Link href="/home-after-use">
          <div className="bg-[var(--color-light-orange)] text-white py-3 px-6 rounded-[10px] text-center cursor-pointer">
            After-Use Homepage
          </div>
        </Link>
      </div>
    </div>
  );
}
