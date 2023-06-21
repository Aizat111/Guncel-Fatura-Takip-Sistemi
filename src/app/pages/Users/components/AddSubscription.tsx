import React, {FC, useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import Swal from 'sweetalert2'
import {Api} from '../../Services/api'
import {useDispatch} from 'react-redux'

type Props = {
  update?: boolean
  handleClose: any
  user_id: any
}

const TypeSchema = Yup.object().shape({
  subscription_no: Yup.string().required('Zorunlu Alan'),
  description: Yup.string().required('Zorunlu Alan'),
  value:  Yup.string().required('Zorunlu Alan'),
})

const AddSubscription: FC<Props> = ({update, handleClose, user_id}) => {
  const dispatch = useDispatch()
  const [userForEdit] = useState<any>({
    subscription_no: '',
    title: '',
    description: '',
    value: ''
  })

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: TypeSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      const body = {
        subscription_no: values.subscription_no,
        value: values.value,
        description: values.description,
        userId: user_id
      }
      try {
      Api()
              .subscriptions.addSubscription(body)
              .then((res) => {
                Swal.fire({
                  title: 'Başarılı!',
                  text: 'Üyelik başarı ile eklendi',
                  icon: 'success',
                  confirmButtonText: 'Tamam',
                })

              })
        handleClose()
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(false)
      }
    },
  })
  return (
    <form id='kt_modal_add_user_form' onSubmit={formik.handleSubmit} className='form' noValidate>
      {/* begin::Scroll */}
      <div
        className='d-flex flex-column scroll-y me-n7 pe-7 '
        id='kt_modal_add_user_scroll'
        data-kt-scroll='true'
        data-kt-scroll-activate='{default: false, lg: true}'
        data-kt-scroll-max-height='auto'
        data-kt-scroll-dependencies='#kt_modal_add_user_header'
        data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
        data-kt-scroll-offset='300px'
      >
        <div className='fv-row mb-7'>
          <label className='required fw-bold fs-6 mb-2'>Üyelik Numarası</label>
          <input
            placeholder='Giriniz'
            {...formik.getFieldProps('subscription_no')}
            type='text'
            name='subscription_no'
            className={clsx(
              'form-control form-control-solid mb-3 mb-lg-0',
              {
                'is-invalid': formik.touched.subscription_no && formik.errors.subscription_no,
              },
              {
                'is-valid': formik.touched.subscription_no && !formik.errors.subscription_no,
              }
            )}
            autoComplete='off'
          />
          {formik.touched.subscription_no && formik.errors.subscription_no && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.subscription_no}</span>
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-7'>
          <label className='required fw-bold fs-6 mb-2'>Açıklaması</label>
          <input
            placeholder='Giriniz'
            {...formik.getFieldProps('description')}
            type='text'
            name='description'
            className={clsx(
              'form-control form-control-solid mb-3 mb-lg-0',
              {
                'is-invalid': formik.touched.description && formik.errors.description,
              },
              {
                'is-valid': formik.touched.description && !formik.errors.description,
              }
            )}
            autoComplete='off'
          />
          {formik.touched.description && formik.errors.description && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.description}</span>
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-7'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Üyelik Türü</label>
                {/* end::Label */}
                {/* begin::Input */}
                <select
                  className='form-select form-select-solid'
                  data-control='select2'
                  data-hide-search='true'
                  data-placeholder='Seç'
                  {...formik.getFieldProps('value')}
                  name='value'
                  //defaultValue={activity.assigned_by}
                >
                  {/* {activity.assigned_by!==''} */}
                  <option hidden>Seçiniz</option>
                  <option value={'GAZ'}>Gaz</option>
                  <option value={'SU'}>Su</option>
                  <option value={'ELEKTRİK'}>Elektrik</option>
                </select>
                {formik.touched.value && formik.errors.value && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.value}</span>
                    </div>
                  </div>
                )}
              </div>
        <div className='text-center pt-15'>
          <button
            onClick={handleClose}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
          >
            İptal
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Gönder</span>
            {formik.isSubmitting && (
              <span className='indicator-progress'>
                Lütfen Bekleyin...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddSubscription
