import React from 'react';
import GenericForm from '../GenericForm/index.jsx';

const userFields = [
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite o nome do usuário' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite o email do usuário' },
  { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite a senha' }
];

function UserForm({ onAddUser, onUpdateUser, editingUser }) {
  const handleSubmit = (userData) => {
    if (editingUser) {
      onUpdateUser(userData);
    } else {
      onAddUser(userData);
    }
  };

  return (
    <GenericForm
      fields={userFields}
      onSubmit={handleSubmit}
      editingData={editingUser}
      apiUrl={editingUser ? `http://localhost:8080/usuario/${editingUser.id}` : 'http://localhost:8080/usuario'}
      method={editingUser ? 'PUT' : 'POST'}
    />
  );
}

export default UserForm;
