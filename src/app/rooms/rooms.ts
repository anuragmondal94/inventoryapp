export interface Room {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenites: string;
    price: number;
    photos: string;
    checkInTIme: Date;
    checkoutTime: Date;
}