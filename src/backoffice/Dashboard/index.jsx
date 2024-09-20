import React, { useState } from 'react';
import {
  LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer
} from 'recharts';
import './styles.css';

function Dashboard() {
  const [users] = useState([
    {
      nome: 'Rodrigo Salomão',
      ativo: true,
      administrador: false,
      email: 'rodrigosalomao2001@gmail.com',
    },
    {
      nome: 'Tiago Soares Moura',
      ativo: true,
      administrador: true,
      email: 'tiagosoares21@gmail.com',
    },
  ]);

  // Contagem de usuários
  const totalUsuarios = users.length;
  const usuariosAtivos = users.filter(user => user.ativo).length;

  // Dados para os gráficos
  const userGrowthData = [
    { name: 'Jan', users: 20 },
    { name: 'Feb', users: 35 },
    { name: 'Mar', users: 50 },
    { name: 'Apr', users: 70 },
    { name: 'May', users: 90 },
  ];

  const activityData = [
    { name: 'Meditation', sessions: 30 },
    { name: 'Yoga', sessions: 15 },
    { name: 'Reading', sessions: 20 },
    { name: 'Breathing', sessions: 25 },
  ];

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

        {/* Sessões por Atividade */}
        <div className="bar-chart-wrapper">
          <h2>Sessões por Atividade</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sessions" fill="#82ca9d" />
            </BarChart>
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

      {/* Novo gráfico: Comportamento de usuários */}
      <div className="charts-section">
        <div className="line-chart-wrapper">
          <h2>Engajamento ao longo do tempo</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="users" stroke="#FF8042" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bar-chart-wrapper">
          <h2>Atividade por Categoria</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sessions" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;