import React, { useState, useEffect } from 'react';
import GenericForm from '../GenericForm/index.jsx';

const adminFields = [
  { name: 'codAdmin', label: 'Código Admin', type: 'text', placeholder: 'Digite o código do admin', disabled: false },
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite o nome do administrador' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite o email' },
  { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite a senha' },
  { name: 'status', label: 'Status', type: 'select', options: ['Ativo', 'Inativo'] },
];

function AdminForm({ onAddAdmin, onUpdateAdmin, editingAdmin }) {
  const handleSubmit = (adminData) => {
    if (editingAdmin) {
      onUpdateAdmin(adminData);
    } else {
      onAddAdmin(adminData);
    }
  };

  // Atualiza os campos para definir 'disabled' como verdadeiro para 'codAdmin' durante a edição
  const updatedFields = adminFields.map(field => {
    if (field.name === 'codAdmin' && editingAdmin) {
      return { ...field, disabled: true };
    }
    return field;
  });

  return (
    <GenericForm
      fields={updatedFields}
      onSubmit={handleSubmit}
      editingData={editingAdmin}
      apiUrl={editingAdmin ? `http://localhost:8080/administrador/${editingAdmin.id}` : 'http://localhost:8080/administrador'}
      method={editingAdmin ? 'PUT' : 'POST'}
    />
  );
}

export default AdminForm;
