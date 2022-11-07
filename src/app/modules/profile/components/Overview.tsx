import React from 'react'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
} from '../../../../_theme/partials/widgets'
import {ChartsWidget1} from '../../../../_theme/partials/profile-widgets/ChartsWidget1'
import {ListsWidget5} from '../../../../_theme/partials/profile-widgets/ListsWidget5'
import {ListsWidget2} from '../../../../_theme/partials/profile-widgets/ListsWidget2'

export function Overview() {
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>
        <FeedsWidget2 className='mb-5 mb-xxl-8' />

        <FeedsWidget3 className='mb-5 mb-xxl-8' />

        <FeedsWidget4 className='mb-5 mb-xxl-8' />

        <FeedsWidget5 className='mb-5 mb-xxl-8' />

        <FeedsWidget6 className='mb-5 mb-xxl-8' />
      </div>

      <div className='col-xl-6'>
        <ChartsWidget1 className='mb-5 mb-xxl-8' />

        <ListsWidget5 className='mb-5 mb-xxl-8' />

        <ListsWidget2 className='mb-5 mb-xxl-8' />
      </div>
    </div>
  )
}
