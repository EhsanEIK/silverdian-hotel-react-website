import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login!</h1>
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                    <Link> Sign Up</Link>
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