import {useState} from 'react';

 const RadioForm = () => {
    const [dept, setDept] = useState('');
    return(
        <div>
            <h2>What is your department?</h2>
            <input type='radio' name='rdDept' value='DBT'
            onChange={(e) => setDept(e.target.value)} /> DBT
            <input type='radio' name='rdDept' value='IT'
            onChange={(e) => setDept(e.target.value)} /> IT
            <input type='radio' name='rdDept' value='Food'
            onChange={(e) => setDept(e.target.value)} /> Food
            <input type='radio' name='rdDept' value='Marketing'
            onChange={(e) => setDept(e.target.value)} /> Marketing
            <hr/>
            <h3> Your department : {dept}</h3>
            </div>
    );

    
}
export default RadioForm;