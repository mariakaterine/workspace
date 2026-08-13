import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [mostrarReloj, setMostrarReloj] = useState(true);
  const [usuarioId, setUsuarioId] = useState(1);

  return (
    <div className="app">
      <h1>useEffect y Ciclo de Vida</h1>

      <section>
        <h2>1. Reloj</h2>
        <button onClick={() => setMostrarReloj(!mostrarReloj)}>
          {mostrarReloj ? 'Ocultar reloj' : 'Mostrar reloj'}
        </button>
        {mostrarReloj && <Reloj />}
      </section>

      <section>
        <h2>2. Contador automático</h2>
        <ContadorAutomatico />
      </section>

      <section>
        <h2>3. Ancho de ventana</h2>
        <RastreadorVentana />
      </section>

      <section>
        <h2>4. Perfil de usuario</h2>
        <div className="botones-usuario">
          <button onClick={() => setUsuarioId(1)}>Usuario 1</button>
          <button onClick={() => setUsuarioId(2)}>Usuario 2</button>
        </div>
        <PerfilUsuario id={usuarioId} />
      </section>

      <section>
        <h2>5. Experimento: fases del ciclo de vida</h2>
        <ExperimentoFases />
      </section>
    </div>
  );
}

function Reloj() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    console.log('⏰ Reloj montado');
    const id = setInterval(() => {
      setSegundos((s) => {
        console.log('tick, segundos:', s + 1);
        return s + 1;
      });
    }, 1000);

    return () => {
      console.log('🧹 cleanup del reloj');
      clearInterval(id);
    };
  }, []);

  return <p>Segundos: {segundos}</p>;
}

function ContadorAutomatico() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('Valor antes del update:', contador);
      setContador((valorAnterior) => {
        const nuevoValor = valorAnterior + 1;
        console.log('setContador funcional, nuevo valor:', nuevoValor);
        return nuevoValor;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [contador]);

  return <p>Contador: {contador}</p>;
}

function RastreadorVentana() {
  const [ancho, setAncho] = useState(window.innerWidth);

  useEffect(() => {
    function manejarResize() {
      console.log('Resize detectado, ancho:', window.innerWidth);
      setAncho(window.innerWidth);
    }

    window.addEventListener('resize', manejarResize);

    return () => {
      console.log('🧹 cleanup resize');
      window.removeEventListener('resize', manejarResize);
    };
  }, [ancho]);

  return <p>Ancho actual: {ancho}px</p>;
}

function PerfilUsuario({ id }) {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    console.log('Buscando datos del usuario', id);
    const nombres = { 1: 'Ana', 2: 'Luis' };
    setNombre(nombres[id]);
  }, [id]);

  return <p>Nombre: {nombre}</p>;
}

function ExperimentoFases() {
  const [clics, setClics] = useState(0);
  const esPrimeraVez = useRef(true);

  useEffect(() => {
    if (esPrimeraVez.current) {
      console.log('🟢 MONTADO');
      esPrimeraVez.current = false;
    } else {
      console.log('🔵 ACTUALIZADO, clics:', clics);
    }

    return () => {
      console.log('🔴 LIMPIEZA (antes del próximo efecto, o al desmontar)');
    };
  }, [clics]);

  return (
    <div>
      <p>Clics: {clics}</p>
      <button onClick={() => setClics(clics + 1)}>Clickeame</button>
    </div>
  );
}

export default App;
