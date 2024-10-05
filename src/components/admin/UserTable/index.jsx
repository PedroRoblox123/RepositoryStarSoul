import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from '../GenericTable/index.jsx';
import UserForm from '../UserForm/index.jsx';

const userColumns = [
  { label: 'ID', accessor: 'id' },
  { label: 'Nome', accessor: 'nome' },
  { label: 'Email', accessor: 'email' },
  { label: 'Senha', accessor: 'senha' },
  { 
    label: 'Status', 
    accessor: 'codStatus', 
    render: user => user.codStatus === 'Ativo' ? 'Ativo' : 'Inativo' 
  },
];

function UserTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const fetchUsers = () => {
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Erro ao buscar usuários:', error));
  };

  useEffect(() => {
    fetchUsers();
    const intervalId = setInterval(() => {
      fetchUsers();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:8080/api/users/${userId}`)
      .then(() => {
        fetchUsers();
        setConfirmDeleteVisible(false); // Fecha o popup de confirmação
      })
      .catch(error => console.error('Erro ao excluir usuário:', error));
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setPopupVisible(true);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? { ...user, ...updatedUser } : user)));
    setEditingUser(null);
    setPopupVisible(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setEditingUser(null); // Limpa o usuário em edição
  };

  const handleOpenConfirmDelete = (userId) => {
    setUserToDelete(userId);
    setConfirmDeleteVisible(true);
  };

  const handleCloseConfirmDelete = () => {
    setConfirmDeleteVisible(false);
    setUserToDelete(null);
  };

  return (
    <>
      <GenericTable
        data={users}
        columns={userColumns}
        onDelete={handleOpenConfirmDelete}
        onEditClick={handleEditClick}
      />

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="popup-close-button" onClick={handleClosePopup}>X</button>
            <UserForm
              onAddUser={fetchUsers}
              onUpdateUser={handleUpdateUser}
              editingUser={editingUser}
            />
          </div>
          <div className="popup-overlay" onClick={handleClosePopup}></div>
        </div>
      )}

      {confirmDeleteVisible && (
        <div className="popup">
          <div className="popup-confirm-content">
            <p>Tem certeza que deseja excluir este usuário?</p>
            <button className='buttons-confirm' onClick={() => handleDeleteUser(userToDelete)}>Confirmar</button>
            <button className='buttons-cancel' onClick={handleCloseConfirmDelete}>Cancelar</button>
          </div>
          <div className="popup-overlay" onClick={handleCloseConfirmDelete}></div>
        </div>
      )}
    </>
  );
}

export default UserTable;