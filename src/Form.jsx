import { useState } from "react";
import Card from "./Card";
import stylesForm from "./Form.module.css"

export default function Form(){
    
    const [userName, setUserName] = useState("");
    const [dinosaurio, setDinosaurio] = useState("");
    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState(false)
  
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangeDinosaurio = (e) => setDinosaurio(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const UserNameValido = validarUserName(userName);
      const DinosaurioValido = validarDinosaurio(dinosaurio);
  
      if (!DinosaurioValido || !UserNameValido) {
        setError(true)
        setShowCard(false)
      } else {
        setShowCard(true)
        setError(false)
      }
  
    };
  
    const validarUserName = (userName) => {
      
      if (userName.length > 3 && !userName.includes(' ')) {
        return true;
      } else {
        return false;
      }
    }
    
    const validarDinosaurio = (dinosaurio) => {
      
      if (dinosaurio.length > 5) return true;
      else return false;
    }
    
    return (
        <>
          
            <form onSubmit={handleSubmit} className={stylesForm.form}>
              <input type="text" placeholder='Tu nombre' value={userName} onChange={onChangeUserName} className={stylesForm.input}/>
              <input type="text" placeholder='Dinosaurio favorito' value={dinosaurio} onChange={onChangeDinosaurio} className={stylesForm.input}/>
              <button type='submit' className={stylesForm.submitButton}>Enviar</button>
            </form>

            {showCard && <Card userName={userName} dinosaurio={dinosaurio} />}
            {error && <h3 style={{color: 'red', fontFamily: 'monospace'}}>Por favor, verifica que la información sea correcta.</h3>}
        </>
      )
}