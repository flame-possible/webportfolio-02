
export default function Footer() {
  return (
    <footer className="px-[16px] py-[40px]">

        <div className="flex flex-col gap-[40px]">

            <div className="flex flex-col gap-[8px]">

                <p className="text-colorText_base_colorTextPrimary font-belleza text-2xl font-normal leading-loose">
                    BEAUNATURE
                </p>

                <p className="text-colorText_base_colorTextTertiary text-sm font-normal font-pretendard leading-tight">
                    자연을 지키는 비건 뷰티, 피부를 위한 가장 순한 선택.
                </p>

            </div>

            <div className="flex flex-col gap-[24px]">

                <div className="flex flex-col gap-[8px]">
                    <p className="text-colorText_base_colorTextPrimary text-sm font-medium font-pretendard leading-tight">
                        소개
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        브랜드 스토리
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        탄생 비하인드
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        비건 철학
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        전성분 기준
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        지속가능 포장재
                    </p>
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-colorText_base_colorTextPrimary text-sm font-medium font-pretendard leading-tight">
                        서비스
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        전체 제품 보기
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        정기배송 안내
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        샘플 키트 소개
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        리필 프로그램
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        성분표 다운로드
                    </p>
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-colorText_base_colorTextPrimary text-sm font-medium font-pretendard leading-tight">
                        고객 센터
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        자주 묻는 질문
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        배송/교환 안내
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        제품 성분표
                    </p>
                    <p className="text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">
                        문의하기
                    </p>
                </div>

            </div>

        </div>

        <div className="h-[48px]"></div>

        <div className="h-0 outline outline-1 outline-colorBorder_colorBorderDefault"></div>
        
        <div className="h-[48px]"></div>

        <div className="flex flex-col gap-[24px] text-colorText_base_colorTextSecondary text-sm font-normal font-pretendard leading-tight">

            <div className="flex flex-col">

                <p>
                    이용약관 | 개인정보처리방침 | 반품/환불 정책
                </p>
                
                <p>
                    사업자등록번호 123-45-67890 | 통신판매업신고 2025-서울강남-01234
                </p>

            </div>
                
            <p>
                © 2025 BEAUNATURE. All rights reserved.
            </p>

        </div>

    </footer>
  );
}