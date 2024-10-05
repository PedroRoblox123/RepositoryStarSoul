import React, { useEffect, useState } from 'react';
import GenericForm from '../GenericForm/index.jsx';

const adminFields = [
  { name: 'codAdmin', label: 'Código Admin', type: 'text', placeholder: 'Digite o código do admin'},
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite o nome do usuário' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite o email do usuário' },
  { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite a senha' },
  { name: 'codStatus', label: 'Status', type: 'select', options: ['Ativo', 'Inativo'] },
];

function AdminForm({ onAddAdmin, onUpdateAdmin, editingAdmin }) {
  // Usamos um estado apenas para controlar se estamos editando
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingAdmin) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [editingAdmin]);

  const handleSubmit = (data) => {
    if (isEditing) {
      onUpdateAdmin({ ...data, id: editingAdmin.id });
    } else {
      onAddAdmin(data);
    }
  };

  return (
    <GenericForm
      fields={adminFields}
      onSubmit={handleSubmit}
      editingData={editingAdmin}
      apiUrl={editingAdmin ? `http://localhost:8080/api/admins/${editingAdmin.id}` : 'http://localhost:8080/api/admins'}
      method={editingAdmin ? 'PUT' : 'POST'}
      // Removemos a função onChange, pois o GenericForm cuida disso
    />
  );
}

export default AdminForm;