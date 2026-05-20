import React, { useEffect, useState } from 'react'
import CustomInputText from '../components/CustomInputText'
import useForm from '../hooks/useForm'
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const { username, password, handleChange } = useForm({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const { status, login, errors, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  }

  useEffect(() => {
    if (status === 'authenticated') {
      navigate('/admin', { replace: true });
    }
  }, [status, navigate]);

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
        <div className='card shadow p-4'>
          <h4 className='text-center mb-4'>Formulario de Login</h4>
          <form onSubmit={handleSubmit}>
            <CustomInputText
              customId="inputUsuario"
              titleLabel="Usuario"
              customPlaceholder="Ingrese el usuario"
              onChange={handleChange}
              name="username"
              value={username}
            />
            <CustomInputText
              type="password"
              customId="inputPassword"
              titleLabel="Contraseña"
              customPlaceholder="Ingrese la contraseña"
              onChange={handleChange}
              name="password"
              value={password}
            />
            <button type="submit" className='btn btn-primary'
              disabled={status === 'checking'}
            >
              {status === 'checking' ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </form>
          <div className='mt-3'>
            {
              errors.length > 0 && (
                <div className='alert alert-danger mt-3'>
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )
            }
            {
              error && (
                <div className='alert alert-danger mt-3'>
                  {error}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage