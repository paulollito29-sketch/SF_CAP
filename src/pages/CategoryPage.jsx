import React, { useEffect } from 'react'
import { useState } from 'react';

const CategoryPage = () => {

  const [categories, setCategories] = useState([])

  const getCategories = async () => {

    const res = await fetch('http://localhost:8080/api/categories',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
    });
    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-4'>Categorías</h2>
      <div className='row'>
        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map(category => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage