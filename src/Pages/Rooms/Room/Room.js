import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const { id, img, name, price, person, bed } = room;
    return (
        <div className="card w-auto glass">
            <figure><img src={img} alt={name} className='h-52 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Person: {person}</p>
                <p>Bed: {bed}</p>
                <div className="card-actions justify-end">
                    <Link to={`/room/${id}`}>
                        <button className="btn btn-primary">BOOK NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Room;