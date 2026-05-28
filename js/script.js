"use strict";

console.log("Review sektion starter...");

const reviews = [
    {
    name: "Sille Kjems",
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

    {
    name: "Camille Jakobsen",
    date: "28. januar 2026",
    rating: "⭐⭐⭐⭐⭐",
    title: "Nemt at tage med",
    text: "Den er super nem at bære i håndtaget og føles ikke klodset, selv når man går et stykke. Vi brugte den i parken, og den kunne sagtens overdøve snak uden at blive “for meget”. Batteriet holdt hele dagen uden stress."
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

const speakerImage = document.querySelector("#speaker-image");
const colors = document.querySelectorAll(".color");

colors.forEach(color => {
  color.addEventListener("click", () => {

    const selectedColor = color.id;

    colors.forEach(c => c.classList.remove("pressed"));

    color.classList.add("pressed");


    speakerImage.src = `/img/speaker-${selectedColor}.png`;
    speakerImage.alt = `speaker ${selectedColor}`;

  });
});