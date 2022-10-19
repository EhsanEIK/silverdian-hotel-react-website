import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookedRoom = () => {
    const bookedRoom = useLoaderData();
    const { img, name, price, person, bed } = bookedRoom;

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-10'>The Room is Booked:  {name}</h1>
            <div className='flex justify-center mx-5 mb-10'>
                <div className="card w-auto glass">
                    <figure><img src={img} alt={name} className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>Price: {price}</p>
                        <p>Person: {person}</p>
                        <p>Bed: {bed}</p>
                        <div className="card-actions mt-2">
                            <button onClick={() => alert('Congratzz! You booked the room!')} className="btn btn-primary w-full">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedRoom;