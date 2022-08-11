import Icon from './components/Icon'
import FORM from './components/Form'
import { useState } from 'react';
import useFetch from './hooks/useFetch';
import Dashboard from './components/Dashboard';
import Spinner from './components/Spinner';
import {Container} from './styled/app.js'
import thermometer from './assets/thermometer.svg'
import err from './assets/error-close-svgrepo-com.svg'

function App() {

  

  const [state, setState]=useState('');
  
  const {
    setIconError,
    iconError,
    show,
    city,
    error,
    setError,
    setCity,
    loading,
    icon,
    setIcon,
    setEnviado,
    enviado}= useFetch(state);
  
  
  


  return (
    <Container>

      <div>
        <FORM 
              setIconError={setIconError}
              setState={setState}
              setEnviado={setEnviado}
              error={error}
              setError={setError}
              setCity={setCity}
              setIcon={setIcon}/>
        {loading && <Spinner/>}
      </div>
      <div>
        {icon &&<Icon ruta={thermometer} texto={'icono de un termómetro'}/>}
        {iconError && <Icon ruta={err} texto={'icono de error'}/>}
        {(show && enviado && !loading) && <Dashboard city={city}/>
}
      </div>
    </Container>
  )
}

export default App
