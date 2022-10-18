import React from 'react';

const Room = ({ room }) => {
    const { id, img, name, price, person, bed } = room;
    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt={name} className='h-52 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Person: {person}</p>
                <p>Bed: {bed}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Room;