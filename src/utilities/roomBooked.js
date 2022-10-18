export const roomBooked = async (id) => {
    const roomsData = await fetch('https://mocki.io/v1/4bc4df99-72bb-40f3-bc99-3c5df8ac6936');
    const rooms = await roomsData.json();

    const bookingRoom = rooms.find(room => room.id === id);

    return { bookingRoom };
}