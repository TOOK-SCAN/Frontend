'use client'

import React, { useRef, useEffect, useState } from 'react'
import FirstPage from './_components/ScrollPages/1stPage'
import SecondPage from './_components/ScrollPages/2stPage'
import ThirdPage from './_components/ScrollPages/3stPage'
import FourthPage from './_components/ScrollPages/4stPage'
import FifthPage from './_components/ScrollPages/5stPage'
import Head from 'next/head'

const FullScrollPage = () => {
  const sectionsRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault()

    if (isScrolling) return

    const delta = event.deltaY
    const sections = sectionsRef.current?.children

    if (!sections) return

    if (delta > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1)
    } else if (delta < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1)
    }

    setIsScrolling(true)
    setTimeout(() => {
      setIsScrolling(false)
    }, 700)
  }

  useEffect(() => {
    const container = sectionsRef.current
    if (!container) return

    window.addEventListener('wheel', handleScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [currentSection, isScrolling])

  useEffect(() => {
    const sections = sectionsRef.current?.children
    if (!sections) return

    if (currentSection >= 0 && currentSection < sections.length) {
      const target = sections[currentSection] as HTMLElement
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentSection])

  return (
    <>
      {/* SEO 관련 태그 추가 */}
      <Head>
        <title>툭스캔 - 간편한 스캔 서비스</title>
        <meta
          name="description"
          content="툭스캔에서 합법적이고 간편한 스캔 서비스를 경험하세요."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="툭스캔 - 간편한 스캔 서비스" />
        <meta
          property="og:description"
          content="툭스캔에서 합법적이고 간편한 스캔 서비스를 경험하세요."
        />
        <meta property="og:url" content="https://tookscan.com" />
        <meta
          property="og:image"
          content="??????"
        />
        <meta property="og:locale" content="ko_KR" />
        <link rel="canonical" href="https://tookscan.com" />
      </Head>

      {/* 전체 페이지 구조 */}
      <div ref={sectionsRef} className="relative h-screen overflow-hidden">
        <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="text-lg font-bold">툭스캔</div>
            <div>
              <a href="#about" className="px-4 text-blue-primary">
                소개
              </a>
              <a href="#features" className="px-4 text-blue-primary">
                특징
              </a>
              <a href="#contact" className="px-4 text-blue-primary">
                문의
              </a>
            </div>
          </nav>
        </header>

        {/* 시맨틱 태그 및 페이지 내용 */}
        <main>
          <section
            className="flex h-screen items-center justify-center bg-blue-primary"
            style={{ paddingTop: '90px' }}
            id="intro"
          >
            <FirstPage />
          </section>

          <section
            className="flex h-screen items-center justify-center"
            id="about"
          >
            <SecondPage />
          </section>

          <section
            className="flex h-screen items-center justify-center"
            id="features"
          >
            <ThirdPage />
          </section>

          <section
            className="flex h-screen items-center justify-center"
            id="pricing"
          >
            <FourthPage />
          </section>

          <section
            className="flex h-screen items-center justify-center"
            id="contact"
          >
            <FifthPage />
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>© 2025 툭스캔 - 모든 권리 보유.</p>
          </div>
        </footer>
      </div>
    </>
  )
}


export default FullScrollPage
