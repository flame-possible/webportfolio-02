export default function Section5() {
  return (
    <div className="h-[500px] py-[56px] px-[16px]">

        <div className="flex flex-col gap-[24px]">

            <div className="flex flex-col gap-[4px]">

                <p className="text-colorText_base_colorTextBrand text-base font-medium font-pretendard leading-snug">
                    Feature 03
                </p>

                <p className="text-colorText_base_colorTextPrimary text-2xl font-normal font-pretendard leading-loose">
                    임상 검증으로 확인된 효과
                </p>

                <p className="text-colorText_base_colorTextTertiary text-sm font-normal font-pretendard leading-tight">
                    독립 피부과 테스트 기관을 통해 2주간 임상 시험을 진행한 결과, 테스터의 95.7%가 수분감 개선을 체감, 92.4%는 
                    피부 진정 효과에 만족했다고 응답했습니다. 피부 자극 테스트 또한 ‘무자극’ 판정을 받았으며, 예민한 피부를 가진 
                    소비자도 안심하고 사용할 수 있는 안정성을 확보했습니다.
                </p>

            </div>

            <img src="/Section5.jpg" alt="Section5 이미지" className="w-full h-[200px] object-cover"/>

        </div>


    </div>

  );
}