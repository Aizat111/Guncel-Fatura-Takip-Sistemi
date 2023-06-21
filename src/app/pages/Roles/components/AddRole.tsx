import React, {FC, useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import Swal from 'sweetalert2'
import {Api} from '../../Services/api'
import {useDispatch} from 'react-redux'
import {setRefresh} from '../reducers/RoleSlice'

type Props = {
  update: boolean
  handleClose: any
  role: any
}

const TypeSchema = Yup.object().shape({
  value: Yup.string().required('Zorunlu Alan'),
  description: Yup.string().required('Zorunlu Alan'),
})

const AddRole: FC<Props> = ({update, handleClose, role}) => {
  const dispatch = useDispatch()
  const [userForEdit] = useState<any>({
    value: role.value,
    title: role.title,
    description: role.description,
  })

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: TypeSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      const body = {
        value: values.value,
        title: values.value,
        description: values.description,
      }
      try {
        !update
          ? Api()
              .roles.addRole(body)
              .then((res) => {
                Swal.fire({
                  title: 'Başarılı!',
                  text: 'Rol başarı ile eklendi',
                  icon: 'success',
                  confirmButtonText: 'Tamam',
                })
                dispatch(setRefresh())
              })
          : Api()
              .roles.updateRole(role.id, body)
              .then((res) => {
                Swal.fire({
                  title: 'Başarılı!',
                  text: 'Rol Bilgisi başarı ile düzenlendi',
                  icon: 'success',
                  confirmButtonText: 'Tamam',
                })
                dispatch(setRefresh())
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
          <label className='required fw-bold fs-6 mb-2'>Rol</label>
          <input
            placeholder='Giriniz'
            {...formik.getFieldProps('value')}
            type='text'
            name='value'
            className={clsx(
              'form-control form-control-solid mb-3 mb-lg-0',
              {
                'is-invalid': formik.touched.value && formik.errors.value,
              },
              {
                'is-valid': formik.touched.value && !formik.errors.value,
              }
            )}
            autoComplete='off'
          />
          {formik.touched.value && formik.errors.value && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.value}</span>
              </div>
            </div>
          )}
        </div>
        <div className='fv-row mb-7'>
          <label className='required fw-bold fs-6 mb-2'>Rol Açıklaması</label>
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

export default AddRole
