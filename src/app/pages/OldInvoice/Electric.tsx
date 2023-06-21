import { FC } from "react"
import {TableHeader} from './component/TableHeader'

export const OldElectric : FC = ()=>{
    return(
        <>
           <table className='table table-row-bordered  gy-4 align-middle fw-bolder'>
        <thead className='fs-7 text-dark text-uppercase'>
          <tr>
            <th className='min-w-100px'>Tesisat Kod</th>
            <th className='min-w-90px'>Fatura  Seri No</th>
            <th className='min-w-150px'>Fatura Dönemi</th>
            <th className='min-w-150px'>Ödenen Tutar</th>
          </tr>
        </thead>

        <tbody className='fs-6 scroll-y'>
          <tr className='text-gray-600' >
         
            <td className = 'text-center' colSpan={4}>Kayıt bulunamadı</td>
          
          </tr>
        
        </tbody>
      </table>
        </>
    )
}