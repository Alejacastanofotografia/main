import React from 'react';
import ModalError from './modalError';
import {newContact, ff} from './scripts/db';

class Contacto extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.state = {
      name: '',
      telefono: '',
      email: '',
      descripcion: ''
    };
    this.input = React.createRef();
    this.form = React.createRef();
  }

  componentDidMount() {}
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleFocus(element) {
    document.querySelector(`#${element}`).focus();
  }
  handleSubmit(event) {
    event.preventDefault();
    let data = {
      name: this.state.name,
      telefono: this.state.telefono,
      email: this.state.email,
      descripcion: this.state.descripcion,
      dim: [window.screen.width, window.screen.height],
      timestamp: ff.FieldValue.serverTimestamp(),
    };

    if (this.state.name === null || this.state.name === '') {
      alert('el campo nombre es requerido');
      this.handleFocus('nameForm');
      document.querySelectorAll('.wrapperError')[0].classList.remove('hide');
    } else if (this.state.telefono === null || this.state.telefono === '') {
      alert('el campo telefono es requerido');
      this.handleFocus('telForm');
    } else if (isNaN(this.state.telefono)) {
      alert('el campo telefono debe ser un número');
      this.handleFocus('telForm');
    } else {
      newContact(data);
      this.form.current.reset();
    }
  }

  render() {
    return (
      <div id="contacto" className="mainContacto">
        <div className="itemContacto textContacto">
          <div>
            <img src="/images/background/violeta.png" alt="contacto" />
          </div>
          <h3>Contacto</h3>
          <p>
            Puedes contactarme a través de mis redes sociales o ingresar tu
            datos en el siguiente formulario, te contactaré en el menor tiempo
            posible.
          </p>
        </div>
        <div className="itemContacto formContacto">
          <form ref={this.form} onSubmit={this.handleSubmit}>
            <input
              ref={this.input}
              type="text"
              name="name"
              placeholder="Nombre:"
              id="nameForm"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono:"
              id="telForm"
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo:"
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              name="descripcion"
              placeholder="Escribe aquí tus comentarios:"
              onChange={this.handleChange}></textarea>
            <button className="btn">Enviar</button>
          </form>
        </div>
        <ModalError />
      </div>
    );
  }
}
export default Contacto;
