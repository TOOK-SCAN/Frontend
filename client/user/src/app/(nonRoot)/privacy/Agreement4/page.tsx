const Agreement4 = () => {
  return (
    <div className="p-[1.5rem]">
      <div className="mb-[1.5rem] flex items-center justify-start">
        <div>
          <h2 className="mb-4 text-[1.25rem] font-bold text-black">
            서비스 이용과정에서 수집될 수 있는 정보
          </h2>
          <ul className="list-disc space-y-2 pl-4 text-[1rem] text-gray-700">
            {' '}
            <li>
              이용자의 브라우저 종류 및 OS, 접속 IP 정보, 접속로그, 쿠키
            </li>{' '}
            <li>(모바일기기 이용 시) 단말기 정보, 단말 OS 정보</li>{' '}
            <li>구매/결제/취소/환불/상담 내역</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Agreement4
