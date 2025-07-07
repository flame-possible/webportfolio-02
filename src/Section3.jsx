export default function Section3() {
  return (
    <div className="h-[500px] py-[56px] px-[16px]">

        <div className="flex flex-col gap-[24px]">

            <div className="flex flex-col gap-[4px]">

                <p className="text-colorText_base_colorTextBrand text-base font-medium font-pretendard leading-snug">
                    Feature 01
                </p>

                <p className="text-colorText_base_colorTextPrimary text-2xl font-normal font-pretendard leading-loose">
                    천연 성분 기반 클린 처방
                </p>

                <p className="text-colorText_base_colorTextTertiary text-sm font-normal font-pretendard leading-tight">
                    BEAUNATURE는 EWG 그린등급 원료만을 사용하며, 유기농 알로에베라 추출물, 녹차추출물, 판테놀 등 민감성 피부도 
                    안심할 수 있는 저자극 성분으로 처방합니다. 피부에 자연의 순한 에너지를 전하고, 장기간 사용해도 부담 없는 포뮬러를 추구합니다. 
                    인공향료, 파라벤, 실리콘, 동물 유래 성분은 전면 배제하였습니다.
                </p>

            </div>

            <img src="/Section3.jpg" alt="Section3 이미지" className="w-full h-[200px] object-cover"/>

        </div>


    </div>

  );
}