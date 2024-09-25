import React, { useEffect, useState } from 'react';
import GenericForm from '../GenericForm/index.jsx';

const adminFields = [
  { name: 'codAdmin', label: 'Código Admin', type: 'text', placeholder: 'Digite o código do admin', disabled: false },
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite o nome do administrador' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite o email' },
  { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite a senha' },
  { name: 'codStatus', label: 'Status', type: 'select', options: ['True', 'False'] },
];

function AdminForm({ onAddAdmin, onUpdateAdmin, editingAdmin }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editingAdmin) {
      setFormData({
        codAdmin: editingAdmin.codAdmin,
        nome: editingAdmin.nome,
        email: editingAdmin.email,
        senha: editingAdmin.senha,
        codStatus: editingAdmin.codStatus ? 'True' : 'False',
      });
    } else {
      setFormData({
        codAdmin: '',
        nome: '',
        email: '',
        senha: '',
        codStatus: 'True', // Valor padrão ao cadastrar
      });
    }
  }, [editingAdmin]);

  const handleSubmit = (adminData) => {
    const formattedAdminData = {
      ...adminData,
      codStatus: adminData.codStatus === 'True', // Converte para booleano
    };

    if (editingAdmin) {
      onUpdateAdmin({ ...formattedAdminData, id: editingAdmin.id });
    } else {
      onAddAdmin(formattedAdminData);
    }
  };

  return (
    <GenericForm
      fields={adminFields}
      onSubmit={handleSubmit}
      editingData={formData}
      apiUrl={editingAdmin ? `http://localhost:8080/administrador/${editingAdmin.id}` : 'http://localhost:8080/administrador'}
      method={editingAdmin ? 'PUT' : 'POST'}
    />
  );
}

export default AdminForm;
