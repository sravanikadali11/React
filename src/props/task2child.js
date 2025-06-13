import React from "react";

import "./task2.css"

function EventCard({ title, date, location, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
    </div>
  );
}

export default EventCard;
