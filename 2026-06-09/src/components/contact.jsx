// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Contact.jsx
//
//  INSTRUCCIONES:
//  1. Completa el formulario: nombre, email, teléfono,
//     tipo de servicio (select), mensaje (textarea), botón.
//  2. Agrega la información de contacto en la columna izquierda.
//  3. Usa las clases Bootstrap: form-label, form-control,
//     form-select, btn.
//
//  ⚠️ DIFERENCIAS JSX vs HTML:
//     class="..."  →  className="..."
//     for="campo"  →  htmlFor="campo"
//
//  RETO ADICIONAL: usa useState para manejar el formulario
//  y mostrar una alerta al enviarlo.
// ============================================================

function Contact() {
  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            {/* 🛠️ TODO: Escribe un texto invitando al contacto */}
          </p>
        </div>

        <div className="row g-5">

          {/* Columna izquierda: información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>
            {/* 🛠️ TODO: Lista con 📍 dirección, 📞 teléfono, 📧 email, 🕐 horario */}
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <div className="row g-3">

                {/* Campo: Nombre */}
                <div className="col-md-6">
                  {/* TODO */}
                </div>

                {/* Campo: Email */}
                <div className="col-md-6">
                  {/* TODO */}
                </div>

                {/* Campo: Teléfono */}
                <div className="col-md-6">
                  {/* TODO */}
                </div>

                {/* Campo: Tipo de servicio — usa <select> con 5+ opciones */}
                <div className="col-md-6">
                  {/* TODO */}
                </div>

                {/* Campo: Mensaje — usa <textarea> */}
                <div className="col-12">
                  {/* TODO */}
                </div>

                {/* Botón enviar */}
                <div className="col-12">
                  {/* TODO */}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;