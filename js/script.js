window.addEventListener("load", ()=>{
  iniciarReproductor();
});


let caratula, caratulaDOM, idFrame, 
  mode = 'claro',
  reproduciendo = 0,
  listadoCanciones = [
    "Chapeleiro-MambaNegra",
    "FantomenK-CrystalTokyo",
    "JackU-ToU",
    "LemKuuja-Yelena",
    "MacklemoreRyanLewis-ThriftShop",
    "LilNasX-INDUSTRYBABY",
    "Knaan-BangBang",
    "JamieBerry-LightuptheNight",
    "Deadmau5-GhostsNStuff",
    "CarolinaGaitan-WeDontTalkAboutBruno",
    "CardiB-LikeIt-DillonFrancisRemix",
    "Acraze-DoItToIt-TiestoRemix",
  ],
  listadoArtistas = [
    "Chapeleiro", 
    "Fantomenk", 
    "Jack U", 
    "LemKuuja",
    "Macklemore & Ryan Lewis",
    "LilNasX",
    "K'naan",
    "JamieBerry",
    "Deadmau5",
    "CarolinaGaitan",
    "CardiB - Dillon Francis",
    "Acraze - Tiesto"

  ],
  listadoTitulos = [
    "Mamba Negra", 
    "Crystal Tokyo", 
    "To U", 
    "Yelena",
    "Thrift Shop",
    "INDUSTRYBABY",
    "Bang Bang",
    "Light up the Night",
    "Ghosts 'N' Stuff",
    "We Don't Talk About Bruno",
    "Like It(Dillon Francis Remix)",
    "Do It To It(Tiesto Remix)"
  ],
  listadoVariables = [
    '--background',
    '--shadowlight',
    '--shadowdark',
    '--color',
    '--title',
    '--slider',
    '--play',
    '--playShadowDark',
    '--playShadowLight',
    '--playActiveDark',
    '--playActiveLight',
    '--song',
  ],
  cancion = {
    audio: new Audio(),
    URL: "",
    caratula: "",
    duracion: "",
  },
  reproductor = {
    deslizador: [],
    boton: [],
    caratula: [],
    duracionStart: "",
    duracionEnd: "",
    nodo: "",
  }
  urls = {
    musica: "src/audio/", 
    caratula: "src/images/" 
  }
  temas = {
    claro: ['#e0e5ec', '#ebf0f8', '#d5dae0', '#797d7f', '#a1a1a1', '#d7dbdd', '#5c87fe', '#4b6fd0','#6d9fff', '#314887', '#87c6ff','#000000'],
    oscuro: [ '#16001E', ' #1f002b', '#0d0011', '#F7B2B7', '#7e518f', '#2a0d35', '#7F2982', '#4a184b', '#b43ab9', '#4a184b', '#b43ab9', '#d584d8',],
  }



function iniciarReproductor() {
  reproductor.boton["reproducirPausa"] = document.getElementById("play");
  reproductor.boton["cancionSiguiente"] = document.getElementById("siguiente");
  reproductor.boton["cancionAnterior"] = document.getElementById("anterior");
  reproductor.boton["playlist"]= document.getElementById("playlist");
  reproductor.boton["closePlaylist"] = document.getElementById("close")
  reproductor.boton["selectorTema"] = document.getElementById("switch");
  reproductor.deslizador["progresoCancion"] = document.getElementById("inputRange");
  const musicList = document.querySelector(".music-list");

  reproductor.caratula = document.querySelector(".player_album img");
  reproductor.duracionStart = document.querySelector(".start time");
  reproductor.duracionEnd = document.querySelector(".end time");
  reproductor.nodo = document.querySelector(".player");


  reproductor.boton["reproducirPausa"].addEventListener("click", alternarReproduccion);
  reproductor.boton["cancionSiguiente"].addEventListener("click", () => cargarCancion(1));
  reproductor.boton["cancionAnterior"].addEventListener("click", () => cargarCancion(-1));
  reproductor.boton["selectorTema"].addEventListener("click", switchTema);
  reproductor.deslizador["progresoCancion"].addEventListener("input", moverProgreso);
  reproductor.boton["playlist"].addEventListener("click", ()=>{
    musicList.classList.toggle("show");
  });
  reproductor.boton["closePlaylist"].addEventListener("click", ()=>{
      reproductor.boton["playlist"].click();
  });

  // esto a continuacion pausa o reanuda la cancion si se presiona la tecla espacio
  document.getElementById("html").addEventListener('keypress', function (e) {
    e.preventDefault();
    if(e.keyCode == 32 || e.code == "Space") {
      alternarReproduccion();
    }
  });
  reproduciendo = Math.floor((Math.random() * listadoCanciones.length));
  listPlaying();
  cargarCancion(0);
}

