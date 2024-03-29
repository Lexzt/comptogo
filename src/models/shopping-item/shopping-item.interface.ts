export interface ShoppingItem {
    $key?: string,
    name: string;
    description: string;
    sports: string;
    location: string;
    price: number;
    rank_min: number;
    rank_max: number;
    date: string;
    time: string,
    noOfHours: number;
    noOfParticipants: number;
    prize: number;
    cancellation_time: string;
    thumb: "assets/img/trip/thumb/trip_1.jpg";
    images: [
        "assets/img/trip/thumb/trip_2.jpg",
        "assets/img/trip/thumb/trip_3.jpg",
        "assets/img/trip/thumb/trip_4.jpg",
        "assets/img/trip/thumb/trip_5.jpg"
    ];
    highlights: string[];
}