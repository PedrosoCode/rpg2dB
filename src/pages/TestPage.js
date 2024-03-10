import React, { useState } from 'react';
import axios from 'axios';

function TestPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/items', { name, description });
      console.log('Item criado:', response.data);
      // Limpar o formulário após o sucesso
      setName('');
      setDescription('');
      setErrorMessage('');
    } catch (error) {
      console.error('Erro ao criar item:', error.response.data.error);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Criar Novo Item</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default TestPage;
