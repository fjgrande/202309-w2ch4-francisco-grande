const formElement = document.querySelector(".form-data");
const nameInputElement = formElement.querySelector("#name");
const birthdateInputElement = formElement.querySelector("#birthdate");
const pictureInputElement = formElement.querySelector("#picture");
const javascriptInputElement = formElement.querySelector("#javascript");
const sufferingInputElement = formElement.querySelector("#suffering");

setName = (name) => {
  document.querySelector("h2").classList.remove("off");
  document.querySelector(".name").textContent = name;
  document.querySelector("img").setAttribute("alt", name);
};

formElement.addEventListener("change", (event) => {
  switch (event.target) {
    case nameInputElement:
      setName(event.target.value);
      // Invoca a la función para poner el nombre
      break;
    case birthdateInputElement:
      // Invoca a la función para poner la edad
      break;
    case pictureInputElement:
      // Invoca a la función para poner la imagen
      break;
    case javascriptInputElement:
      // Invoca a la función para poner si ha programado previamente JS o no
      break;
    case sufferingInputElement:
      // Invoca a la función para poner el grado de sufrimiento
      break;
  }
});
