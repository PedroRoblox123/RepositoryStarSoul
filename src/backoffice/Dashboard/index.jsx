import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import './styles.css';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [userGrowthData, setUserGrowthData] = useState([]);

  useEffect(() => {
    // Supondo que você tenha endpoints para buscar usuários e administradores
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:8080/usuario');
        const adminResponse = await axios.get('http://localhost:8080/administrador');
        setUsers(userResponse.data);
        setAdmins(adminResponse.data);
        setUserGrowthData(generateGrowthData(userResponse.data)); // Gerar dados de crescimento
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  // Função para gerar dados de crescimento com base no total de usuários
  const generateGrowthData = (users) => {
    const growthData = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const initialCount = users.length; // Contagem inicial

    months.forEach((month, index) => {
      growthData.push({ name: month, users: initialCount + index * 10 }); // Incrementar o crescimento
    });

    return growthData;
  };

  // Contagem de usuários e administradores
  const totalUsuarios = users.length;
  const usuariosAtivos = users.filter(user => user.ativo).length;
  const totalAdministradores = admins.length;

  const pieData = [
    { name: 'Ativos', value: usuariosAtivos },
    { name: 'Inativos', value: totalUsuarios - usuariosAtivos },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="dashboard-container">
      <div className="dashboard-info">
        <div className="info-card">
          <h2>Total de Usuários</h2>
          <p>{totalUsuarios}</p>
        </div>

        <div className="info-card">
          <h2>Usuários Ativos</h2>
          <p>{usuariosAtivos}</p>
        </div>

        <div className="info-card">
          <h2>Total de Administradores</h2>
          <p>{totalAdministradores}</p>
        </div>
      </div>

      <div className="charts-section">
        {/* Crescimento de Usuários */}
        <div className="line-chart-wrapper">
          <h2>Crescimento de Usuários</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Status de Usuários */}
        <div className="pie-chart-wrapper">
          <h2>Status de Usuários</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
