import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NtModal } from './components/NTModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />

      <NtModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
