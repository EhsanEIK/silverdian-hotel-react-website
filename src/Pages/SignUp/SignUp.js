import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSubmitRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                form.reset();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp!</h1>
                </div>
                <form onSubmit={handleSubmitRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label htmlFor='name' className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' id='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                                <p className="label-text-alt link link-hover">Already have an account?
                                    <Link to='/login'> Login</Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;