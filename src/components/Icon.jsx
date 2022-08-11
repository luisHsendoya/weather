import {Container,Image} from '../styled/icon.js';


function Icon({ruta,texto}) {
  return (
    <Container>
         <Image src={ruta} alt={texto} />
    </Container>
  )
}

export default Icon