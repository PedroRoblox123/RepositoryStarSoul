import React from 'react';
import './styles.css';

function ContentTable({ contents, onDeleteContent, onEditClick }) {
  return (
    <div className='content-table-container'>
      <table className='content-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Data de Publicação</th>
            <th>URL</th>
            <th>Status</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(content => (
            <tr key={content.id_conteudo}>
              <td>{content.id_conteudo}</td>
              <td>{content.titulo}</td>
              <td>{content.descricao}</td>
              <td>{content.tipo_conteudo}</td>
              <td>{content.data_publicacao}</td>
              <td>{content.url}</td>
              <td>{content.status}</td>
              <td>{content.fk_id_categoria}</td>
              <td className='generic-td'>
                <button className='generic-button-edit' onClick={() => onEditClick(content)}>Editar</button>
                <button className='generic-button-delete' onClick={() => onDeleteContent(content.id_conteudo)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContentTable;