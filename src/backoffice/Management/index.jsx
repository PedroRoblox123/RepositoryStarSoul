import './styles.css';
import React, { useState } from 'react';
import AdminTable from '../../components/admin/AdminTable/index.jsx';
import AdminForm from '../../components/admin/AdminForm/index.jsx';
import UserTable from '../../components/admin/UserTable/index.jsx';
import UserForm from '../../components/admin/UserForm/index.jsx';

function Management() {
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [view, setView] = useState('admin');
  const [popupVisible, setPopupVisible] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleAddAdmin = (newAdmin) => {
    setAdmins([...admins, newAdmin]);
  };

  const handleUpdateAdmin = (updatedAdmin) => {
    setAdmins(admins.map(admin => (admin.codAdmin === updatedAdmin.codAdmin ? updatedAdmin : admin)));
    setEditingAdmin(null);
    setPopupVisible(false);
  };

  const handleDeleteAdmin = (codAdmin) => {
    setAdmins(admins.filter(admin => admin.codAdmin !== codAdmin));
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
    setPopupVisible(false);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEditClick = (item) => {
    if (view === 'admin') {
      setEditingAdmin(item);
    } else {
      setEditingUser(item);
    }
    setPopupVisible(true);
  };

  const handleOpenConfirmDelete = (itemId) => {
    setItemToDelete(itemId);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    if (view === 'admin') {
      handleDeleteAdmin(itemToDelete);
    } else {
      handleDeleteUser(itemToDelete);
    }
    setConfirmDelete(false);
    setItemToDelete(null);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setEditingAdmin(null);
    setEditingUser(null);
    setConfirmDelete(false);
    setItemToDelete(null);
  };

  return (
    <main className='contentadmin custom-contentadmin'>
      <h1 className='management__title'>Gerenciamento</h1>

      <div className='management__boxview'>
        <button
          className={`management__boxview-button ${view === 'admin' ? 'active' : ''}`}
          onClick={() => setView('admin')}
        >
          Gerenciar Admins
        </button>
        <button
          className={`management__boxview-button ${view === 'user' ? 'active' : ''}`}
          onClick={() => setView('user')}
        >
          Gerenciar Usuários
        </button>
      </div>

      {view === 'admin' ? (
        <>
          <AdminForm
            onAddAdmin={handleAddAdmin}
            onUpdateAdmin={handleUpdateAdmin}
            editingAdmin={editingAdmin}
          />
          <AdminTable
            admins={admins}
            onDeleteAdmin={handleOpenConfirmDelete} // Alterado para abrir o popup de confirmação
            onEditClick={handleEditClick}
          />
        </>
      ) : (
        <>
          <UserForm
            onAddUser={handleAddUser}
            onUpdateUser={handleUpdateUser}
            editingUser={editingUser}
          />
          <UserTable
            users={users}
            onDeleteUser={handleOpenConfirmDelete} // Alterado para abrir o popup de confirmação
            onEditClick={handleEditClick}
          />
        </>
      )}

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="popup-close-button" onClick={handleClosePopup}>X</button>
            {view === 'admin' ? (
              <AdminForm
                onAddAdmin={handleAddAdmin}
                onUpdateAdmin={handleUpdateAdmin}
                editingAdmin={editingAdmin}
              />
            ) : (
              <UserForm
                onAddUser={handleAddUser}
                onUpdateUser={handleUpdateUser}
                editingUser={editingUser}
              />
            )}
          </div>
          <div className="popup-overlay" onClick={handleClosePopup}></div>
        </div>
      )}
    </main>
  );
}

export default Management;