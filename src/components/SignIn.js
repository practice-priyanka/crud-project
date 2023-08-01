import { useState } from 'react';
import '../css/SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        console.log("clicked");
        e.preventDefault();
        alert(`The name you entered was: ${email}`)
    }
    return (
        <>
            <form  onSubmit={handleSubmit}>
                <div className="main_div">

                    <div className='sub_div'>
                        <img className="img_head text-center" src="/images/logo.png" alt="logo" />
                        <h2 className='text-center'>Sign In</h2>
                        <input type='email' placeholder='Enter your email' className='input_box mb-3' value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }} required />
                        <button type="submit" className="login_btn btn btn-primary">login</button>
                    </div>

                </div>
            </form>
        </>
    )
};

export default SignIn;