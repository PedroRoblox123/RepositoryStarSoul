import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from '../GenericTable/index.jsx';
import AdminForm from '../AdminForm/index.jsx';

const adminColumns = [
  { label: 'ID', accessor: 'id' },
  { label: 'Cod Admin', accessor: 'codAdmin' },
  { label: 'Nome', accessor: 'nome' },
  { label: 'Email', accessor: 'email' },
  { label: 'Senha', accessor: 'senha' },
  { 
    label: 'Status', 
    accessor: 'codStatus', 
    render: user => user.codStatus === 'Ativo' ? 'Ativo' : 'Inativo' 
  },
];

function AdminTable() {
  const [admins, setAdmins] = useState([]);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState(null);

  const fetchAdmins = () => {
    axios.get('http://localhost:8080/api/admins')
      .then(response => {
        setAdmins(response.data);
      })
      .catch(error => console.error('Erro ao buscar administradores:', error));
  };

  useEffect(() => {
    fetchAdmins();
    const intervalId = setInterval(() => {
      fetchAdmins();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDeleteAdmin = (adminId) => {
    axios.delete(`http://localhost:8080/api/admins/${adminId}`)
      .then(() => {
        fetchAdmins();
        setConfirmDeleteVisible(false); // Fecha o popup de confirmação
      })
      .catch(error => console.error('Erro ao excluir administrador:', error));
  };

  const handleEditClick = (admin) => {
    setEditingAdmin(admin);
    setPopupVisible(true);
  };

  const handleUpdateAdmin = (updatedAdmin) => {
    setAdmins(admins.map(admin => (admin.id === updatedAdmin.id ? { ...admin, ...updatedAdmin } : admin)));
    setEditingAdmin(null);
    setPopupVisible(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setEditingAdmin(null);
  };

  const handleOpenConfirmDelete = (adminId) => {
    setAdminToDelete(adminId);
    setConfirmDeleteVisible(true);
  };

  const handleCloseConfirmDelete = () => {
    setConfirmDeleteVisible(false);
    setAdminToDelete(null);
  };

  return (
    <>
      <GenericTable
        data={admins}
        columns={adminColumns}
        onDelete={handleOpenConfirmDelete}
        onEditClick={handleEditClick}
      />
      
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="popup-close-button" onClick={handleClosePopup}>X</button>
            <AdminForm
              onAddAdmin={fetchAdmins}
              onUpdateAdmin={handleUpdateAdmin}
              editingAdmin={editingAdmin}
            />
          </div>
          <div className="popup-overlay" onClick={handleClosePopup}></div>
        </div>
      )}

      {confirmDeleteVisible && (
        <div className="popup">
          <div className="popup-confirm-content">
            <p>Tem certeza que deseja excluir este administrador?</p>
            <button className='buttons-confirm' onClick={() => handleDeleteAdmin(adminToDelete)}>Confirmar</button>
            <button className='buttons-cancel' onClick={handleCloseConfirmDelete}>Cancelar</button>
          </div>
          <div className="popup-overlay" onClick={handleCloseConfirmDelete}></div>
        </div>
      )}
    </>
  );
}

export default AdminTable;