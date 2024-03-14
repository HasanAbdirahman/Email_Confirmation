import { useState } from 'react'
import { Resend } from 'resend';
import { Email } from './Email';

export default function Input(){
    const [email, setEmail] = useState('');
    const [checked, setChecked]= useState(false)
    
    
    async function  handleSubmit(e){
        e.preventDefault();     
        if (checked && email){
            try {
                const resend = new Resend("re_Jfj7GyeA_L9kY8pzfZ8drMLFcsGp54dsW");
                await resend.emails.send({
                    from: 'Hasan <hasanabdirahman1999@gmail.com>',
                    to: [email],
                    subject: 'Hello World',
                    // react: <Email url="https://example.com" />,
                    html: '<strong>It works!</strong>'
                });
                console.log('Email sent successfully');
            } catch (error) {
                console.error('Error sending email:', error);
            }
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
            <input type="checkbox" id="emailCheckbox" name="email" checked={checked} onChange={handleChecked}></input>
            </div>

           <div>
            <button type='submit' style={{backgroundColor: 'black', color: 'white', marginTop: '0.6rem'}} >Submit</button>
           </div>
        </form>
    )
}
