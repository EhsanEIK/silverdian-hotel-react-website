import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state.from.pathname || '/';

    const handleSubmitLogin = event => {
        event.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');

        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                setSuccessMsg("Login Successfully.")
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login!</h1>
                    <p className='text-green-800'>{successMsg}</p>
                    <p className='text-red-800'>{errorMsg}</p>
                </div>
                <form onSubmit={handleSubmitLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label htmlFor='email' className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' id='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label htmlFor='password' className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' id='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt link link-hover">Don't have an account?
                                    <Link to='/signup'> Sign Up</Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;