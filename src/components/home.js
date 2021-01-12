import React from 'react';
class Home extends React.Component{
        
    render(){
	return (
            <div className="home">
	        <div className="textHome itemHome">
	          <h2>
	            Atenta a cada detalle que asegure maravillosos recuerdos plasmados en cada fotografía.
	          </h2>
	        </div>
	        <div className="imgHome itemHome">
	            <div className="wrapperImg">
			<img className="itemImg select" src="/images/background/img1.jpg" alt="Retrato Adulto" title="Retrato adulto" />
			<img className="itemImg select" src="/images/background/img13.jpg" alt="Retrato Infantil" title="Retrato Infantil"/>
			<img className="itemImg select" src="/images/background/img2.jpg" alt="Retrato Adulto" title="Retrato adulto"/>
			<img className="itemImg select" src="/images/background/img4.jpg"  alt="Retrato Adulto" title="Retrato adulto"/>
			<img className="itemImg select" src="/images/background/img10.jpg" alt="Retrato Infantil" title="Retrato Infantil"/>
	            </div>
	        </div>
	    </div>
	) 
    }
}

export default Home
