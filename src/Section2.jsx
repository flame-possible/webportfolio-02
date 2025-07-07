export default function Section2() {
  return (
    <div className="h-[825px] py-[56px] px-[16px]">

        <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[4px]">
                <p className="text-colorText_base_colorTextPrimary font-pretendard leading-loose text-2xl">
                    자연을 담은 스킨케어 라인업
                </p>

                <div className="flex flex-col">
                    <p className="text-colorText_base_colorTextSecondary font-pretendard leading-tight text-sm">
                        피부에 부담 없이, 매일 사용할 수 있는 진짜 ‘클린 뷰티’.
                    </p>
                    <p className="text-colorText_base_colorTextSecondary font-pretendard leading-tight text-sm">
                        당신의 루틴에 맞는 제품을 선택해보세요.
                    </p>
                </div>
            </div>


            <div className="flex flex-col gap-[16px]">

                <div className="flex flex-row gap-[16px]">

                    <div className="flex flex-col">

                        <img src="/Section2_1.png" alt="Section2-1 이미지" className="w-full h-[163px] object-cover"/>

                        <div className="py-[16px] flex flex-col gap-[4px]">

                            <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                                BEAUNATURE 리페어 앰플 세럼 30ml
                            </p>
                            
                            <p className="text-colorText_base_colorTextPrimary text-sm font-medium font-pretendard leading-tight">
                                ₩38,000
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-col">

                        <img src="/Section2_2.png" alt="Section2-1 이미지" className="w-full h-[163px] object-cover"/>

                        <div className="py-[16px] flex flex-col gap-[4px]">

                            <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                                BEAUNATURE 수분 진정 크림 50ml
                            </p>
                            
                            <p className="text-colorText_base_colorTextPrimary text-sm font-medium font-pretendard leading-tight">
                                ₩32,000
                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex flex-row gap-[16px]">

                    <div className="flex flex-col">

                        <img src="/Section2_3.png" alt="Section2-1 이미지" className="w-full h-[163px] object-cover"/>

                        <div className="py-[16px] flex flex-col gap-[4px]">

                            <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                                BEAUNATURE 저자극 수분 토너 150ml
                            </p>
                            
                            <p className="text-colorText_base_colorTextPrimary text-sm font-medium font-pretendard leading-tight">
                                ₩25,000
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-col">

                        <img src="/Section2_3.png" alt="Section2-1 이미지" className="w-full h-[163px] object-cover"/>

                        <div className="py-[16px] flex flex-col gap-[4px]">

                            <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                                BEAUNATURE 저자극 수분 토너 150ml
                            </p>
                            
                            <p className="text-colorText_base_colorTextPrimary text-sm font-medium font-pretendard leading-tight">
                                ₩25,000
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="flex flex-row justify-center">
                <a href="#" className="flex flex-row gap-[6px]">
                    <span className="text-button_link_buttonLinkText text-sm font-medium font-pretendard leading-tight">
                        전체보기
                    </span>

                    <img src="/ArrowRightOutlined.svg" alt="ArrowRightOutlined" className="w-[16px] h-[16px] object-cover"/>

                </a>
            </div>

        </div>

    </div>

  );
}