import './styles.css';
import React, { useState } from 'react';
import AdminTable from '../../components/admin/AdminTable/index.jsx';  // Tabela de Admin
import AdminForm from '../../components/admin/AdminForm/index.jsx';    // Formulário de Admin
import UserTable from '../../components/admin/UserTable/index.jsx';    // Tabela de User
import UserForm from '../../components/admin/UserForm/index.jsx';      // Formulário de User

function Management() {
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [view, setView] = useState('admin');
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddAdmin = (newAdmin) => {
    if (admins.some(admin => admin.codAdmin === newAdmin.codAdmin)) {
      setErrorMessage('Já existe um admin com esse código.');
      setErrorPopupVisible(true);
      return;
    }

    setAdmins([...admins, newAdmin]);
    setErrorMessage('');
  };

  const handleUpdateAdmin = (updatedAdmin) => {
    setAdmins(
      admins.map(admin => admin.codAdmin === updatedAdmin.codAdmin ? updatedAdmin : admin)
    );
    setEditingAdmin(null);
    setPopupVisible(false);
    setErrorMessage('');
  };

  const handleDeleteAdmin = (codAdmin) => {
    setAdmins(admins.filter(admin => admin.codAdmin !== codAdmin));
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map(user => user.codUser === updatedUser.codUser ? updatedUser : user)
    );
    setEditingUser(null);
    setPopupVisible(false);
  };

  const handleDeleteUser = (codUser) => {
    setUsers(users.filter(user => user.codUser !== codUser));
  };

  const handleClick = (newView) => {
    setView(newView);
  };

  const handleEditClick = (item) => {
    if (view === 'admin') {
      setEditingAdmin(item);
    } else {
      setEditingUser(item);
    }
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setEditingAdmin(null);
    setEditingUser(null);
    setErrorMessage('');
  };

  const handleCloseErrorPopup = () => {
    setErrorPopupVisible(false);
    setErrorMessage('');
  };

  return (
    <main className='contentadmin custom-contentadmin'>
      <h1 className='management__title'>Gerenciamento</h1>

      <div className='management__boxview'>
        <button
          className={`management__boxview-button ${view === 'admin' ? 'active' : ''}`}
          onClick={() => handleClick('admin')}
        >
          Gerenciar Admins
        </button>
        <button
          className={`management__boxview-button ${view === 'user' ? 'active' : ''}`}
          onClick={() => handleClick('user')}
        >
          Gerenciar Usuários
        </button>
      </div>

      {view === 'admin' ? (
        <>
          <h2>Administradores</h2>
          <AdminForm
            onAddAdmin={handleAddAdmin}
            onUpdateAdmin={handleUpdateAdmin}
            editingAdmin={editingAdmin}
          />
          <AdminTable
            admins={admins}
            onDeleteAdmin={handleDeleteAdmin}
            onEditClick={handleEditClick}
          />
        </>
      ) : (
        <>
          <h2>Usuários</h2>
          <UserForm
            onAddUser={handleAddUser}
            onUpdateUser={handleUpdateUser}
            editingUser={null}
          />
          <UserTable
            users={users}
            onDeleteUser={handleDeleteUser}
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

      {errorPopupVisible && (
        <div className="error-popup">
          <div className="error-popup-content">
            <button className="error-popup-close-button" onClick={handleCloseErrorPopup}><img className='Close_button' src="../../public/admin/Close_X.png" alt="Fechar" /></button>
            <p>{errorMessage}</p>
          </div>
          <div className="error-popup-overlay" onClick={handleCloseErrorPopup}></div>
        </div>
      )}
    </main>
  );
}

export default Management;