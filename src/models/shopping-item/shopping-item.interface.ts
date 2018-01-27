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
    noOfParticipants: string;
    prize: number;
    cancellation_time: string;
    thumb: "assets/img/trip/thumb/badminton.png";
    images: [
        "assets/img/trip/thumb/badminton2.jpg",
        "assets/img/trip/thumb/badminton3.jpg",
        "assets/img/trip/thumb/badminton4.jpg",
        "assets/img/trip/thumb/badminton5.jpg"
    ];
    highlights: [
        "Round robin"
    ];
}