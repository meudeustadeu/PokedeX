var i = setInterval(function () {
  clearInterval(i);

  // O código desejado é apenas isto:
  document.getElementById("loading").style.display = "none";
  document.getElementById("conteudo").style.visibility = "";
  var audio = new Audio("../assets/sounds/Opening_Fanfare_Pokémon_GO_OST.mp3");
  audio.play();
}, 3000);


//////////////////////////////////////////////////////////////////////////

let inputvalue = document.querySelector("#inputid");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  loadapi(inputvalue.value);
});


//////////////////////////////////////////////////////////////

document.querySelector("button").addEventListener("click", () => {
  var btn_sound = new Audio("../assets/sounds/Pokemon_A_Button_Sound_Effect_HD_.mp3")
  btn_sound.play()
let inputvalue = document.querySelector("#add-card");
  loadapi(inputvalue.value);
});

//////////////////////////////////
function loadapi(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //oq irá fazer com os dados em formato .json
      // console.clear();
      console.log(data);

      document.getElementById("poke_name").innerText = data["name"];
      document.getElementById("poke_number").innerText = data["id"];
      let img =
        data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
          "front_default"
        ];
      document.getElementById("img").setAttribute("src", img);
    });
}

