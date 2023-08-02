import { useState } from 'react';
import '../css/SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const navTo = useNavigate();
    const handleSubmit = (e) => {
        console.log("clicked");
        e.preventDefault();
        localStorage.setItem("email", email);
        navTo("/home");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="main_div">
                    <div className='sub_div'>
                        <img className="img_head text-center mb-3 mt-3" src="/images/logo.png" alt="logo" />
                        <h2 className="fw-bold mb-3 text-uppercase">LOGIN</h2>
                        <p className="text-black-50 mb-3">Please enter your email</p>
                        <input type='email' placeholder='Email' className='input_box mb-3' value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }} required />
                        <button type="submit" className='btn btn-primary mb-3 text-uppercase'>sign in</button>
                    </div>
                </div>
            </form>
        </>
    )
};

export default SignIn;