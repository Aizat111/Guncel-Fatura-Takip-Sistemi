import {FC} from 'react'

type Props={
  aboneText:string
  invoiceText:string
}
export const TableHeader: FC<Props> = ({aboneText, invoiceText}) => {
  return (
    <div id='kt_project_targets_card_pane'>
      <div className='card card-flush  border-0 '>
        <div className='card-body pt-3'>
          <table className='table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder'>
            <thead className='fs-7 text-gray-400 text-uppercase'>
              <tr>
                <th className=''>{aboneText}</th>
                <th className=''>{invoiceText}</th>
                <th className=''>Fatura Dönemi</th>
                <th className=''>Ödenen Tutar</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}
