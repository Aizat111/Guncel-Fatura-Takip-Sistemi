import {FC, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import {Modal} from 'react-bootstrap'
import {StepperComponent} from '../../../assets/ts/components'

type Props = {
  show: boolean
  handleClose: () => void
}

// interface ICreateAccount {
//   projectType: string
//   customer: string
//   projectName: string
//   projectDescription: string
//   releaseDate: string
//   notifications: string
// }

// const inits: ICreateAccount = {
//   projectType: '',
//   customer: '',
//   projectName: '',
//   projectDescription: '',
//   releaseDate: '',
//   notifications: '',
// }

const CreateProject: FC<Props> = ({show, handleClose}) => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  return (
    <Modal
      show={show}
      className='modal fade'
      dialogClassName='modal-fullscreen p-9'
      onEntered={loadStepper}
      onHide={handleClose}
    >
      {/* begin::Modal content */}
      <div className='modal-content'>
        {/* begin::Modal header */}
        <Modal.Header className='modal-header'>
          {/* begin::Modal title */}
          <h2>Create Project</h2>
          {/* end::Modal title */}

          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </Modal.Header>
        {/* end::Modal header */}

        {/* begin::Modal body */}
        <Modal.Body className='modal-body scroll-y m-5'>
          {/* begin::Stepper */}
          <div ref={stepperRef} className='stepper stepper-links d-flex flex-column'>
            {/* begin::Container */}
            <div className='container'>
              {/* begin::Nav */}
              <div className='stepper-nav justify-content-center py-2'>
                {/* begin::Step 1 */}
                <div className='stepper-item me-5 me-md-15 current' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Project Type</h3>
                </div>
                {/* end::Step 1 */}

                {/* begin::Step 2 */}
                <div className='stepper-item me-5 me-md-15' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Project Settings</h3>
                </div>
                {/* end::Step 2 */}

                {/* begin::Step 3 */}
                <div className='stepper-item me-5 me-md-15' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Budget</h3>
                </div>
                {/* end::Step 3 */}

                {/* begin::Step 4 */}
                <div className='stepper-item me-5 me-md-15' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Build A Team</h3>
                </div>
                {/* end::Step 4 */}

                {/* begin::Step 5 */}
                <div className='stepper-item me-5 me-md-15' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Set First Target</h3>
                </div>
                {/* end::Step 5 */}

                {/* begin::Step 6 */}
                <div className='stepper-item me-5 me-md-15' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Upload Files</h3>
                </div>
                {/* end::Step 6 */}

                {/* begin::Step 7 */}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Completed</h3>
                </div>
                {/* end::Step 7 */}
              </div>
              {/* end::Nav */}

              {/* begin::Form */}
              {/* begin::Form */}
              {/* <Formik
                validationSchema={currentSchema}
                initialValues={initValues}
                onSubmit={submitStep}
              >
                {() => (
                  <Form className='mx-auto w-100 mw-600px pt-15 pb-10' noValidate id='kt_modal_create_project_form'>
                    <Step1 />

                    <Step2 />

                    <Step3 />

                    <Step4 />

                    <Step5 />

                    <Step6 />

                    <Step7 />

                    <div className='d-flex flex-stack pt-10'>
                      <div className='me-2'>
                        <button
                          onClick={prevStep}
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr063.svg'
                            className='svg-icon-4 me-1'
                          />
                          Back
                        </button>
                      </div>

                      <div>
                        <button type='submit' className='btn btn-lg btn-primary me-3'>
                          <span className='indicator-label'>
                            {stepper.current?.currentStepIndex !==
                              stepper.current?.totatStepsNumber! - 1 && 'Continue'}
                            {stepper.current?.currentStepIndex ===
                              stepper.current?.totatStepsNumber! - 1 && 'Submit'}
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr064.svg'
                              className='svg-icon-3 ms-2 me-0'
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik> */}
            </div>
            {/* begin::Container */}
          </div>
          {/* end::Stepper */}
        </Modal.Body>
        {/* end::Modal body */}
      </div>
      {/* end::Modal content */}
    </Modal>
  )
}

export {CreateProject}
