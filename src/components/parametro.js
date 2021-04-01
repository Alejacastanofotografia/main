import {useParams} from 'react-router-dom';
 
function Parametros(){
    let { slug } = useParams();
	return <div>Este es el parametro: {slug}</div>;
}

export default Parametros;
