import { FC } from "react"
import { TableHeader } from "./component/TableHeader"

export const OldGas: FC =()=>{
    return(
        <>
      <table className='table table-row-bordered  gy-4 align-middle fw-bolder'>
            <thead className='fs-7 text-dark text-uppercase'>
              <tr>
                <th className='min-w-100px'>Abone No</th>
                <th className='min-w-90px'>Muhatap No</th>
                <th className='min-w-150px'>Fatura Dönemi</th>
                <th className='min-w-150px'>Ödenen Tutar</th>
              </tr>
            </thead>

            <tbody className='fs-6 scroll-y'>
         <tr className="text-gray-600">
             <td>0300012205239</td>
             <td>101742994</td>
             <td>2022-09</td>
             <td>103 TL</td>
         </tr>
            </tbody>
          </table>
        </>
    )
}