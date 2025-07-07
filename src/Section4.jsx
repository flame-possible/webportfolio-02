export default function Section4() {
  return (
    <div className="h-[500px] py-[56px] px-[16px]">

        <div className="flex flex-col gap-[24px]">

            <div className="flex flex-col gap-[4px]">

                <p className="text-colorText_base_colorTextBrand text-base font-medium font-pretendard leading-snug">
                    Feature 02
                </p>

                <p className="text-colorText_base_colorTextPrimary text-2xl font-normal font-pretendard leading-loose">
                    산뜻한 흡수감, 24시간 보습 유지
                </p>

                <p className="text-colorText_base_colorTextTertiary text-sm font-normal font-pretendard leading-tight">
                    끈적임 없는 젤-크림 제형으로 바르는 순간 빠르게 흡수됩니다. 피부 표면에만 머무는 것이 아니라, 속부터 수분을 
                    채우는 구조로 한 번의 사용만으로도 24시간 이상 보습감 유지가 가능합니다. 유수분 밸런스를 맞춰 번들거림 없이 
                    피부가 촉촉함을 유지하며, 베이스 메이크업 전 단계에 사용해도 밀림 없이 밀착됩니다.
                </p>

            </div>

            <img src="/Section4.jpg" alt="Section4 이미지" className="w-full h-[200px] object-cover"/>

        </div>


    </div>

  );
}