import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GenericForm({ fields, onSubmit, editingData, apiUrl, method }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const initialData = {};
    fields.forEach(field => {
      initialData[field.name] = field.type === 'select' && field.options ? field.options[0] : '';
    });
    setFormData(editingData || initialData);

    // Testando a conexão com a API
    axios.get('http://localhost:8080/usuario')
      .then(response => console.log('Conexão com API bem-sucedida:', response))
      .catch(error => console.error('Erro ao conectar com API:', error));
  }, [editingData, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Enviando dados:", formData); // Log dos dados enviados

    try {
      let response;
      if (method === 'POST') {
        response = await axios.post(apiUrl, formData);
      } else if (method === 'PUT') {
        response = await axios.put(apiUrl, formData);
      }

      console.log('Resposta da API:', response);
      alert('Dados enviados com sucesso');
      setFormData(fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {}));
      if (onSubmit) onSubmit(formData);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
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
              <select className={`generic-input ${field.disabled ? 'disabled-field' : ''}`} name={field.name} value={formData[field.name] || ''} onChange={handleChange} required disabled={field.disabled}>
                {field.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input className={`generic-input ${field.disabled ? 'disabled-field' : ''}`} type={field.type} name={field.name} value={formData[field.name] || ''} onChange={handleChange} placeholder={field.placeholder} required disabled={field.disabled} />
            )}
          </label>
        </div>
      ))}
      <button className='generic-button' type="submit">
        {editingData ? 'Atualizar' : 'Cadastrar'}
      </button>
    </form>
  );
}

export default GenericForm;