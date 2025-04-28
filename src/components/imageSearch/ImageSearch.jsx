import React, { useEffect, useState } from 'react'
import { consultarImagenes } from '../../services/consultarImagenes'
import './ImageSearch.css' // Asegúrate de importar el CSS que te pasé

export function ImageSearch() {
  const [imagenes, setImagenes] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('') 

  async function cargarImagenes(busqueda) {
    setLoading(true)
    try {
      const resultado = await consultarImagenes(busqueda)
      setImagenes(resultado.photos || [])
    } catch (error) {
      console.error('Error consultando imágenes:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cargarImagenes(query)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (query.trim() !== '') {
      cargarImagenes(query)
    }
  }

  return (
    <div className="image-search-container">
      <h2 className="image-search-title">Gallery</h2>

      
      <form onSubmit={handleSubmit} className="image-search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Images..."
          className="image-search-input"
        />
        <button
          type="submit"
          className="image-search-button"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="text-center my-10">Loading...</div>
      ) : (
        <div className="image-grid">
          {imagenes.map((foto) => (
            <div key={foto.id} className="image-card">
              <img
                src={foto.src.medium}
                alt={foto.photographer}
              />
              <div className="photographer-name">
                📷 {foto.photographer}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}




