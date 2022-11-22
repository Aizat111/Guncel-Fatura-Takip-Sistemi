import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {CreditCard, fetchCreditCardList} from '../CreditCard'
import CreditCardBox from '../components/Card'
import Row from 'react-bootstrap/Row'
import {Button, Col, Container, Modal} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {EditCard} from '../EditCard/EditCard'
import { AddCard } from '../EditCard/AddCard'

export default function Cards() {
  const navigate = useNavigate()
  const [cardsData, setCardsData] = useState<CreditCard[]>([])
  const [show, setShow] = useState(false)
  const [cardId, setCardId] = useState('')
  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => {
    setShow1(false)
  }
  const handleShow1 = () => {
    setShow1(true)
  }
  useEffect(() => {
    fetchData()
  }, [show,show1])

  async function fetchData() {
    const cards: CreditCard[] = await fetchCreditCardList()
    setCardsData(cards)
  }

  return (
    <>
      <h3 className='home-page-heading text-center pb-3'>Kayıtlı Kartlarınız</h3>

      <Row className='w-100'>
        {cardsData.length === 0 && (
          <>
            <Card style={{width: '100%', margin: '25px'}}>
              <Card.Body>
                <Card.Title>Kayıtlı kart bulunmamaktadır</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Yeni kart eklemek için kart ekle butonuna tıklayınız
                </Card.Subtitle>
                <Card.Text>Kart ekleyip, düzenleyip, silebilirsiniz..</Card.Text>
                <Card.Link onClick={handleShow1}>Kart Ekle</Card.Link>
              </Card.Body>
            </Card>
          </>
        )}
        {cardsData.map((card: CreditCard, id) => (
          <Col md={6} key={id} className='mb-3'>
            <Link
              key={id}
              to='#'
              onClick={() => {
                setCardId(card.id)
                handleShow()
              }}
              className='col-md-3 credit-card'
            >
              <CreditCardBox
                cardNumber={card.cardNumber}
                cardHolder={card.cardHolder}
                cardMonth={card.cardMonth}
                cardYear={card.cardYear}
                cardCvv={card.cardCvv}
                isCardFlipped={false}
              ></CreditCardBox>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className='justify-content-center'>
        <Col md={4} className='mt-3'>
          <Button
            className='add-new-card'
            variant='primary'
            size='lg'
            onClick={handleShow1}
          >
           Yeni Kart Ekle
          </Button>{' '}
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <EditCard parmId={cardId} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Body>
          <AddCard handleClose={handleClose1} />
        </Modal.Body>
      </Modal>
    </>
  )
}
