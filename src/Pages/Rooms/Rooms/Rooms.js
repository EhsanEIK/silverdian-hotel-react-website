import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Room from '../Room/Room';

const Rooms = () => {
    const rooms = useLoaderData();

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-10'>Total Rooms: {rooms.length}</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    rooms.map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;