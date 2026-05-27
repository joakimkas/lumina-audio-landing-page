"use strict";

console.log("Review sektion starter...");

const reviews = [
    {
    name: "Sille Klysner Kjems",
    date: "maj 2025",
    rating: 5,
    title: "Multi-parring er et kæmpe plus",
    text: "Vi parrede flere LUMINA One til en fødselsdag, og det lød som én stor højttaler i hele lejligheden. Det gav virkelig “event”-følelse uden at man skulle skrue sindssygt højt op. Mega fedt til både stue, køkken og altan."
  },
]

const reviewList = document.querySelector("#review-list");

showReviews();

function showReviews() {
  reviewList.innerHTML = "";

  for (const review of reviews) {
    showReview(review);
  }
}

function showReview(review) {

  const html = /* html */ `
    <article class="review-card">
      <div class="review-info">
        <h3>${review.name}</h3>
        <p>Dato: ${review.date}</p>
        <p>Rating: ${review.rating}</p>
        <h3>${review.title}</h3>
        <p>${review.text}</p>
      </div>
    </article>
  `;

  reviewList.insertAdjacentHTML("beforeend", html);
}