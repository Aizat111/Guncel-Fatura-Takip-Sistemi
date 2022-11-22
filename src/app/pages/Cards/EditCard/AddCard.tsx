import React, { FC, Fragment, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

import { CreditCard, updateLocalStorageCards } from '../CreditCard';

const initialState: CreditCard = {
  id: '',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};
type Props = {
    handleClose:any
}
export const AddCard: FC<Props> = ({handleClose})=>  {

  const [state, setState] = useState<CreditCard>(initialState);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

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
      let newCardsList: CreditCard[] = [];
      if (localStorage.getItem('cards')) {
        const storageCards = JSON.parse(localStorage.getItem('cards') ?? '');
        newCardsList = storageCards ? [...storageCards] : [];
      }

      newCardsList.push({
        ...state,
        id: uuid(),
      });
      updateLocalStorageCards(newCardsList);
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
 
    </Fragment>
  );
}