import React from "react";
import EventCard from "./task2child"; // Import the child component

function EventList() {
  const events = [
    {
      id: 1,
      title: "Community Clean-Up Drive",
      date: "June 8, 2025",
      location: "Central Park",
      description: "Join us to help clean and beautify our neighborhood park.",
    },
    {
      id: 2,
      title: "Yoga & Wellness Session",
      date: "June 10, 2025",
      location: "Clubhouse Hall",
      description: "Relax and recharge with our guided community yoga session.",
    },
  ];

  return (
    <div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          description={event.description}
        />
      ))}
    </div>
  );
}

export default EventList;
