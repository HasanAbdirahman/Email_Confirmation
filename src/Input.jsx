import { useState } from 'react'
import { Resend } from 'resend';
import { Email } from './Email';

export default function Input(){
    const [email, setEmail] = useState('');
    const [checked, setChecked]= useState(false)
    
    const resend = new Resend(process.env.REACT_APP_API_KEY);

   async function  handleSubmit(e){
        e.preventDefault();     
        if (checked && email){
            await resend.emails.send({
                from: 'hasanabdirahman1999@gmail.com',
                to: email,
                subject: 'hello world',
                react: <Email url="https://example.com" />,
            });
        }       
    }
    function handleChange(e){
        setEmail(e.target.value)
    }
    function handleChecked(e){
        setChecked(!checked)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input style={{padding: '0.5rem', borderRadius: '10px', borderColor: 'black'}}type="email" id="email" placeholder="Fill in your email" value={email} onChange={handleChange}/>
            <div> Subcribe to the newsletter for marketing.
            <input type="checkbox" id="email" name="email" value={checked} onChange={handleChecked}></input>
            </div>

           <div>
            <button type='submit' style={{backgroundColor: 'black', color: 'white', marginTop: '0.6rem'}} >Submit</button>
           </div>
        </form>
    )
}
