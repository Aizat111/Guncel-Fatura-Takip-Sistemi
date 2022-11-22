import React, { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

import {
  CreditCard,
  fetchCreditCardList,
  updateLocalStorageCards,
} from '../CreditCard';

const initialState: CreditCard = {
  id: '',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};
type Props = {
    parmId: string
    handleClose:any
}

export const EditCard: FC<Props> = ({parmId,handleClose})=>  {

  const navigate = useNavigate();
  const [state, setState] = useState<CreditCard>(initialState);
  const [cardsData, setCardsData] = useState<CreditCard[]>([]);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  useEffect(() => {
    fetchData();
  }, [parmId]);

  async function fetchData() {
    const cards: CreditCard[] = await fetchCreditCardList();
    setCardsData(cards);
    if (cards && cards.length > 0) {
      const selectedCard = cards.find((card) => card.id === parmId);
      setState(selectedCard ?? initialState);
    }
  }

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || '',
      });
    },
    [state],
  );

  function handleSubmitAction() {
    try {
      const cards: CreditCard[] = cardsData;
      const selectedCard: CreditCard =
        cards.find((card) => card.id === parmId) ?? initialState;
      const selectedCardIndex = cards.indexOf(selectedCard);
      cards[selectedCardIndex] = state;
      updateLocalStorageCards(cards);
      handleClose()
    } catch (error: any) {
      alert(error);
      console.log(error);
    } finally {
      //release resources or stop loader
    }
  }

  function handleDeleteAction() {
    try {
      if (window.confirm('Kartınızı silmek istediğinizden emin misiniz?') === false) {
        return;
      }

      const cards: CreditCard[] = cardsData;
      const selectedCard: CreditCard =
        cards.find((card) => card.id === parmId) ?? initialState;
      const selectedCardIndex = cards.indexOf(selectedCard);
      cards.splice(selectedCardIndex, 1);
      updateLocalStorageCards(cards);
      handleClose()
    } catch (error: any) {
      alert(error);
      console.log(error);
    } finally {
      //release resources or stop loader
    }
  }

  return (
    <Fragment>
           <Container>

          <CardForm
            selectedCreditCard={state}
            onUpdateState={updateStateValues}
            setIsCardFlipped={setIsCardFlipped}
            handleSubmitAction={handleSubmitAction}
          >
            <Card
              cardNumber={state.cardNumber}
              cardHolder={state.cardHolder}
              cardMonth={state.cardMonth}
              cardYear={state.cardYear}
              cardCvv={state.cardCvv}
              isCardFlipped={isCardFlipped}
            ></Card>
          </CardForm>
     
   
        <Row className="justify-content-center">
          <Col md={12} className="">
            <div className="d-grid gap-1 delete-card">
              <Button variant="link" size="lg" onClick={handleDeleteAction}>
                Kartı Sil
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}