const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const image = document.createElement("img");
  image.src =
    "https://img.freepik.com/fotos-gratis/garcom-feliz-segurando-pratos-com-comida-e-olhando-para-a-camera-enquanto-serve-convidados-em-um-restaurante_637285-1707.jpg?w=1380&t=st=1687290030~exp=1687290630~hmac=8047a6d7a7d9b50fe538310bea6b18f03ca846bfab51491a0b31f4fe565d7ef1";
  image.height = "300";
  pageContent.appendChild(image);

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to our restaurant!";
  pageContent.appendChild(headline);

  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in town.";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
