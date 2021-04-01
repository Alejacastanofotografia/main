import React from 'react';

const Contacto2 = props => {
    const { params } = props.match; 


	return(
		<div>
		    <br />
		    <br />
		    <br />
		    <br />
		    <br />
		    <br />
		    <br />
		    <br />
			<p>El parametro enviado es: {params.id}</p>
		</div>
	)
}

export default Contacto2;
