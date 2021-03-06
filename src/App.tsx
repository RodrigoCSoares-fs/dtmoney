
import { Dashboard } from './components/dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import {TransactionsProvider } from './TransactionsContext';

import { NewTransactionModal } from './components/NewTransactionModal';

import { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');


export function App() {

      const [IsNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

      function handleOpenNewTransactionModal (){
        SetIsNewTransactionModalOpen(true);
      }

      function handleCloseCNewTransactionModal (){
        SetIsNewTransactionModalOpen(false);
      }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard/>
        
      <NewTransactionModal
        isOpen = {IsNewTransactionModalOpen}
        OnRequestClose = {handleCloseCNewTransactionModal}
      />

      <GlobalStyle></GlobalStyle>
    </TransactionsProvider>
  );
}
