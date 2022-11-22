import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {CreditCard} from '../../CreditCard'

const currentYear = new Date().getFullYear()
const monthsArr = Array.from({length: 12}, (x, i) => {
  const month = i + 1
  return month <= 9 ? '0' + month : month
})
const yearsArr = Array.from({length: 9}, (_x, i) => currentYear + i)
interface CardFormProps {
  selectedCreditCard: CreditCard
  onUpdateState: any
  setIsCardFlipped: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmitAction: () => void
  children: any
}
export default function CardForm(props: CardFormProps) {
  const {selectedCreditCard, onUpdateState, setIsCardFlipped, handleSubmitAction, children} = props
  const [errors, setErrors] = useState<CreditCard>({
    id: '',
    cardNumber: '',
    cardHolder: '',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
  })

  const handleFormChange = (event: {target: {name: string; value: string}}) => {
    const {name, value} = event.target

    onUpdateState(name, value)
  }

  const handleFormChangeNumbers = (event: {target: {value: string; name: string}}) => {
    const {name, value} = event.target
    if (isNaN(Number(value))) return //only accept numbers
    onUpdateState(name, value)
  }

  const onCvvFocus = () => {
    setIsCardFlipped(true)
  }

  const onCvvBlur = () => {
    setIsCardFlipped(false)
  }

  const handleConfirmAction = (e: any) => {
    // validate errors
    if (!isFormHasErrors()) {
      handleSubmitAction()
    }
  }
  const isFormHasErrors = () => {
    const newErrors: CreditCard = {
      id: '',
      cardNumber: '',
      cardHolder: '',
      cardMonth: '',
      cardYear: '',
      cardCvv: '',
    }
    //first validate blank fields
    let isErrorFlag = false
    Object.keys(newErrors).forEach(function (key: any) {
      const keyPair = key as keyof CreditCard
      const displayableKeyName = key.toLowerCase().replace('card', 'Card ')
      if (!selectedCreditCard[keyPair]) {
        newErrors[keyPair] = `${displayableKeyName} value required.`
        isErrorFlag = true
      } else {
        newErrors[keyPair] = ''
        isErrorFlag = false
      }
    })
    if (isErrorFlag) {
      setErrors(newErrors)
      return isErrorFlag
    }
    //if no blank field then check other validation
    if (selectedCreditCard['cardNumber'].length !== 16) {
      newErrors.cardNumber = 'Kart Numarası 16 haneden oluşmalıdır'
      isErrorFlag = true
    }
    if (selectedCreditCard['cardCvv'].length !== 3) {
      newErrors.cardCvv = 'Kart Numarası 3 haneden oluşmalıdır'
      isErrorFlag = true
    }
    setErrors(newErrors)
    return isErrorFlag
  }

  return (
    <div className='card-form'>
      <div className='card-list'>{children}</div>
      <div className='card-form__inner'>
        <div className='card-input'>
          <label htmlFor='cardNumber' className='card-input__label'>
           Kart Numarası
          </label>
          <Form.Control
            type='text'
            name='cardNumber'
            className='card-input__input'
            autoComplete='off'
            onChange={handleFormChangeNumbers}
            maxLength={16}
            value={selectedCreditCard.cardNumber}
            isInvalid={!!errors.cardNumber}
          />
          <Form.Control.Feedback type='invalid'>{errors.cardNumber}</Form.Control.Feedback>
        </div>

        <div className="card-input">
          <label htmlFor="cardName" className="card-input__label">
            Kart Sahibi
          </label>
          <Form.Control
            type="text"
            className="card-input__input"
            autoComplete="off"
            name="cardHolder"
            onChange={handleFormChange}
            value={selectedCreditCard.cardHolder}
            isInvalid={!!errors.cardHolder}
          />
          <Form.Control.Feedback type="invalid">
            {errors.cardHolder}
          </Form.Control.Feedback>
        </div>

        <div className='card-form__row'>
          <div className='card-form__col'>
            <div className='card-form__group'>
              <label htmlFor='cardMonth' className='card-input__label'>
                Son Kullanım Tarihi
              </label>
              <div className='d-flex justify-content-between'>
                <div>
                  <Form.Control
                    as='select'
                    className='card-input__input -select '
                    style={{width: '200px'}}
                    value={selectedCreditCard.cardMonth}
                    name='cardMonth'
                    onChange={handleFormChange}
                    isInvalid={!!errors.cardMonth}
                  >
                    <option value='' disabled>
                     Ay
                    </option>

                    {monthsArr.map((val, index) => (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'>{errors.cardMonth}</Form.Control.Feedback>
                </div>
                <div>
                  <Form.Control
                    as='select'
                    name='cardYear'
                    className='card-input__input -select'
                    style={{width: '200px'}}
                    value={selectedCreditCard.cardYear}
                    onChange={handleFormChange}
                    isInvalid={!!errors.cardYear}
                  >
                    <option value='' disabled>
                      Yıl
                    </option>

                    {yearsArr.map((val, index) => (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'>{errors.cardYear}</Form.Control.Feedback>
                </div>
              </div>
            </div>
          </div>
          <div className='card-form__col -cvv mb-3'>
            <div className='card-input'>
              <label htmlFor='cardCvv' className='card-input__label'>
                CVV (Güvenlik Kodu)
              </label>
              <Form.Control
                type='text'
                className='card-input__input'
                maxLength={3}
                autoComplete='off'
                name='cardCvv'
                value={selectedCreditCard.cardCvv}
                onChange={handleFormChangeNumbers}
                onFocus={onCvvFocus}
                onBlur={onCvvBlur}
                isInvalid={!!errors.cardCvv}
              />
              <Form.Control.Feedback type='invalid'>{errors.cardCvv}</Form.Control.Feedback>
            </div>
          </div>
        </div>
        <div className='card-form__row'>
          <div className='card-form__col'>
            <div className='d-grid gap-2'>
              <Button variant='primary' size='lg' onClick={handleConfirmAction}>
                Onayla
              </Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
