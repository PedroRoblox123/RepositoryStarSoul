import React, { useEffect, useState } from 'react';
import GenericForm from '../GenericForm/index.jsx';

const userFields = [
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite o nome do usuário' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite o email do usuário' },
  { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite a senha' },
  { name: 'codStatus', label: 'Status', type: 'select', options: ['Ativo', 'Inativo'] },
];

function UserForm({ onAddUser, onUpdateUser, editingUser }) {
  // Usamos um estado apenas para controlar se estamos editando
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingUser) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [editingUser]);

  const handleSubmit = (data) => {
    if (isEditing) {
      onUpdateUser({ ...data, id: editingUser.id });
    } else {
      onAddUser(data);
    }
  };

  return (
    <GenericForm
      fields={userFields}
      onSubmit={handleSubmit}
      editingData={editingUser}
      apiUrl={editingUser ? `http://localhost:8080/api/users/${editingUser.id}` : 'http://localhost:8080/api/users'}
      method={editingUser ? 'PUT' : 'POST'}
      // Removemos a função onChange, pois o GenericForm cuida disso
    />
  );
}

export default UserForm;
