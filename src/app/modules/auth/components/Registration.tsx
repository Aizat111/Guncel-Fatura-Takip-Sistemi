/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import * as auth from '../redux/AuthRedux'
import {register} from '../redux/AuthCRUD'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_theme/helpers'
import {PasswordMeterComponent} from '../../../../_theme/assets/ts/components'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  tc_no: '',
  phone_number: ''
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Zorunlu alan'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Zorunlu alan'),
    phone_number: Yup.string()
    .required('Zorunlu alan'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Zorunlu alan'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Zorunlu alan'),
  tc_no: Yup.string()
    .min(11, '11 karakter olmalı')
    .max(11, '11 karakter olmalı')
    .required('Zorunlu alan'),
})
type Props = {
  handleClose ?: any
}
export const Registration :FC<Props>= ({handleClose}) =>{
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.phone_number,
          values.tc_no,
          ''
        )
          .then(({data: {api_token}}) => {
            setLoading(false)
            dispatch(auth.actions.register(api_token))
            handleClose();
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('Registration process has broken')
          })
      }, 1000)
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
  
      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      {/* begin::Form group Firstname */}
      <div className='row fv-row  mb-7'>
        <div className='col-xl-6'>
          <label className='form-label fw-bolder text-dark fs-6'>Ad</label>
          <input
            placeholder='Adınız'
            type='text'
            autoComplete='off'
            {...formik.getFieldProps('firstname')}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {
                'is-invalid': formik.touched.firstname && formik.errors.firstname,
              },
              {
                'is-valid': formik.touched.firstname && !formik.errors.firstname,
              }
            )}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.firstname}</span>
              </div>
            </div>
          )}
        </div>
        <div className='col-xl-6'>
          {/* begin::Form group Lastname */}

          <label className='form-label fw-bolder text-dark fs-6'>Soyad</label>
          <input
            placeholder='Soyadınız'
            type='text'
            autoComplete='off'
            {...formik.getFieldProps('lastname')}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {
                'is-invalid': formik.touched.lastname && formik.errors.lastname,
              },
              {
                'is-valid': formik.touched.lastname && !formik.errors.lastname,
              }
            )}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.lastname}</span>
              </div>
            </div>
          )}

          {/* end::Form group */}
        </div>
      </div>
      {/* end::Form group */}
            {/* begin::Form group Email */}
          <div className='fv-row mb-7'>
        <label className='form-label fw-bolder text-dark fs-6'>E-Posta</label>
        <input
          placeholder='E-Posta'
          type='email'
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>

      <div className='fv-row mb-7'>
        <label className='form-label fw-bolder text-dark fs-6'>Telefon No</label>
        <input
          placeholder='Telefon Numara'
          type='phone_number'
          autoComplete='off'
          {...formik.getFieldProps('phone_number')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.phone_number && formik.errors.phone_number},
            {
              'is-valid': formik.touched.phone_number && !formik.errors.phone_number,
            }
          )}
        />
        {formik.touched.phone_number && formik.errors.phone_number && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.phone_number}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}
      {/* begin:: Form group TCNO */}
      <div className='fv-row mb-7'>
        <label className='form-label fw-bolder text-dark fs-6'>TC Kimlik Numara</label>
        <input
          placeholder='TC Kimlik Numaranızı Giriniz '
          type='text'
          autoComplete='off'
          {...formik.getFieldProps('tc_no')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.tc_no && formik.errors.tc_no},
            {
              'is-valid': formik.touched.tc_no && !formik.errors.tc_no,
            }
          )}
        />
        {formik.touched.tc_no && formik.errors.tc_no && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.tc_no}</span>
            </div>
          </div>
        )}
      </div>
      {/* end :: Form Group*/}


      {/* begin::Form group Password */}
      <div className='mb-10 fv-row' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Şifre</label>
          <div className='position-relative mb-3'>
            <input
              type='password'
              placeholder='Şifre'
              autoComplete='off'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          {/* begin::Meter */}
          <div
            className='d-flex align-items-center mb-3'
            data-kt-password-meter-control='highlight'
          >
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
          </div>
          {/* end::Meter */}
        </div>
        <div className='text-muted'>
        Harf, sayı ve simge karışımıyla 8 veya daha fazla karakter kullanın.
        </div>
      </div>
   
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid  }
        >
          {!loading && <span className='indicator-label'>Kaydet</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Lütfen Bekleyin...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
          >
            İptal
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
