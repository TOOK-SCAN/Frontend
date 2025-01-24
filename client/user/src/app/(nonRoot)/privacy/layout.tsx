'use client'

import Banner from '@tookscan/components/ui/Banner/Banner'
import { useState } from 'react'
import { LayoutProps } from '../../../types/common'

const PrivacyLayout = ({ children }: LayoutProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const menuItems = [
    { label: '개인정보 수집목적 및 이용목적', link: './privacy/Agreement1' },
    { label: '수집하는 개인정보 항목', link: './Agreement2' },
    { label: '서비스 부정이용자 처리방안', link: './Agreement3' },
    {
      label: '서비스 이용과정에서 수집되는 정보',
      link: './Agreement4',
    },
    { label: '개인정보의 수집 방법', link: './Agreement5' },
  ]

  return (
    <div className="min-h-screen bg-blue-secondary px-8 py-12">
      <Banner type={3}></Banner>
      <div className="flex flex-col items-center justify-center">
        <div className="py-[6.25rem]">
          <div className="my-[3.5rem]">
            <div className="">
              <h1 className="text-blue-primary">이용약관 | 개인정보처리방침</h1>
              <h1 className="mt-[0.8rem] text-[2rem] font-semibold text-black">
                약관을 확인해주세요
              </h1>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="my-[1.5rem] flex justify-center gap-[0.5rem]">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className={`h-[2.2rem] w-[10rem] items-center justify-center truncate rounded-full border px-[1.25rem] py-[0.3rem] text-sm font-medium transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-blue-primary text-white'
                        : 'border-blue-primary text-blue-primary'
                    }`}
                    onClick={() => {
                      setActiveIndex(index)
                      window.location.href = item.link
                    }}
                    title={item.label} // 말줄임표를 볼 수 있는 툴팁
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[72rem] rounded-md bg-white p-6 pt-[3.2rem] shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyLayout
