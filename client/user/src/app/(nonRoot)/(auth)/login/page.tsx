'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InputField from '@tookscan/components/ui/InputField'
import { Button } from '@tookscan/components/ui/Button'

import KakaoIcon from '@/assets/images/signup/Kakao.svg'
import GoogleIcon from '@/assets/images/signup/Google.svg'
import ConsentLabel from '@tookscan/components/ui/Label/ConsentLabel'

const LoginPage = () => {
  const [authPreference, setAuthPreference] = useState({
    saveId: false,
    autoLogin: false,
  })

  return (
    <div className="flex max-w-[1080px] flex-col items-center bg-blue-secondary py-2 pb-12">
      {/* 타이틀 */}
      <div className="w-[440px] py-8 text-left">
        <div className="text-lg font-bold text-blue-primary">
          툭스캔과 함께해요!
        </div>
        <div className="mt-2 text-3xl font-bold leading-tight text-black-800">
          <p>툭스캔과 함께라면</p>
          <p>간편해지는 나의 생활</p>
        </div>
      </div>

      {/* 로그인 박스 */}
      <div className="flex w-[440px] flex-col gap-8 rounded-lg bg-white p-6 shadow-md">
        <div className="border-b-2 border-blue-primary py-5 text-center text-lg font-semibold text-blue-primary">
          로그인
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex w-full">
            {/* 아이디 저장 */}
            <div className="flex-1 space-x-1">
              <ConsentLabel
                content="아이디 저장"
                consentStatus={authPreference.saveId}
                size="lg"
                onClick={() =>
                  setAuthPreference((prev) => ({
                    ...prev,
                    saveId: !prev.saveId,
                  }))
                }
              />
            </div>
            {/* 자동 로그인 */}
            <div className="flex-1 space-x-1">
              <ConsentLabel
                content="자동 로그인"
                consentStatus={authPreference.autoLogin}
                size="lg"
                onClick={() =>
                  setAuthPreference((prev) => ({
                    ...prev,
                    autoLogin: !prev.autoLogin,
                  }))
                }
              />
            </div>
          </div>

          {/* 입력 필드 */}
          <div className="mt-4 space-y-4">
            <InputField
              type="simple"
              placeholder="아이디"
              onChange={(e) => console.log(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="비밀번호"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>

          {/* 아이디/비밀번호 찾기 */}
          <div className="mt-6 flex justify-end text-xs text-gray-500">
            <Link href="/id/reset">아이디 · 비밀번호 찾기</Link>
          </div>
        </div>

        {/* 로그인 버튼 */}
        <Button
          className="w-full"
          variant="primary"
          size="md"
          onClick={() => console.log('로그인 버튼 클릭')}
        >
          로그인
        </Button>

        {/* SNS 로그인 */}
        <div className="flex items-center space-x-4">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-sm text-gray-500">SNS 로그인</span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="flex flex-col space-y-2">
          {/* Kakao Login Button */}
          <button
            className="w-full"
            onClick={() => console.log('카카오 로그인')}
          >
            <Image
              src={KakaoIcon}
              alt="카카오 로그인"
              width={440}
              height={48}
              className="w-full"
            />
          </button>
          {/* Google Login Button */}
          <button className="w-full" onClick={() => console.log('구글 로그인')}>
            <Image
              src={GoogleIcon}
              alt="구글 로그인"
              width={440}
              height={48}
              className="w-full"
            />
          </button>
        </div>

        {/* "아직 계정이 없으신가요?" 박스 */}
        <div className="w-full p-4 text-center">
          <div className="text-sm font-semibold">아직 계정이 없으신가요?</div>
          <div className="mt-2 text-xs text-black-600">
            회원가입을 통해 툭스캔의 모든 서비스를 이용할 수 있습니다.
          </div>
          {/* 회원가입 버튼 */}
          <Link href="/join">
            <Button className="mt-4 w-full" variant="secondary" size="md">
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
