//Form with use State
import { useState } from 'react';

const FormText = () => {
    const [name, setName] = useState('');
    
    const formHandler = (event) =>{
        event.preventDefault();
        alert ('Name : '+name);
    }
    return(
        <div>
            <form onSubmit= {formHandler}>
                <input type='text'onChange={e=>setName(e.target.value)}/>
                <input type='submit' value='Submit'/>
                </form>
        </div>

    )

}
export default FormText;