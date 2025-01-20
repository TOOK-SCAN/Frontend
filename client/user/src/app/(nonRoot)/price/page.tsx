import Banner from '@tookscan/components/ui/Banner/Banner'
import Icon from '@tookscan/components/ui/Icon/Icon'

const Price = () => {
  return (
    <div>
      <Banner type={3} />
      <div className="flex flex-col items-center justify-center bg-blue-secondary">
        <div className="mt-[6.25rem] flex h-auto w-[72rem] flex-col items-start justify-start py-[3.125rem] text-start">
          <h2 className="mb-2 text-[1.125rem] font-medium text-blue-primary">
            가격안내
          </h2>
          <h1 className="mb-6 text-[2rem] font-bold text-gray-800">
            스캔 상세안내
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-[6.25rem] flex h-auto w-[72rem] flex-col items-center justify-center rounded-lg bg-white p-[3.125rem]">
            <div className="mb-8 flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 rounded-full bg-black px-3 py-1 text-sm font-medium text-yellow-500">
                <span> 🚨 업계 최저 가격 🚨 </span>
              </div>
              <h2 className="mb-[3.125rem] mt-4 text-[2rem] font-bold text-gray-800">
                스캔 가격
              </h2>
              <p className="mb-6 text-[1.25rem] text-black">10원 / 1페이지</p>
              <div className="flex flex-col gap-4">
                <div className="flex h-[3.125rem] w-[12.5rem] items-center justify-center rounded-[5rem] bg-blue-secondary px-4 py-2 text-blue-primary">
                  <Icon id="600dpi " className="mr-1 h-6 w-6" />
                  <span className="text-sm font-medium"> 600 DPI</span>
                </div>
                <div className="mb-[3.125rem] flex h-[3.125rem] w-[12.5rem] items-center justify-center rounded-[5rem] bg-blue-secondary px-4 py-2 text-blue-primary">
                  <Icon id="price " className="mr-1 h-6 w-6" />
                  <span className="text-sm font-medium"> 합리적인 가격 </span>
                </div>
              </div>
            </div>
            <div className="w-[37.5rem] overflow-hidden rounded-lg">
              <table className="w-full border-collapse border border-gray-600 text-[1.125rem]">
                <thead>
                  <tr>
                    <th className="h-[3.5rem] w-[9.375rem] border border-gray-600 bg-blue-secondary px-4 py-2 text-center align-middle text-blue-primary">
                      항목
                    </th>
                    <th className="h-[3.5rem] w-[15.625rem] border border-gray-600 px-4 py-2 text-center align-middle text-gray-500">
                      상세 내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="h-[3.5rem] w-[12.75rem] border border-gray-600 bg-blue-secondary px-4 py-2 text-center align-middle text-blue-primary">
                      품질
                    </td>
                    <td className="h-[3.5rem] w-[21.625rem] border border-gray-600 px-4 py-2 text-center align-middle text-gray-500">
                      고해상도 컬러 스캔
                    </td>
                  </tr>
                  <tr>
                    <td className="h-[3.5rem] w-[12.75rem] border border-gray-600 bg-blue-secondary px-4 py-2 text-center align-middle text-blue-primary">
                      DPI
                    </td>
                    <td className="h-[3.5rem] w-[21.625rem] border border-gray-600 px-4 py-2 text-center align-middle text-gray-500">
                      최대 600 DPI
                    </td>
                  </tr>
                  <tr>
                    <td className="h-[3.5rem] w-[12.75rem] border border-gray-600 bg-blue-secondary px-4 py-2 text-center align-middle text-blue-primary">
                      색감
                    </td>
                    <td className="h-[3.5rem] w-[21.625rem] border border-gray-600 px-4 py-2 text-center align-middle text-gray-500">
                      24비트 컬러
                    </td>
                  </tr>
                  <tr>
                    <td className="h-[3.5rem] w-[12.75rem] border border-gray-600 bg-blue-secondary px-4 py-2 text-center align-middle text-blue-primary">
                      선명도
                    </td>
                    <td className="h-[3.5rem] w-[21.625rem] border border-gray-600 px-4 py-2 text-center align-middle text-gray-500">
                      자동 이미지 보정 및 선명한 텍스트 출력 지원
                    </td>
                  </tr>
                  <tr>
                    <td className="h-[3.5rem] w-[12.75rem] border border-gray-600 bg-blue-secondary px-4 py-2 text-center align-middle text-blue-primary">
                      검수작업
                    </td>
                    <td className="h-[3.5rem] w-[21.625rem] border border-gray-600 px-4 py-2 text-center align-middle text-gray-500">
                      빈 페이지 제거 및 배경틈 보정 기능
                    </td>
                  </tr>
                  <tr>
                    <td className="h-[3.5rem] w-[12.75rem] border border-gray-600 bg-blue-secondary px-4 py-2 text-center align-middle text-blue-primary">
                      기울기보정
                    </td>
                    <td className="h-[3.5rem] w-[21.625rem] border border-gray-600 px-4 py-2 text-center align-middle text-gray-500">
                      자동 기울기 보정 및 잘못된 정렬 수정
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
       
        <div className=" w-[600px] overflow-hidden rounded-lg ">
  <table className="w-full border-collapse !border !border-gray-600 text-[18px]">
    <thead>
      <tr>
        <th className="bg-blue-secondary borderpx-4 py-2 text-center align-middle text-blue-primary w-[150px] h-[56px]">
          항목
        </th>
        <th className="!border !border-gray-500 text-gray-500  px-4 py-2 text-center align-middle w-[250px] h-[56px]">
          상세 내용
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="bg-blue-secondary border px-4 py-2 text-center align-middle text-blue-primary w-[204px] h-[56px]">
          품질
        </td>
        <td className="border  text-gray-500 px-4 py-2 text-center align-middle w-[346px] h-[56px]">
          고해상도 컬러 스캔
        </td>
      </tr>
      <tr>
        <td className="bg-blue-secondary border px-4 py-2 text-center align-middle text-blue-primary w-[204px] h-[56px]">
          DPI
        </td>
        <td className="border text-gray-500 px-4 py-2 text-center align-middle w-[346px] h-[56px]">
          최대 600 DPI
        </td>
      </tr>
      <tr>
        <td className="bg-blue-secondary border  px-4 py-2 text-center align-middle text-blue-primary w-[204px] h-[56px]">
          색감
        </td>
        <td className="border text-gray-500  px-4 py-2 text-center align-middle w-[346px] h-[56px]">
          24비트 컬러
        </td>
      </tr>
      <tr>
        <td className="bg-blue-secondary border px-4 py-2 text-center align-middle text-blue-primary w-[204px] h-[56px]">
          선명도
        </td>
        <td className="border text-gray-500 px-4 py-2 text-center align-middle w-[346px] h-[56px]">
          자동 이미지 보정 및 선명한 텍스트 출력 지원
        </td>
      </tr>
      <tr>
        <td className="bg-blue-secondary border  px-4 py-2 text-center align-middle text-blue-primary w-[204px] h-[56px]">
          검수작업
        </td>
        <td className="border text-gray-500 px-4 py-2 text-center align-middle w-[346px] h-[56px]">
          빈 페이지 제거 및 배경틈 보정 기능
        </td>
      </tr>
      <tr>
        <td className="bg-blue-secondary border px-4 py-2 text-center align-middle text-blue-primary w-[204px] h-[56px]">
          기울기보정
        </td>
        <td className="border text-gray-500 px-4 py-2 text-center align-middle w-[346px] h-[56px]">
          자동 기울기 보정 및 잘못된 정렬 수정
        </td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  
  )
}
export default Price;
