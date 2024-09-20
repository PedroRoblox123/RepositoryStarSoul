import React from 'react';
import GenericForm from '../GenericForm/index.jsx';

const userFields = [
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite o nome do usuário' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite o email do usuário' },
  { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite a senha' },
  { name: 'codStatus', label: 'Status', type: 'select', options: ['Ativo', 'Inativo'] },
];

function UserForm({ onAddUser, onUpdateUser, editingUser }) {
  const handleSubmit = (userData) => {
    // Mapear as opções "Ativo" e "Inativo" para booleanos true/false
    const formattedUserData = {
      ...userData,
      codStatus: userData.codStatus === 'Ativo' ? true : false, // "Ativo" -> true, "Inativo" -> false
    };
  
    if (editingUser) {
      onUpdateUser(formattedUserData);
    } else {
      onAddUser(formattedUserData);
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
