import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GenericForm({ fields, onSubmit, editingData, apiUrl, method }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const initialData = {};
    fields.forEach(field => {
      initialData[field.name] = editingData ? editingData[field.name] : (field.type === 'select' ? field.options[0] : '');
    });
    setFormData(initialData);
  }, [editingData, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações adicionais
    if (formData.senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres!');
        return;
    }

    if (formData.nome.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres!');
        return;
    }

    try {
        let response;
        if (method === 'POST') {
            response = await axios.post(apiUrl, formData);
        } else if (method === 'PUT') {
            response = await axios.put(apiUrl, formData);
        }

        alert('Dados enviados com sucesso');
        setFormData(fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {}));
        if (onSubmit) onSubmit(response.data);
    } catch (error) {
        alert('Erro ao enviar dados: ' + (error.response?.data?.message || error.message));
    }
};



  return (
    <form className='generic-form' onSubmit={handleSubmit}>
      {fields.map(field => (
        <div className='form-field' key={field.name}>
          <label className='generic-label'>
            {field.label}:
            {field.type === 'select' ? (
              <select
                className='generic-input'
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
                className='generic-input'
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
        {editingData ? 'Salvar' : ''}
      </button>
    </form>
  );
}

export default GenericForm;