export default function Section1() {
  return (
    <div className="h-[740px] px-[16px] pt-[72px] flex flex-col relative">

        <div className="absolute inset-0 z-0 overflow-hidden">
            <img src="/Section1.jpg" alt="Section1 이미지" className="w-full h-full object-[60%_50%] object-cover transform scale-150"/>

        </div>

        {/* <div className="z-0 overflow-hidden">
            <img src="/Section1.jpg" alt="Section1 이미지" className="inset-[-80px] w-full h-full object-[50%_80%] object-cover absolute transform scale-180 translate-x-[20%]"/>

        </div> */}
        
        <div className="flex flex-col gap-[36px] z-10">

            <div className="flex flex-col gap-[12px]">

                <div className="font-pretendard text-colorText_base_colorTextBrand font-[500] text-[36px] leading-[120%] tracking-[-0.9px]">
                    <p>
                        피부에 닿는 순간,
                    </p>
                    
                    <p>
                        자연이 느껴집니다
                    </p>
                </div>

                <div className="font-pretendard text-colorText_base_colorTextSecondary font-regular text-[14px] leading-[140%] tracking-[-0.35px]">
                    <p>
                        EWG 그린등급 원료와 비건 인증, 그리고 임상 검증까지.
                    </p>
                    
                    <p>
                        지금 당신의 피부가 기다리던 선택을 만나보세요.
                    </p>
                </div>

            </div>

            <div className="flex flex-row gap-[12px]">

                <div className="bg-button_outlined_buttonOutlinedBg outline outline-1 outline-button_outlined_buttonOutlinedBorder flex flex-col justify-center items-center px-[12px] h-[40px]">
                    <div className="justify-start text-button_outlined_buttonOutlinedText leading-tight text-sm">
                        성분표 보기
                    </div>
                </div>

                <div className="bg-button_primary_buttonPrimaryBg flex flex-col justify-center items-center px-[12px] h-[40px]">
                    <div className="justify-start text-button_primary_buttonPrimaryText leading-tight text-sm">
                        컬렉션 보기
                    </div>
                </div>

            </div>

        </div>

    </div>

  );
}