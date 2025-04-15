import { useRouter } from "next/router";

import { Button } from "antd";
import { X } from "lucide-react";

export default function LineRegistration() {
  const router = useRouter();

  const handleLaterClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#C8C8C8] font-sans bg-[url('/images/kit-sample.png')] bg-cover bg-center py-8 px-10">
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-[rgba(70,70,70,0.4)] backdrop-blur-[4px] z-10" />

      <div className="flex flex-col flex-1 relative z-20">
        <div className="flex items-center justify-between">
          <div className="text-[22px] text-white tracking-[0.2em]">02</div>
          <Button
            shape="circle"
            className="!bg-[#D9D9D9B2]/70 !text-white !border-0"
            size="large"
          >
            <X />
          </Button>
        </div>

        <div className="text-[22px] text-white tracking-[0.2em] mb-6 mt-8">
          キットで検査して郵送
        </div>

        <div className="text-[16px] text-white tracking-[0.1em] leading-[1.44] mb-12">
          お手元のキットを使用して
          <br />
          簡単セルフチェックをしよう！
          <br />
          <br />
          採血できたら封筒にいれて
          <br />
          ポストへ投函してね！📮
        </div>

        <div className="w-full mx-auto mt-auto">
          <Button
            type="primary"
            className="!w-full text-white !rounded-3xl text-[15px] !h-auto font-medium tracking-[0.25em] !py-3.5 mb-6"
            onClick={() => router.push("/")}
          >
            郵送完了した
          </Button>

          <Button
            type="link"
            className="w-full bg-transparent !text-white py-2 text-[13px] tracking-[0.2em]"
            onClick={handleLaterClick}
          >
            あとにする
          </Button>
        </div>
      </div>
    </div>
  );
}
