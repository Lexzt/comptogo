export let TRIPS = [
  {
    id: 1,
    name: "Weekly Badminton Tournament",
    sport: "Badminton",
    price: 5,             // In dollars
    location: "Bedok Community Club",
    date: 1518598800,     // In epoch
    description: "Weekly badminton tournaments for rank 3 - 7!",
    rank_min: 3,      
    rank_max: 7,
    time: "7d",
    cancellation_time: "7d", // In days
    expected_time: "6h",     // In hours
    prize: 300,
    thumb: "assets/img/trip/thumb/badminton.png",
    images: [
      "assets/img/trip/thumb/badminton2.jpg",
      "assets/img/trip/thumb/badminton3.jpg",
      "assets/img/trip/thumb/badminton4.jpg",
      "assets/img/trip/thumb/badminton5.jpg",
    ],
    highlights: [
      "Round robin",
    ]
  },
  {
    id: 2,
    name: "Weekly Basketball Tournament",
    sport: "Basketball",
    price: 0,             // In dollars
    location: "Bedok Community Club",
    date: 1518628800,     // In epoch
    description: "Weekly basketball tournaments for rank 1 - 4!",
    rank_min: 1,
    rank_max: 4,
    time: "7d",
    cancellation_time: "7d", // In days
    expected_time: "6h",     // In hours
    prize: 0,
    thumb: "assets/img/trip/thumb/bball1.jpg",
    images: [
      "assets/img/trip/thumb/bball2.jpg",
      "assets/img/trip/thumb/bball3.jpg",
      "assets/img/trip/thumb/bball4.jpg",
      "assets/img/trip/thumb/bball5.jpg",
    ],
    highlights: [
      "Round robin",
    ]
  },
]
