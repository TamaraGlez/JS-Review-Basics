const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
// creamos esta constante para almacenar los datos de recorrer el el elemento del array categorias
const movieCategories = [];
// creamos un for que itere dentro de movies, y un segundo for que entre e itere dentro de categories
for (let movie of movies) {
  for (let category of movie.categories) {
    // si lo que guardamos en movieCategories no está dentro de category
    if (!movieCategories.includes(category)) {
    // si no está lo metemos en movieCategories
      movieCategories.push(category);
    }
  }
}
console.log(movieCategories);