import './styles.css';
import React from 'react';

function GenericTable({ data, columns, onDelete, onEditClick }) {
  return (
    <table className='generic-table'>
      <thead className='generic-thead'>
        <tr className='generic-tr'>
          {columns.map(column => (
            <th key={column.accessor} className='th-style'>
              {column.label}
            </th>
          ))}
          <th className='th-style'>Ações</th>
        </tr>
      </thead>
      <tbody className='generic-tbody'>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length + 1} className="no-data">
              Nenhum dado disponível.
            </td>
          </tr>
        ) : (
          data.map(item => (
            <tr className='generic-cad' key={item.id || item.codUser || item.codAdmin}>
              {columns.map(column => (
                <td key={`${column.accessor}-${item.id}`}>
                  {column.render ? column.render(item) : item[column.accessor]}
                </td>
              ))}
              <td className='generic-td'>
                <button
                  className='generic-button-edit'
                  onClick={() => onEditClick && onEditClick(item)}
                >
                  Editar
                </button>
                <button
                  className='generic-button-delete'
                  onClick={() => onDelete && onDelete(item.id || item.codAdmin || item.codUser)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default GenericTable;