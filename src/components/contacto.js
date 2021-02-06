import React from 'react';

class Contacto extends React.Component {
  render() {
    return (
      <div id="contacto" className="mainContacto">
        <div className="itemContacto textContacto">
	<div>
	  <img src="/images/background/violeta.png"/>
	</div>
	  <h3>Contacto</h3>
          <p>
            Puedes contactarme a través de mis redes sociales o ingresar tu
            datos en el siguiente formulario, te contactaré en el menor tiempo
            posible.
          </p>
        </div>
        <div className="itemContacto formContacto">
          <form>
            <input type="text" placeholder="Nombre:" />
            <input type="text" placeholder="Teléfono:" />
            <input type="email" placeholder="Correo:" />
            <textarea
              type="text"
              placeholder="Escribe aquí tus comentarios:"></textarea>
	<button className="btn">
	Enviar
	</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Contacto;
