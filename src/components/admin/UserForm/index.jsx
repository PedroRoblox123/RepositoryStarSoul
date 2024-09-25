import React, { useEffect, useState } from 'react';
import GenericForm from '../GenericForm/index.jsx';

const userFields = [
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite o nome do usuário' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite o email do usuário' },
  { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite a senha' },
  { name: 'codStatus', label: 'Status', type: 'select', options: ['True', 'False'] },
];

function UserForm({ onAddUser, onUpdateUser, editingUser }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editingUser) {
      setFormData({
        nome: editingUser.nome,
        email: editingUser.email,
        senha: editingUser.senha,
        codStatus: editingUser.codStatus ? 'True' : 'False',
      });
    } else {
      setFormData({
        nome: '',
        email: '',
        senha: '',
        codStatus: 'True', // Valor padrão
      });
    }
  }, [editingUser]);

  const handleSubmit = () => {
    const formattedUserData = {
      ...formData,
      codStatus: formData.codStatus === 'True', // Converte para booleano
    };

    if (editingUser) {
      onUpdateUser({ ...formattedUserData, id: editingUser.id });
    } else {
      onAddUser(formattedUserData);
    }
  };

  return (
    <GenericForm
      fields={userFields}
      onSubmit={handleSubmit}
      editingData={formData}
      apiUrl={editingUser ? `http://localhost:8080/usuario/${editingUser.id}` : 'http://localhost:8080/usuario'}
      method={editingUser ? 'PUT' : 'POST'}
    />
  );
}

export default UserForm;