export interface ShoppingItem {
    $key?: string,
    name: string;
    description: string;
    sports: string;
    location: string;
    price: number;
    rank_min: number;
    rank_max: number;
    date: number;
    time: number,
    noOfHours: number;
    noOfParticipants: string;
    prize: number;
    cancellation_time: string;
    thumb: "assets/img/trip/thumb/trip_1.jpg";
    images: [
        "assets/img/trip/thumb/trip_5.jpg",
        "assets/img/trip/thumb/trip_6.jpg",
        "assets/img/trip/thumb/trip_7.jpg",
        "assets/img/trip/thumb/trip_8.jpg"
    ];
    highlights: [
        "Round robin"
    ];
}