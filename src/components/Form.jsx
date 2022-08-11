import {Formulario,Input,Label,Button} from '../styled/form.js'
import Error from './Error'

function Form({setState,setEnviado,error,setError,setCity,setIcon,setIconError}) {

    const handleChange=(e)=>{
        setError('');
        setState(e.target.value)
        setIconError(false)
        setIcon(true)
        setEnviado(false)
        setCity({})
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault();
                
        setEnviado(true)
   
    }


  return (
    <Formulario onSubmit={handleSubmit}>
        <Label htmlFor="city" >INSERT YOUR CITY</Label>
        <Input onChange={handleChange} name="city" type="text" id="city" />
        {(error==='404' || error==="400") && <Error>No valido</Error>} 
        <Button type="submit" value="SEARCH"/>
        
    </Formulario>
  )
}

export default Form