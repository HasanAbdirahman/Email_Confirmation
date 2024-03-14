import { useState } from 'react'

export default function Input(){
    const [email, setEmail] = useState('');
    const [checked, setChecked]= useState(false)

    function handleChange(e){
        setEmail(e.target.value)
    }
    function handleChecked(e){
        setChecked(!checked)
    }
    return(
        <form >
            <input style={{padding: '0.5rem', borderRadius: '10px', borderColor: 'black'}}type="email" id="email" placeholder="Fill in your email" value={email} onChange={handleChange}/>
            <div>
            <div> Subcribe to the newsletter for marketing.
            <input type="checkbox" id="email" name="email" value={checked} onChange={handleChecked}></input>
            </div>

            </div>
           <div>
            <button type='submit' style={{backgroundColor: 'black', color: 'white', marginTop: '0.6rem'}} >Submit</button>
           </div>
        </form>
    )
}