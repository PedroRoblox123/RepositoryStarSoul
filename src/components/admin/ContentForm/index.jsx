import React, { useState, useEffect } from 'react';
import './styles.css';  // Arquivo CSS para estilizar o formulário

const contentFields = [
  { name: 'titulo', label: 'Título', type: 'text', placeholder: 'Título' },
  { name: 'descricao', label: 'Descrição', type: 'text', placeholder: 'Descrição' },
  { name: 'tipo_conteudo', label: 'Tipo de Conteúdo', type: 'select', options: ['Meditações', 'Podcast', 'Músicas', 'Artigos'] },
  { name: 'data_publicacao', label: 'Data de Publicação', type: 'date' },
  { name: 'url', label: 'URL', type: 'text', placeholder: 'URL' },
  { name: 'status', label: 'Status', type: 'select', options: ['Publicado', 'Rascunho'] },
  { name: 'fk_id_categoria', label: 'Categoria', type: 'text', placeholder: 'Categoria' },
];

function ContentForm({ onAddContent, onUpdateContent, editingContent }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const initialData = {};
    contentFields.forEach(field => {
      if (field.type === 'select' && field.options) {
        initialData[field.name] = field.options[0];
      } else {
        initialData[field.name] = '';
      }
    });
    setFormData(editingContent || initialData);
  }, [editingContent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContent) {
      onUpdateContent(formData);
    } else {
      onAddContent(formData);
    }
    setFormData(contentFields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {}));
  };

  return (
    <form className='content-form' onSubmit={handleSubmit}>
      {contentFields.map(field => (
        <div className='form-group' key={field.name}>
          <label className='form-label'>
            {field.label}:
            {field.type === 'select' ? (
              <select
                className='form-input'
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required
              >
                {field.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className='form-input'
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
              />
            )}
          </label>
        </div>
      ))}
      <button className='generic-button' type="submit">
        {editingContent ? 'Atualizar' : 'Adicionar'}
      </button>
    </form>
  );
}

export default ContentForm;