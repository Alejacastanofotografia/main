import React from 'react';

export default class ModalError extends React.Component{
    render(){
      return(
        <div className="wrapperError hide">
	  <div className="error">
	    <p>
	      Se ha presentado un error
	    </p>
	    <button>
	      Entendido
	    </button>
	  </div>
        </div>
      );
    }
}
