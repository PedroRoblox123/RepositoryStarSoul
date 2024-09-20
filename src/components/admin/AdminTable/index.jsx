import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from '../GenericTable/index.jsx';
 
const adminColumns = [
  { label: 'ID', accessor: 'id' },
  { label: 'Cod Admin', accessor: 'codAdmin' },
  { label: 'Nome', accessor: 'nome' },
  { label: 'Email', accessor: 'email' },
  { label: 'Senha', accessor: 'senha' },
  { label: 'Status', accessor: 'status' },
];
 
function AdminTable() {
  const [admins, setAdmins] = useState([]);
  const [editingAdmin, setEditingAdmin] = useState(null);

  // Função para buscar administradores
  const fetchAdmins = () => {
    axios.get('http://localhost:8080/administrador')
      .then(response => setAdmins(response.data))
      .catch(error => console.error('Erro ao buscar administradores:', error));
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // Função para deletar um administrador
  const handleDeleteAdmin = (adminId) => {
    axios.delete(`http://localhost:8080/administrador/${adminId}`)
      .then(() => fetchAdmins()) // Recarrega os dados após exclusão
      .catch(error => console.error('Erro ao excluir administrador:', error));
  };

  // Função para editar um administrador
  const handleEditClick = (admin) => {
    setEditingAdmin(admin); // Aqui você pode abrir um modal ou formulário para editar
  };

  return (
    <GenericTable
      data={admins}
      columns={adminColumns}
      onDelete={handleDeleteAdmin}
      onEditClick={handleEditClick}
    />
  );
}
 
export default AdminTable;