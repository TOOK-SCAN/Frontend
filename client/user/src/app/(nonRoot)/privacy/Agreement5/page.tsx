const Agreement5 = () => {
  return (
    <div className="p-[1.5rem]">
      <div className="mb-[1.5rem] flex items-center justify-start">
        <div>
          <h2 className="mb-4 text-[1.25rem] font-bold text-black">
            개인정보의 수집 방법
          </h2>
          <ul className="list-disc pl-6 text-[1rem] text-gray-700" role="list">
            +{' '}
            <li>
              회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해
              동의하고 입력하는 경우
            </li>
            + <li>고객 상담과정에서 수집</li>+{' '}
            <li>'쿠키(Cookie)'에 의한 정보 수집</li>+{' '}
            <li>외부 업체, 제휴사 등 제3자로부터 제공</li>+{' '}
            <li>로그를 통한 정보 수집</li>+{' '}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Agreement5
