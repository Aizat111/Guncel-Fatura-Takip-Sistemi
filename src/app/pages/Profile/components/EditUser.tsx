/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC,useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import {PasswordMeterComponent} from '../../../../_theme/assets/ts/components'
import { register } from '../../../modules/auth/redux/AuthCRUD'
import { UserModel } from '../../../modules/auth/models/UserModel'
import { RootState } from '../../../../setup'
import { Api } from '../../Services/api'
import { setRefresh } from '../../Users/reducers/UserSlice'
import clsx from 'clsx'

type Props = {
    handleClose: any
}




export const EditUser :FC<Props>= ({handleClose}) =>{
  const loginUser: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const initialValues = {
    firstname: loginUser.firstname,
    lastname: loginUser.lastname,
    email: loginUser.email,
    tc: loginUser.tc,
    address: loginUser.address,
    phone_number: loginUser.phone_number
  }
  const registrationSchema = Yup.object().shape({
    // firstname: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required('First name is required'),
    // email: Yup.string()
    //   .email('Wrong email format')
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required('Email is required'),
    // lastname: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required('Last name is required'),
    // tc: Yup.number()
    //   .min(10, '11 karakter olmalı')
    //   .max(11, '11 karakter olmalı')
    //   .required('Zorunlu alan'),
  })
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setSubmitting}) => {
        setSubmitting(true)
        const body = {
          firstname: values.firstname,
          lastname: values.lastname,
          tc: values.tc,
          email: values.email,
          phone_number: values.phone_number,
          address: values.address,

        }
        try {
       
         
              Api()
              .users.updateUser(loginUser.id,body)
              .then((res) => {
                Swal.fire({
                  title: 'Başarılı!',
                  text: 'Kullanıcı bilgileri başarı ile düzenlendi',
                  icon: 'success',
                  confirmButtonText: 'Tamam'
                })
                dispatch(setRefresh())
          })

            
            handleClose()
      }
        catch (ex) {
          console.error(ex)
        } finally {
          setSubmitting(false)
        }
      },
  })


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
          <label className='required form-label fw-bolder text-dark fs-6'>Ad</label>
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

          <label className='required form-label fw-bolder text-dark fs-6'>Soyad</label>
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
        <label className='required form-label fw-bolder text-dark fs-6'>E-Posta</label>
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
        <label className='required form-label fw-bolder text-dark fs-6'>Telefon No</label>
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
        <label className='required form-label fw-bolder text-dark fs-6'>TC Kimlik Numara</label>
        <input
          placeholder='TC Kimlik Numaranızı Giriniz '
          type='text'
          autoComplete='off'
          {...formik.getFieldProps('tc')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.tc && formik.errors.tc},
            {
              'is-valid': formik.touched.tc && !formik.errors.tc,
            }
          )}
        />
        {formik.touched.tc && formik.errors.tc && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.tc}</span>
            </div>
          </div>
        )}
      </div>
      {/* end :: Form Group*/}
      <div className='row mb-7 d-flex'>
              <div className='col-xs-12 col-md-12'>
                <label className='required fw-bold fs-6 mb-2'>Adres</label>
                <textarea
                  placeholder='Adres'
                  {...formik.getFieldProps('address')}
                  name='address'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.address && formik.errors.address},
                    {
                      'is-valid': formik.touched.address && !formik.errors.address,
                    }
                  )}
                  autoComplete='off'
                ></textarea>
                {formik.touched.address && formik.errors.address && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.address}</span>
                    </div>
                  </div>
                )}
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
   
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
            onClick={handleClose}
          >
            İptal
          </button>
  
      </div>
      {/* end::Form group */}
    </form>
  )
}
