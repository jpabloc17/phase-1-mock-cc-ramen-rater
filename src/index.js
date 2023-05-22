// write your code here
fetch("http://localhost:3000/ramens")
  .then((resp) => resp.json())
  .then(
    (ramen) => (
      ramen.forEach((item) => {
        ramenPicture(item);
      }),
      displayImage(ramen[0]),
      createNewRamen(ramen)
    )
  );

function ramenPicture(ramen) {
  const div = document.getElementById("ramen-menu");
  const img = document.createElement("img");
  img.src = ramen.image;
  div.appendChild(img);
  img.addEventListener("click", () => {
    displayImage(ramen);
  });
}

function displayImage(ramen) {
  const img = (document.querySelector("img.detail-image").src = ramen.image);
  const ramenName = (document.querySelector("h2.name").textContent =
    ramen.name);
  const restaurantName = (document.querySelector("h3.restaurant").textContent =
    ramen.restaurant);
  const ratingRamen = (document.querySelector(
    "span#rating-display"
  ).textContent = ramen.rating);
  const comentRamen = (document.querySelector("p#comment-display").textContent =
    ramen.comment);
}

function createNewRamen(ramen) {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // const formData = Object.fromEntries(new FormData(event.target));
    const formData = {
      name: event.target.name.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      rating: event.target.rating.value,
      comment: event.target["new-comment"].value,
    };
    ramenPicture(formData);
    displayImage(formData);
    form.reset();
  });
}
