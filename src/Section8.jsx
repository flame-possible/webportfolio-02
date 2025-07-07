export default function Section8() {
  return (
    <div className="h-[280px] py-[56px] px-[16px] flex flex-col relative">
        

        <div className="absolute inset-0 z-0 overflow-hidden">
            <img src="/Section8.jpg" alt="Section8 이미지" className="w-full h-full object-cover"/>

        </div>

        <div className="flex flex-col gap-[40px] z-10">

            <div className="flex flex-col text-white text-base font-normal font-pretendard leading-snug">
                <p>
                    “당신의 피부가 매일 맞이하는 첫 순간, 
                </p>
                <p>
                    자연이 함께한다면 더 건강할 수 있습니다. 
                </p>
                <p>
                    지금, 피부와 지구 모두를 위한 선택을 
                </p>
                <p>
                    시작해보세요.”
                </p>
            </div>

            <div className="flex flex-row gap-[12px]">

                <div className="bg-button_secondary_buttonSecondaryBg outline-button_outlined_buttonOutlinedBorder flex flex-col justify-center items-center px-[12px] h-[40px]">
                    <div className="justify-start text-button_outlined_buttonOutlinedText leading-tight text-sm">
                        지금 구매하기
                    </div>
                </div>

                <div className="bg-button_secondary_buttonSecondaryBg outline-button_outlined_buttonOutlinedBorder flex flex-col justify-center items-center px-[12px] h-[40px]">
                    <div className="justify-start text-button_outlined_buttonOutlinedText leading-tight text-sm">
                        정기배송 신청
                    </div>
                </div>

            </div>

        </div>

    </div>



  );
}