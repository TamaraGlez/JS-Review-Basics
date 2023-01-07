// no entiendo por qué no me lee la cantidad de sound con length
// y por qué se hace con cont ++;

const users = [
    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

let suma = 0;
let cont = 0;

for (const user of users) {
    for (const key in user.favoritesSounds) {
        const sound = user.favoritesSounds[key]
        // console.log(key)
        suma += sound.volume
        cont ++;
        // let elementoVolume = sound.volume
        // // console.log(suma)
        // cont = elementoVolume.length
        }
    }
    console.log(suma/cont); 