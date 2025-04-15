import { FC } from "react";

import Egg from "@/assets/egg.svg";

// Component for action items - both completed and incomplete
const ActionItem: FC<{
  text: string;
  completed?: boolean;
}> = ({ text, completed = false }) => {
  return (
    <div className="flex items-center bg-white rounded-[10px] px-4 py-3 mb-3">
      <div className="w-5 h-5 mr-3 relative">
        <div
          className={`w-5 h-5 rounded-full ${completed ? "bg-[#FAFAFA]" : "bg-[#E6E6E6]"}`}
        ></div>
        {completed && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-[2px] bg-[#E88D6A] rotate-45 absolute"></div>
            <div className="w-3 h-[2px] bg-[#E88D6A] -rotate-45 absolute"></div>
          </div>
        )}
      </div>
      <div
        className={`text-[13px] tracking-wider ${completed ? "text-[#878787]" : "text-[#585556]"}`}
      >
        {text}
      </div>
    </div>
  );
};

// Component for service items
const ServiceItem: FC<{
  title: string;
}> = ({ title }) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-[10px] p-4 mb-3">
      <div className="text-[22px] tracking-wider text-[#878787]">{title}</div>
    </div>
  );
};

// Component for column items
const ColumnItem: FC = () => {
  return (
    <div>
      <div className="bg-white rounded-[10px] p-4 mb-3 h-40" />
      <div className="text-[12px] tracking-wider text-[#878787]">
        順調にキャリアを築く中で妊娠。揺れる心、その時何を思う？
      </div>
    </div>
  );
};

export default function HomeAfterUse() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] pb-8 font-sans">
      {/* Header with Egg Logo */}
      <div className="relative flex justify-center my-6">
        <Egg />
      </div>

      {/* Greeting Section */}
      <div className="px-6 mb-6">
        <div className="text-[26px] text-[#878787] tracking-wider leading-[1.4] mb-4">
          まりこさん
          <br />
          こんにちは！
        </div>
        <div className="text-[16px] text-[#878787] tracking-wider leading-[1.4] mb-4">
          EggUマイページへようこそ🥚
          <br />
          アクションの達成率を確認してね！
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="px-6 mb-6">
        <div className="w-full h-[30px] bg-[#F0F0F0] rounded-[50px] relative mb-6">
          <div className="w-1/2 h-full bg-[#DC9171] rounded-[110px] flex items-center justify-center">
            <span className="text-white text-[26px]">50%</span>
          </div>
        </div>
      </div>

      {/* Days since first use */}
      <div className="px-6 mb-6">
        <p className="text-[16px] text-[#878787] text-center tracking-wider">
          はじめてのEggUから
        </p>
        <p className="text-[46px] text-[#878787] text-center tracking-wider">
          325日
        </p>
        <p className="text-[16px] text-[#878787] text-center tracking-wider">
          経過しました。
        </p>

        <div className="bg-[#F8F0E1] rounded-[10px] p-4 mt-3">
          <p className="text-[13px] font-semibold text-[#DC9171] tracking-wider">
            1year クーポンで10%OFFでEggUする🥚
          </p>
        </div>
      </div>

      {/* Incomplete Actions Section */}
      <div className="px-6 mb-6">
        <div className="text-[13px] text-[#585556] tracking-wider mb-3">
          未達成のアクションりすと✅
        </div>
        <ActionItem text="体重を３キロ増やす" />
        <ActionItem text="パートナーと子供のタイミングを相談する" />
        <ActionItem text="BMIの指数を標準値+-2以内におさめる" />
      </div>

      {/* Divider */}
      <div className="px-6 mb-6">
        <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
      </div>

      {/* Completed Actions Section */}
      <div className="px-6 mb-6">
        <div className="text-[13px] text-[#585556] tracking-wider mb-3">
          達成済みのアクションりすと🎉
        </div>
        <ActionItem text="1日の食事を記録して食生活を整える" completed={true} />
        <ActionItem
          text="パートナーと子供のタイミングを相談する"
          completed={true}
        />
        <ActionItem
          text="BMIの指数を標準値+-2以内におさめる"
          completed={true}
        />
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-2 gap-3 px-6 mb-6">
        <div className="flex items-center justify-center text-center bg-white rounded-[10px] px-4 py-3">
          <div className="text-[#878787] text-[22px] tracking-wider">
            検査結果
          </div>
        </div>
        <div className="flex items-center justify-center text-center bg-white rounded-[10px] px-4 py-3">
          <div className="text-[#878787] text-[22px] tracking-wider">
            ネクストアクションリスト
          </div>
        </div>
        <div className="flex items-center justify-center text-center bg-white rounded-[10px] px-4 py-3 col-span-2">
          <div className="text-[#878787] text-[22px] tracking-wider text-center">
            ライフプラン
            <br />
            シート
          </div>
        </div>
      </div>

      {/* Column Section */}
      <div className="px-6 mb-6">
        <div className="text-[22px] text-[#878787] tracking-wider mb-3">
          コラム
        </div>
        <div className="flex flex-row items-center gap-3.5">
          <ColumnItem />
          <ColumnItem />
        </div>
      </div>

      {/* Service Section */}
      <div className="px-6 mb-6">
        <div className="text-[22px] text-[#878787] tracking-wider mb-3">
          EggU サービス
        </div>
        <div className="grid grid-cols-2 gap-3">
          <ServiceItem title="卵子凍結" />
          <ServiceItem title="保険サービス" />
          <ServiceItem title="サプリ" />
          <ServiceItem title="転職" />
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 mt-6">
        <p className="text-center text-[#878787] text-[18px] mb-6">
          アカウント設定
        </p>

        <div className="flex flex-col">
          <p className="text-[#878787] text-[18px] tracking-wider mb-3">
            プライバシーポリシー
          </p>
          <div className="flex items-center justify gap-4">
            <p className="text-[#878787] text-[18px] tracking-wider">
              お問い合わせ
            </p>
            <p className="text-[#878787] text-[18px] tracking-wider">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
