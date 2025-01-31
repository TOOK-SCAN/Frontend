import { useApplyContext } from '@/app/(nonRoot)/apply/_contexts/ApplyContext'
import { ScanInfo, ShippingInfo, TermsAgreement } from '../index'
import clsx from 'clsx'

const Step = {
  0: () => <ScanInfo />,
  1: () => <ShippingInfo />,
  2: () => <TermsAgreement />,
}

const StepSheet = () => {
  const { pageIndex } = useApplyContext()
  const StepComponent = Step[pageIndex as keyof typeof Step] // 컴포넌트 함수 가져오기
  return StepComponent ? (
    <div
      className={clsx(
        'flex w-[60rem] flex-col gap-12 rounded-3xl bg-white p-12'
      )}
    >
      <StepComponent />
    </div>
  ) : (
    <div>잘못된 페이지입니다.</div>
  )
}

export default StepSheet
