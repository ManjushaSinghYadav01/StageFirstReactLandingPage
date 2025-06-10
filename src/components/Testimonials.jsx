import React from "react";
import "../Styles/Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Mahendra", feedback: "Saved 100 last month using this app!" },
    { id: 2, name: "Khushi", feedback: "Best deals, easy to use!" },
    { id: 3, name: "popatlal", feedback: "Best deals" }

  ];

  return (
    <section className="testimonials">
      <h2>What Users Say</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.name}</strong>: "{review.feedback}"
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;