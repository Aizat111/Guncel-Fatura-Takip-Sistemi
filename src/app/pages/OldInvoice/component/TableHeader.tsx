import {FC} from 'react'

export const TableHeader: FC = () => {
  return (
    <div id='kt_project_targets_card_pane'>
      <div className='card card-flush  border-0 '>
        <div className='card-body pt-3'>
          <table className='table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder'>
            <thead className='fs-7 text-gray-400 text-uppercase'>
              <tr>
                <th className=''>Abone No</th>
                <th className=''>Fatura No</th>
                <th className=''>Tarih</th>
                <th className=''>Ödenen Tutar</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}
