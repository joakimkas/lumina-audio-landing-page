# MDU-F26A 1. semester eksamen
### Joakim Høholt Kaspersen

## Generelt om projektet
Projektet er en forbedring af semestrets første case, der gik ud på at designe og udvikle en landingpage for LUMINA One, en bærbar Bluetooth-højttaler fra det fiktive brand LUMINA Audio.


## Fil- og mappestruktur

![Mappestruktur](/img/mappestruktur.png)

På billedet ovenfor ses min landing page's mappestruktur

I "css"-mappen ligger mit style.css dokument, der indeholder sidens styling.

I "img"-mappen ligger alle de billeder der vises på siden.

I "js"-mappen ligger mit JavaScript dokument.

Udenfor mapperne ligger mit HTML-dokument "index.html" og denne README.md-fil.

## Tilføjelse af JavaScript til landingpagen

I min forbedring af Lumina-casen har jeg tilføjet JavaScript til koden.

Dette forbedrerer siden disse steder:

- En review-liste der henter sin data fra et array med objekter og properties. Dette gør review-listen nemmere at opdatere, og tilføje til.
- Interaktiv farve-selektion der gør det muligt for brugeren at trykke og skifte højtalerens farve.
- En "Tilmeld dig" knap der ændrer sig til en "Tilmeldt" knap efter tryk, og dermed lader brugeren vide at de har tilmeldt sig nyhedsbrevet.

### 1. Data: anmeldelser

```
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

```

Her ligger anmeldelser i et array af objekter som hver har 5 properties:

- name (navnet på personen der har skrevet anmeldelsen) 
- date (datoen anmeldelsen er blevet skrevet)
- rating (det antal stjerner personen har givet produktet)
- title (titlen på anmeldelsen)
- text (selve anmeldelsens tekst)

### 2. Hente HTML-elementer

```
const reviewList = document.querySelector("#review-list");
const speakerImage = document.querySelector("#speaker-image");
const colors = document.querySelectorAll(".color");
const button = document.getElementById("tilmeld-button");
```
Her henter jeg de elementer i DOM'en jeg skal manipulere med JS.

- reviewList - der hvor anmeldelser skal vises på siden
- speakerImage - billedet af højtaleren der skiftes
- colors - farve-knapperne man skal kunne klikke på
- button - "tilmeld dig"-knappen

### 3. Anmeldelse-funktioner
```
function showReviews() {
  reviewList.innerHTML = "";

  for (const review of reviews) {
    showReview(review);
  }
}
```
Denne funktion sletter hvad end gammel HTML, der skulle være der. Derefter løber den alle anmeldelser igennem og viser dem én ad gangen.

```
function showReview(review) {

  const html = /* html */ `
    <article class="review-card">
      <div class="review-info">
        <h2>${review.name}</h2>
        <div class="date-rating">
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
```
Denne indsætter vores data fra vores array ind i en HTML-skabelon, med class ="review-card", og indsætter dem til sidst i dokumentet.

Skabelonen "review-card" er stylet i CSS.

### 4. Skift farve på højtaler
```
colors.forEach(color => {
  color.addEventListener("click", () => {
```
1. Når man klikker på en af farve-knapperne
```
colors.forEach(c => c.classList.remove("pressed"));
```
2. Bliver class "pressed" fjernet fra alle
```
color.classList.add("pressed");
```
3. Den farve-knap der er valgt bliver stylet med class "pressed"
```
speakerImage.src = `/img/speaker-${selectedColor}.png`;
```
4. Og billedet bliver skiftet til det billede der har den tilhørende farve i navnet.

### 5. "Tilmeld dig"-knap
```
button.addEventListener("click", () => {
    button.textContent = "Tilmeldt ✓";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
});
```
Event-listener "lytter" efter klik på knappen, og skifter dens tekst og farve når der klikkes.

## Validering

### Validering af CSS

![CSS validering](/img/css-validering.png) 

Ingen fejl fundet.

### Validering af HTML
Da jeg først validerede min HTML fik jeg fejl som dette

![HTML validering med feæ](/img/html-errors.png) 

Fejlene er id-attributter i mit HTML-dokument, der bliver gentaget. For at fikse dette lavede jeg dem om til class-attributter, og validerede igen uden fejl:

![HTML validering med feæ](/img/html-validering.png)