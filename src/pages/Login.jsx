import React, {useRef} from 'react';
import '../styles/Login.css';

const Login = () => {
    const form = useRef(null);
    function handleSingUp(event) {
        const formData = new FormData(form.current);
        const data ={
            userName: formData.get('userName'),
            email: formData.get('email'),
           // securityPassword: formData.get('securityPassword')
        }

        console.log('data from handle singup', data);
    }

    function handleLogin(event) {
        const formData = new FormData(form.current);
        const data ={
            userName: formData.get('userName'),
            email: formData.get('email'),
            //securityPassword: formData.get('securityPassword')
        }

        console.log('data from handle Login', data);
    }

    return (
        <section className='Login'>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form action="/" ref={form}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" id="userName" name="userName" placeholder="ID" required="" />
                        <input type="email" id="email" name="email" placeholder="Email" required="" />
                        
                        <button type='button' onClick={(event)=>{handleSingUp(event)}}>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form >
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button type='button' onClick={(event)=>{handleLogin(event)}}>Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;