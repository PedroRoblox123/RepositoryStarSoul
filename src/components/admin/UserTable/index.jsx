import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from '../GenericTable/index.jsx';

const userColumns = [
  { label: 'ID', accessor: 'id' },
  { label: 'Nome', accessor: 'nome' },
  { label: 'Email', accessor: 'email' },
  { label: 'Senha', accessor: 'senha' },
  { label: 'Status', accessor: 'status' },
];

function UserTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Função para buscar usuários
  const fetchUsers = () => {
    axios.get('http://localhost:8080/usuario')
      .then(response => {
        // Mapeia os dados para incluir um status padrão
        const usersWithStatus = response.data.map(user => ({
          ...user,
          status: user.codStatus ? 'Ativo' : 'Inativo', // Definindo status
        }));
        setUsers(usersWithStatus);
      })
      .catch(error => console.error('Erro ao buscar usuários:', error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Função para deletar um usuário
  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:8080/usuario/${userId}`)
      .then(() => fetchUsers()) // Recarrega os dados após exclusão
      .catch(error => console.error('Erro ao excluir usuário:', error));
  };

  // Função para editar um usuário
  const handleEditClick = (user) => {
    setEditingUser(user); // Aqui você pode abrir um modal ou formulário para editar
  };

  return (
    <GenericTable
      data={users}
      columns={userColumns}
      onDelete={handleDeleteUser}
      onEditClick={handleEditClick}
    />
  );
}

export default UserTable;
