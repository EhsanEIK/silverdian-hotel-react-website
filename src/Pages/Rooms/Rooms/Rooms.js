import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../../Shared/Cart/Cart/Cart';
import Room from '../Room/Room';

const Rooms = () => {
    const rooms = useLoaderData();

    return (
        <div className='grid grid-cols-5 gap-5'>
            <div className='col-span-4'>
                <h1 className='text-5xl font-bold text-center mb-10'>Total Rooms: {rooms.length}</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 md:m-0 m-5 gap-10'>
                    {
                        rooms.map(room => <Room key={room.id} room={room}></Room>)
                    }
                </div>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Rooms;