const ulTag = document.querySelector("ul");
for (let i = 0; i < listadoCanciones.length; i++) {
  let liTag= `<li li-index="${i}">
                <div class="row">
                  <span>${listadoTitulos[i]}</span>
                  <p>${listadoArtistas[i]}</p>
                </div>
                <span id="${listadoCanciones[i]}" class="duracion-span">3:40</span>
                <audio class="${listadoCanciones[i]}" src="${ urls["musica"] + listadoCanciones[i] }.mp3"></audio>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);

  let liAudioDuartionTag = ulTag.querySelector(`#${listadoCanciones[i]}`);
  let liAudioTag = ulTag.querySelector(`.${listadoCanciones[i]}`);
  liAudioTag.addEventListener("loadeddata", ()=>{
    let duration = duracionCancion(liAudioTag.duration);
    
    liAudioDuartionTag.innerText = `${duration.minutos}:${duration.segundos}`;
    liAudioDuartionTag.setAttribute("t-duration", `${duration.minutos}:${duration.segundos}`); //adding t-duration attribute with total duration value
  });
}

  const allLiTag = ulTag.querySelectorAll("li");
//-------------- funciones:-------------------//

function listPlaying(){
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".duracion-span");
    
    if(allLiTag[j].classList.contains("playing")){
      allLiTag[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }

    if(allLiTag[j].getAttribute("li-index") == reproduciendo){
      allLiTag[j].classList.add("playing");
      audioTag.innerText = "Playing";
    }
    allLiTag[j].setAttribute("onclick", "clicked(this);");
  }
  
}

function clicked(element){
  let getLiIndex = parseInt(element.getAttribute("li-index"));
  reproduciendo = getLiIndex; //updating current song index with clicked li index
  cargarCancion(0);
  listPlaying();

}


function moverProgreso(e) {
  let momento = e.target.value;
  cancion.audio.currentTime = momento;
}
function switchTema() {
  let root = document.documentElement;

  if (mode=='claro'){
    for (let index = 0; index < listadoVariables.length; index++) {
      const element = listadoVariables[index];
      const colorDark = temas.oscuro[index];
      root.style.setProperty(element, colorDark);
    } mode='oscuro';
  } else{
    for (let index = 0; index < listadoVariables.length; index++) {
      const element = listadoVariables[index];
      const colorLight = temas.claro[index];
      root.style.setProperty(element, colorLight);
    }
    mode='claro';
  }
}

function cargarCancion(sentido) {
  let cambiarA = reproduciendo + sentido;

  if (cambiarA >= listadoCanciones.length) reproduciendo = 0;
  else if (cambiarA < 0) reproduciendo = listadoCanciones.length - 1;
  else reproduciendo = cambiarA;

  cancion.URL = urls.musica + listadoCanciones[reproduciendo] + ".mp3";
  cancion.caratula = urls.caratula + listadoCanciones[reproduciendo] + ".jpg";
  cancion.audio.src = cancion.URL;
  document.title =
    "F Music Player " + listadoTitulos[reproduciendo] + " - " + listadoArtistas[reproduciendo];

  reproductor.caratula.src = cancion.caratula;
  reproductor.deslizador["progresoCancion"].value = 0;
  listPlaying();
  setTimeout(() => cambiarCancion(), 500);

}

function cambiarCancion() {
  cancion.duracion = duracionCancion(cancion.audio.duration);
  reproductor.deslizador["progresoCancion"].max = cancion.audio.duration;

  document.querySelector(".player_artist").innerText =
    listadoArtistas[reproduciendo];
  document.querySelector(".player_song").innerText =
    listadoTitulos[reproduciendo];

  reproductor.duracionEnd.innerText = `${cancion.duracion.minutos}:${cancion.duracion.segundos}`;
  

  if (reproductor.boton["reproducirPausa"].classList.contains(".En_play"))
    cancion.audio.play();
}

function duracionCancion(duracionS) {
  let minutos, segundos;
  minutos = Math.floor(duracionS / 60)
    .toString()
    .padStart(2, "0");
  segundos = Math.floor(duracionS - minutos * 60)
    .toString()
    .padStart(2, "0");

  return { minutos, segundos };
}

function actualizarReproductor() {
  idFrame = requestAnimationFrame(actualizarReproductor);
  cancion.duracion = duracionCancion(cancion.audio.duration);
  let momentoActual = duracionCancion(cancion.audio.currentTime);
  reproductor.duracionStart.innerText = `${momentoActual.minutos}:${momentoActual.segundos}`;
  reproductor.duracionEnd.innerText = `${cancion.duracion.minutos}:${cancion.duracion.segundos}`;
  reproductor.deslizador["progresoCancion"].value = cancion.audio.currentTime;
  reproductor.deslizador["progresoCancion"].max = cancion.audio.duration;

  if (cancion.audio.currentTime == cancion.audio.duration) cargarCancion(1);
}

function alternarReproduccion() {
  reproductor.boton["reproducirPausa"].classList.toggle(".En_play");

  

  if (cancion.audio.paused || cancion.audio.ended) {
    idFrame = requestAnimationFrame(actualizarReproductor);
    reproductor.boton["reproducirPausa"].querySelector(".pause-btn").classList.toggle("hide");
    reproductor.boton["reproducirPausa"].querySelector(".play-btn").classList.toggle("hide");
    cancion.audio.play();
    reproductor.nodo.classList.add("reproduciendo");
  } else {
    window.cancelAnimationFrame(idFrame);
    cancion.audio.pause();
    reproductor.boton["reproducirPausa"].querySelector(".pause-btn").classList.toggle("hide");
    reproductor.boton["reproducirPausa"].querySelector(".play-btn").classList.toggle("hide");
    reproductor.nodo.classList.remove("reproduciendo");
  }
}
