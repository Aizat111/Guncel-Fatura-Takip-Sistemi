/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

const Dropdown4: FC = () => {
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3'
      data-kt-menu='true'
      data-popper-placement='bottom-end'
    >
      {/* begin::Heading */}
      <div className='menu-item px-3'>
        <div className='menu-content text-muted pb-2 px-3 fs-7 text-uppercase'>Contacts</div>
      </div>
      {/* end::Heading */}
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <a
          href='#'
          className='menu-link px-3'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_users_search'
        >
          Add Contact
        </a>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <a
          href='#'
          className='menu-link flex-stack px-3'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_invite_friends'
        >
          Invite Contacts
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title=''
            data-bs-original-title='Specify a contact email to send an invitation'
            aria-label='Specify a contact email to send an invitation'
          ></i>
        </a>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div
        className='menu-item px-3'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='right-start'
      >
        <a href='#' className='menu-link px-3'>
          <span className='menu-title'>Groups</span>
          <span className='menu-arrow'></span>
        </a>
        {/* begin::Menu sub */}
        <div className='menu-sub menu-sub-dropdown w-175px py-4'>
          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a
              href='#'
              className='menu-link px-3'
              data-bs-toggle='tooltip'
              title=''
              data-bs-original-title='Coming soon'
            >
              Create Group
            </a>
          </div>
          {/* end::Menu item */}
          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a
              href='#'
              className='menu-link px-3'
              data-bs-toggle='tooltip'
              title=''
              data-bs-original-title='Coming soon'
            >
              Invite Members
            </a>
          </div>
          {/* end::Menu item */}
          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a
              href='#'
              className='menu-link px-3'
              data-bs-toggle='tooltip'
              title=''
              data-bs-original-title='Coming soon'
            >
              Settings
            </a>
          </div>
          {/* end::Menu item */}
        </div>
        {/* end::Menu sub */}
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div className='menu-item px-3 my-1'>
        <a
          href='#'
          className='menu-link px-3'
          data-bs-toggle='tooltip'
          title=''
          data-bs-original-title='Coming soon'
        >
          Settings
        </a>
      </div>
      {/* end::Menu item */}
    </div>
  )
}

export {Dropdown4}
