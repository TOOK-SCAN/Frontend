'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@tookscan/components/ui/Button'
import html2canvas from 'html2canvas'
import OrderDetailBox from '@tookscan/components/ui/OrderDetailBox'

const OrderDetails = () => {
  const [showDetails, setShowDetails] = useState(false) // 자세히 버튼 상태

  const handleSaveImage = async () => {
    if (!showDetails) {
      setShowDetails(true) // 상자를 렌더링
    }

    setTimeout(async () => {
      try {
        const element = document.querySelector('.order-details')
        if (!element) throw new Error('저장할 요소를 찾을 수 없습니다.')

        // html2canvas로 캡처
        const canvas = await html2canvas(element as HTMLElement)
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = 'order-details.png'
        link.click()
      } catch (error) {
        console.error('이미지 저장 중 오류 발생:', error)
        alert('이미지 저장에 실패했습니다. 다시 시도해주세요.')
      }
    }, 100) // DOM 업데이트를 기다림
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100">
      {/* 이전으로 링크 */}
      <div className="mt-6 w-[640px] text-left">
        <Link href="/guest/order/check" className="text-blue-primary">
          &lt; 이전으로
        </Link>
      </div>

      {/* 타이틀 */}
      <div className="mt-8 w-[640px] text-left">
        <div className="text-xs font-bold text-blue-primary">
          비회원 주문조회
        </div>
        <div className="mt-2 text-lg font-bold leading-tight text-black-800">
          비회원 고객님도 <br /> 편하게 주문을 조회해보아요
        </div>
      </div>

      {/* 상자 */}
      <div className="mt-6 w-[640px] rounded-lg bg-white p-6 shadow-md">
        {/* 상자 제목 */}
        <div className="text-left text-lg font-bold text-black-800">
          비회원 주문조회
        </div>

        {/* 그리드 레이아웃 */}
        <div className="mt-4 grid grid-cols-6 gap-4 bg-blue-secondary p-2 text-center text-sm font-bold text-blue-primary">
          <div>주문 번호</div>
          <div>주문 일시</div>
          <div>상품 수량</div>
          <div>주문 금액</div>
          <div>작업 상태</div>
          <div>세부 내용</div>
        </div>

        {/* 데이터 */}
        <div className="grid grid-cols-6 items-center gap-4 p-2 text-center text-sm text-black-800">
          <div>24112700</div>
          <div>2024.12.27</div>
          <div>2건</div>
          <div>24,000원</div>
          <div>진행중</div>
          <div className="flex justify-center">
            <Button
              className="h-[28px] w-[70px] text-sm"
              variant="primary"
              onClick={() => setShowDetails((prev) => !prev)}
            >
              자세히
            </Button>
          </div>
        </div>

        {showDetails && (
          <OrderDetailBox
    currentStatus="업체도착"
    orderDate="2024.12.25 (월) 12:45"
    customer="홍길동"
    deliveryInfo="경기도 시흥시 산기대학로 237 TIP, 1203호"
    productDetails="스캔된 자료 2건"
    paymentAmount="47,000원"
    paymentMethod="TOSS / 무통장 입금"
    isModal={false}
  />
)}
      </div>
    </div>
  )
}

export default OrderDetails
