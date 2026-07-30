import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [edad, setEdad] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [experiencia, setExperiencia] = useState(5)
  const [acepta, setAcepta] = useState(false)
  const [lenguajes, setLenguajes] = useState([])
  const [modalidad, setModalidad] = useState('presencial')
  const [pais, setPais] = useState('')
  const [comentarios, setComentarios] = useState('')
  const [foto, setFoto] = useState(null)
  const [fotoURL, setFotoURL] = useState(null)
  const [color, setColor] = useState('#ff0000')
  const [submittedData, setSubmittedData] = useState(null)

  // Validación básica de email
  const emailRegex = /^\S+@\S+\.\S+$/
  const emailValido = emailRegex.test(email)

  useEffect(() => {
    if (!foto) {
      setFotoURL(null)
      return
    }
    const url = URL.createObjectURL(foto)
    setFotoURL(url)
    return () => URL.revokeObjectURL(url)
  }, [foto])

  const toggleLenguaje = (lang) => {
    setLenguajes((prev) => (prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!acepta) return
    if (!emailValido) return
    if (Number(edad) <= 0) return

    setSubmittedData({
      nombre,
      email,
      password,
      edad,
      fechaNacimiento,
      experiencia,
      acepta,
      lenguajes,
      modalidad,
      pais,
      comentarios,
      fotoName: foto ? foto.name : null,
      color,
    })
  }

  return (
    <div className="form-container">
      <h1>Registro de estudiante</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <label>
          Nombre
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>

        <label>
          Correo
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {!emailValido && email.length > 0 && <span className="error">Correo inválido</span>}
        </label>

        <label>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <label>
          Edad
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} min="0" required />
        </label>

        <label>
          Fecha de nacimiento
          <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
        </label>

        <label>
          Nivel de experiencia: <strong>{experiencia}</strong>
          <input type="range" min="1" max="10" value={experiencia} onChange={(e) => setExperiencia(Number(e.target.value))} />
        </label>

        <label className="checkbox-inline">
          <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} /> Acepto los términos
        </label>

        <fieldset>
          <legend>Lenguajes que conoces</legend>
          <label className="checkbox-inline">
            <input type="checkbox" checked={lenguajes.includes('JS')} onChange={() => toggleLenguaje('JS')} /> JavaScript
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" checked={lenguajes.includes('Python')} onChange={() => toggleLenguaje('Python')} /> Python
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" checked={lenguajes.includes('Java')} onChange={() => toggleLenguaje('Java')} /> Java
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" checked={lenguajes.includes('C#')} onChange={() => toggleLenguaje('C#')} /> C#
          </label>
        </fieldset>

        <fieldset>
          <legend>Modalidad</legend>
          <label className="radio-inline">
            <input type="radio" name="modalidad" value="presencial" checked={modalidad === 'presencial'} onChange={(e) => setModalidad(e.target.value)} /> Presencial
          </label>
          <label className="radio-inline">
            <input type="radio" name="modalidad" value="virtual" checked={modalidad === 'virtual'} onChange={(e) => setModalidad(e.target.value)} /> Virtual
          </label>
        </fieldset>

        <label>
          País
          <select value={pais} onChange={(e) => setPais(e.target.value)}>
            <option value="">-- selecciona --</option>
            <option value="ES">España</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
          </select>
        </label>

        <label>
          Comentarios
          <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} rows={4} />
        </label>

        <label>
          Foto de perfil
          <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files?.[0] || null)} />
        </label>

        {fotoURL && (
          <div className="preview">
            <img src={fotoURL} alt="preview" />
          </div>
        )}

        <label>
          Color favorito
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>

        <button type="submit" disabled={!acepta || !emailValido || Number(edad) <= 0}>Enviar</button>
      </form>

      {submittedData && (
        <div className="summary">
          <h2>Resumen enviado</h2>
          <div className="summary-grid">
            <div><strong>Nombre:</strong> <div>{submittedData.nombre}</div></div>
            <div><strong>Correo:</strong> <div>{submittedData.email}</div></div>
            <div><strong>Contraseña:</strong> <div>{'•'.repeat(8)}</div></div>
            <div><strong>Edad:</strong> <div>{submittedData.edad}</div></div>
            <div><strong>Fecha de nacimiento:</strong> <div>{submittedData.fechaNacimiento || '—'}</div></div>
            <div><strong>Experiencia:</strong> <div>{submittedData.experiencia}/10</div></div>
            <div><strong>Acepta términos:</strong> <div>{submittedData.acepta ? 'Sí' : 'No'}</div></div>
            <div><strong>Lenguajes:</strong> <div>{(submittedData.lenguajes && submittedData.lenguajes.length) ? submittedData.lenguajes.join(', ') : '—'}</div></div>
            <div><strong>Modalidad:</strong> <div>{submittedData.modalidad}</div></div>
            <div><strong>País:</strong> <div>{submittedData.pais || '—'}</div></div>
            <div><strong>Color favorito:</strong>
              <div>
                <span className="color-swatch" style={{ background: submittedData.color }} /> {submittedData.color}
              </div>
            </div>
            <div className="summary-comments"><strong>Comentarios:</strong>
              <div>{submittedData.comentarios || '—'}</div>
            </div>
            <div className="summary-photo"><strong>Foto:</strong>
              <div>
                {fotoURL ? <img src={fotoURL} alt="foto subida" /> : (submittedData.fotoName || '—')}
                <div className="photo-name">{submittedData.fotoName}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
