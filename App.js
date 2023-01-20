import './App.css';
import {useState} from 'react';
import Welcome from './Welcome';

function App() {
    const [name , setName] = useState("")
    const [submit , setSubmit] = useState(false)

    return (
        <div className='login-page'>
        <div>
            <label>Enter Your Name -</label>
            &nbsp;&nbsp;
            <input
            
            value ={name}
            onChange={(event)=>{setName(event.target.value)}}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{setSubmit(!submit)}}>Login</button>
            </div> 
            
            {(submit && name) && <Welcome name={name}></Welcome>}

            <div>
              <p>Assignment done by Sachin (12005919)</p>
            </div>
        </div>

        
    );

}

export default App;