import './styles.css';  // Arquivo CSS para estilizar o layout
import React, { useState } from 'react';
import ContentTable from '../../components/admin/ContentTable';
import ContentForm from '../../components/admin/ContentForm';

function ContentManagement() {
  const [contents, setContents] = useState([]);
  const [editingContent, setEditingContent] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleAddContent = (newContent) => {
    setContents([...contents, newContent]);
  };

  const handleUpdateContent = (updatedContent) => {
    setContents(
      contents.map(content => content.id_conteudo === updatedContent.id_conteudo ? updatedContent : content)
    );
    setEditingContent(null);
    setPopupVisible(false);
  };

  const handleDeleteContent = (id_conteudo) => {
    setContents(contents.filter(content => content.id_conteudo !== id_conteudo));
  };

  const handleEditClick = (item) => {
    setEditingContent(item);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setEditingContent(null);
  };

  return (
    <div className='contentadmin custom-contentadmin'>
      <h1 className='management__title'>Gerenciamento de Conteúdos</h1>
      <ContentForm
        onAddContent={handleAddContent}
        onUpdateContent={handleUpdateContent}
        editingContent={editingContent}
      />
      <ContentTable
        contents={contents}
        onDeleteContent={handleDeleteContent}
        onEditClick={handleEditClick}
      />
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="popup-close-button" onClick={handleClosePopup}>X</button>
            <ContentForm
              onAddContent={handleAddContent}
              onUpdateContent={handleUpdateContent}
              editingContent={editingContent}
            />
          </div>
          <div className="popup-overlay" onClick={handleClosePopup}></div>
        </div>
      )}
    </div>
  );
}

export default ContentManagement;