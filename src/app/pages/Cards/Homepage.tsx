import {FC, useState} from 'react'
import {Button, Modal, ModalHeader} from 'react-bootstrap'
import Cards from './Cards/Cards'
import EditCard from './Cards/Cards'
import Card from './components/Card'
import {AddCard} from './EditCard/AddCard'

export const Homepage: FC = () => {

  return (
    <>
      <Cards />
  
    </>
  )
}
