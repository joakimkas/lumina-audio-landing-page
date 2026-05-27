"use strict";

console.log("Review sektion starter...");

const reviews = [
    {
    name: "Sille Klysner Kjems",
    date: "3. maj 2025",
    rating: "⭐⭐⭐⭐⭐",
    title: "Multi-parring er et kæmpe plus",
    text: "Vi parrede flere LUMINA One til en fødselsdag, og det lød som én stor højttaler i hele lejligheden. Det gav virkelig “event”-følelse uden at man skulle skrue sindssygt højt op. Mega fedt til både stue, køkken og altan."
  },
    {
    name: "Peter Lundkvist",
    date: "20. april 2026",
    rating: "⭐⭐⭐⭐",
    title: "Batteriet holder længe",
    text: "Jeg tog den med på weekendtur og brugte den i timevis uden at tænke på opladning. USB-C er så nice, fordi man kan bruge samme oplader som til alt andet. Den føles solid og premium, men stadig let nok at tage med rundt."
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
        <h2>${review.name}</h2>
        <div id="date-rating">
        <p>Rating: ${review.rating}</p>
        <p>Dato: ${review.date}</p>
        </div>
        <h3>${review.title}</h3>
        <p>${review.text}</p>
      </div>
    </article>
  `;

  reviewList.insertAdjacentHTML("beforeend", html);
}