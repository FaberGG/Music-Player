window.addEventListener("load", () => {
  iniciarReproductor();
});
const jsmediatags = window.jsmediatags;

let caratula,
  caratulaDOM,
  idFrame,
  allTextLines = " ",
  lyrics = [],
  llave = [],
  tim = [],
  line = " ",
  mode = "claro",
  reproduciendo = 0,
  //  aqui estan los nombres de los archivos mp3 y jpg de las canciones, pueden añadirse mas respetando el index de estos ;)
  listadoCanciones = [
    "Chapeleiro-MambaNegra",
    "LemKuuja-Yelena",
    "MacklemoreRyanLewis-ThriftShop",
  ],
  listadoArtistas = ["Chapeleiro", "LemKuuja", "Macklemore & Ryan Lewis"],
  listadoTitulos = ["Mamba Negra", "Yelena", "Thrift Shop"],
  // aqui estan las letras de archivos .lrc convertidos a strings
  listadoLetras = [
    "[01:19.68]I don't know what's so fucking funny\r\n[01:33.71]I don't know what's so fucking funny\r\n[03:20.73]His biggest power is probably deception getting you to believe-lieve-lieve-lieve\r\n[03:50.83](Biggest power is probably decep')\r\n",
    "",
    "[00:00.24]Hey Macklemore? can we go thrift shopping?\r\n[00:03.25]What, what, what, what\r\n[00:05.77]What, what, what, what\r\n[00:08.00]What, what, what, what\r\n[00:10.76]What, what, what, what\r\n[00:13.02]What, what, what, what\r\n[00:15.51]What, what, what, what\r\n[00:18.51]What, what, what, what\r\n[00:20.91]What, what, what, what\r\n[00:33.64]I'm gonna pop some tags\r\n[00:35.40]Only got twenty dollars in my pocket\r\n[00:38.65]I, I, I'm hunting, looking for a come-up\r\n[00:41.15]This is fucking awesome\r\n[00:43.65]Nah walk up to the club like, what up, I got a big cock!\r\n[00:46.42]I'm just pumped, just bought some shit from the thrift shop\r\n[00:48.92]Ice on the fringe, it's so damn frosty\r\n[00:51.43]The people like, Damn! That's a cold ass honkey.\r\n[00:53.94]Rollin' in, hella deep, headin' to the mezzanine\r\n[00:56.40]Dressed in all pink, 'cept my gator shoes, those are green\r\n[00:58.68]Draped in a leopard mink, girls standin' next to me\r\n[01:01.40]Probably shoulda washed this, smells like R. Kelly's sheets\r\n[01:04.68](Piss)\r\n[01:06.74]But shit, it was ninety-nine cents! (Bag it) Coppin' it, washin' it\r\n[01:09.94]'Bout to go and get some compliments\r\n[01:11.43]Passin' up on those moccasins someone else's been walkin' in them\r\n[01:13.46]Bummy and grungy, fuck it man, I am stuntin' and flossin' and\r\n[01:16.27]And savin' my money and I'm hella happy that's a bargain, bitch\r\n[01:19.39]I'ma take your grandpa's style, I'ma take your grandpa's style\r\n[01:21.54]No for real ask your grandpa can I have his hand-me-downs?\r\n[01:24.32](Thank you) Velour jumpsuit and some house slippers\r\n[01:26.79]Dookie brown leather jacket that I found diggin'\r\n[01:29.37]They had a broken keyboard, I bought a broken keyboard\r\n[01:31.63]I bought a skeet blanket, and then I bought a kneeboard\r\n[01:33.86]Hello, hello, my ace man, my Miller\r\n[01:36.88]John Wayne ain’t got nothing on my fringe game, hell no\r\n[01:39.41]I could take some Pro Wings, make them cool, sell those\r\n[01:41.87]The sneaker heads would be like Aw, he got the Velcros\r\n[01:44.38]I'm gonna pop some tags\r\n[01:46.37]Only got twenty dollars in my pocket\r\n[01:49.35]I, I, I'm hunting, looking for a come-up\r\n[01:51.86]This is fucking awesome\r\n[01:54.39]I'm gonna pop some tags\r\n[01:56.14]Only got twenty dollars in my pocket\r\n[01:59.37]I, I, I'm hunting, looking for a come-up\r\n[02:02.13]This is fucking awesome\r\n[02:04.34]What you know about rockin' a wolf on your noggin?\r\n[02:07.08]What you knowin' about wearin' a fur fox skin?\r\n[02:09.58]I'm digging, I'm digging, I'm searching right through that luggage\r\n[02:11.86]One man's trash, that's another man's come up\r\n[02:14.57]Thank your granddad for donating that plaid button-up shirt\r\n[02:17.37]'Cause right now I'm up in her skirt\r\n[02:19.87]I'm at the Goodwill, you can find me in the (Uptons)\r\n[02:22.63]I'm that, I'm that sucker searchin' in that section (Uptons)\r\n[02:24.86]Your grammy, your aunty, your momma, your mammy\r\n[02:26.87]I’ll take those flannel zebra jammies, second-hand, I rock that motherfucker\r\n[02:29.88]The built-in onesie with the socks on that motherfucker\r\n[02:32.37]I hit the party and they stop in that motherfucker\r\n[02:34.87]They be like, Oh, that Gucci. That's hella tight\r\n[02:37.36]I'm like, Yo that's fifty dollars for a T-shirt\r\n[02:40.12]Limited edition, let's do some simple addition\r\n[02:42.23]Fifty dollars for a T-shirt, that's just some ignorant bitch (Shit)\r\n[02:45.23]I call that getting swindled and pimped (Shit)\r\n[02:47.62]I call that getting tricked by a business\r\n[02:50.35]That shirt's hella dope\r\n[02:51.74]And having the same one as six other people in this club is a hella don't\r\n[02:55.27]Peep game, come take a look through my telescope\r\n[02:57.69]Trying to get girls from a brand? Then you hella won't\r\n[03:01.44]Then you hella won't\r\n[03:09.95]I'm gonna pop some tags\r\n[03:12.19]Only got twenty dollars in my pocket\r\n[03:14.94]I, I, I'm hunting, looking for a come-up\r\n[03:17.69]This is fucking awesome\r\n[03:20.48]I wear your granddad's clothes\r\n[03:23.22]I look incredible\r\n[03:25.70]I'm in this big ass coat\r\n[03:27.92]From that thrift shop down the road\r\n[03:30.69]I wear your granddad's clothes\r\n[03:33.19]I look incredible\r\n[03:35.94]I'm in this big ass coat\r\n[03:37.69]From that thrift shop down the road\r\n[03:40.69]I'm gonna pop some tags\r\n[03:42.44]Only got twenty dollars in my pocket\r\n[03:45.44]I, I, I'm hunting, looking for a come-up\r\n[03:48.22]This is fucking awesome\r\n[03:52.58]Is that your grandma's coat?",
  ],
  listadoVariables = [
    "--background",
    "--shadowlight",
    "--shadowdark",
    "--color",
    "--title",
    "--slider",
    "--play",
    "--playShadowDark",
    "--playShadowLight",
    "--playActiveDark",
    "--playActiveLight",
    "--song",
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
  },
  urls = {
    musica: "src/audio/",
    caratula: "src/images/",
  },
  temas = {
    claro: [
      "#e0e5ec",
      "#ebf0f8",
      "#d5dae0",
      "#797d7f",
      "#a1a1a1",
      "#d7dbdd",
      "#5c87fe",
      "#4b6fd0",
      "#6d9fff",
      "#314887",
      "#87c6ff",
      "#000000",
    ],
    oscuro: [
      "#16001E",
      " #1f002b",
      "#0d0011",
      "#F7B2B7",
      "#7e518f",
      "#2a0d35",
      "#7F2982",
      "#4a184b",
      "#b43ab9",
      "#4a184b",
      "#b43ab9",
      "#d584d8",
    ],
  };

let lyricstag = document.getElementById("letra");
const portadaAlbun = document.getElementById("portadaAlbum");
function iniciarReproductor() {
  reproductor.boton["reproducirPausa"] = document.getElementById("play");
  reproductor.boton["cancionSiguiente"] = document.getElementById("siguiente");
  reproductor.boton["cancionAnterior"] = document.getElementById("anterior");
  reproductor.boton["playlist"] = document.getElementById("playlist");
  reproductor.boton["closePlaylist"] = document.getElementById("close");
  reproductor.boton["selectorTema"] = document.getElementById("switch");
  reproductor.boton["mostrarLetra"] = document.getElementById("mostrar-letra");
  reproductor.boton["inputFile"] = document.getElementById("archivo-audio");
  reproductor.deslizador["progresoCancion"] =
    document.getElementById("inputRange");
  const musicList = document.querySelector(".music-list");

  reproductor.caratula = document.querySelector(".player_album img");
  reproductor.duracionStart = document.querySelector(".start time");
  reproductor.duracionEnd = document.querySelector(".end time");
  reproductor.nodo = document.querySelector(".player");

  reproductor.boton["reproducirPausa"].addEventListener(
    "click",
    alternarReproduccion
  );
  reproductor.boton["cancionSiguiente"].addEventListener("click", () =>
    cargarCancion(1)
  );
  reproductor.boton["cancionAnterior"].addEventListener("click", () =>
    cargarCancion(-1)
  );
  reproductor.boton["selectorTema"].addEventListener("click", switchTema);
  reproductor.boton["mostrarLetra"].addEventListener("click", mostrarLetra);
  reproductor.deslizador["progresoCancion"].addEventListener(
    "input",
    moverProgreso
  );
  reproductor.boton["playlist"].addEventListener("click", () => {
    musicList.classList.toggle("show");
  });
  reproductor.boton["closePlaylist"].addEventListener("click", () => {
    reproductor.boton["playlist"].click();
  });
  reproductor.boton["inputFile"].addEventListener("change", () => {
    const file = event.target.files[0];

    jsmediatags.read(file, {
      onSuccess: function (tag) {
        const data = tag.tags.picture.data;
        const format = tag.tags.picture.format;

        let base64string = "";
        for (let i = 0; i < data.length; i++) {
          base64string += String.fromCharCode(data[i]);
        }
        reproductor.caratula.src = `data:${format};base64,${window.btoa(
          base64string
        )}`;

        let tituloInput = tag.tags.title;
        let artistaInput = tag.tags.artist;
        document.querySelector(".player_artist").innerText = artistaInput;
        document.querySelector(".player_song").innerText = tituloInput;
      },
      onError: function (error) {
        console.log(error);
      },
    });
    const urlObj = URL.createObjectURL(event.target.files[0]);
    cancion.audio.addEventListener("load", () => {
      URL.revokeObjectURL(urlObj);
    });
    cancion.audio.src = urlObj;
    alternarReproduccion();
  });

  // esto a continuacion pausa o reanuda la cancion si se presiona la tecla espacio
  document.getElementById("html").addEventListener("keypress", function (e) {
    e.preventDefault();
    if (e.keyCode == 32 || e.code == "Space") {
      alternarReproduccion();
    }
  });
  reproduciendo = Math.floor(Math.random() * listadoCanciones.length);
  listPlaying();
  cargarCancion(0);
}

const ulTag = document.querySelector("ul");
for (let i = 0; i < listadoCanciones.length; i++) {
  let liTag = `<li li-index="${i}">
                <div class="row">
                  <span>${listadoTitulos[i]}</span>
                  <p>${listadoArtistas[i]}</p>
                </div>
                <span id="${
                  listadoCanciones[i]
                }" class="duracion-span">3:40</span>
                <audio class="${listadoCanciones[i]}" src="${
    urls["musica"] + listadoCanciones[i]
  }.mp3"></audio>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);

  let liAudioDuartionTag = ulTag.querySelector(`#${listadoCanciones[i]}`);
  let liAudioTag = ulTag.querySelector(`.${listadoCanciones[i]}`);
  liAudioTag.addEventListener("loadeddata", () => {
    let duration = duracionCancion(liAudioTag.duration);

    liAudioDuartionTag.innerText = `${duration.minutos}:${duration.segundos}`;
    liAudioDuartionTag.setAttribute(
      "t-duration",
      `${duration.minutos}:${duration.segundos}`
    ); //adding t-duration attribute with total duration value
  });
}

const allLiTag = ulTag.querySelectorAll("li");

//-------------- funciones:-------------------//

function cargarAudioInput({ target }) {
  const urlObj = URL.createObjectURL(target.files[0]);

  cancion.audio.addEventListener("load", () => {
    URL.revokeObjectURL(urlObj);
  });
  cancion.audio.src = urlObj;
  alternarReproduccion();
}

function mostrarLetra() {
  lyricstag.classList.toggle("hide");
  portadaAlbun.classList.toggle("show-lyrics");
  sincronizarCancion();
}

function processData(allText) {
  allTextLines = allText.split(/\r\n|\n/);
  next();
}

function next() {
  for (i = 0; i < allTextLines.length; i++) {
    if (allTextLines[i].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i) >= 0) {
      line = allTextLines[i].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i);
      tim[i] = parseInt(line[2]) * 60 + parseFloat(line[4]);
      llave[i] = line[5];
      lyrics[i] = line[6];
    }
  }
}

function vaciarArrays() {
  Array.prototype.remove =
    Array.prototype.remove ||
    function () {
      this.splice(0, this.length);
    };

  tim.remove();
  llave.remove();
  lyrics.remove();
  lyricstag.innerText = "";
}

function sincronizarCancion() {
  for (let i = 0; i < tim.length; i++) {
    if (
      (roundToTwo(cancion.audio.currentTime) == 0) &
      (roundToTwo(tim[3]) != 0) &
      (tim[0] == undefined)
    )
      lyricstag.innerText = "";
    else if (roundToTwo(cancion.audio.currentTime) == roundToTwo(tim[i])) {
      lyricstag.innerText = lyrics[i];
    }
  }
  setTimeout("sincronizarCancion()", 0);
  if (audio.onpause) return;
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

function listPlaying() {
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".duracion-span");

    if (allLiTag[j].classList.contains("playing")) {
      allLiTag[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }

    if (allLiTag[j].getAttribute("li-index") == reproduciendo) {
      allLiTag[j].classList.add("playing");
      audioTag.innerText = "Playing";
    }
    allLiTag[j].setAttribute("onclick", "clicked(this);");
  }
}

function clicked(element) {
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

  if (mode == "claro") {
    for (let index = 0; index < listadoVariables.length; index++) {
      const element = listadoVariables[index];
      const colorDark = temas.oscuro[index];
      root.style.setProperty(element, colorDark);
    }
    mode = "oscuro";
  } else {
    for (let index = 0; index < listadoVariables.length; index++) {
      const element = listadoVariables[index];
      const colorLight = temas.claro[index];
      root.style.setProperty(element, colorLight);
    }
    mode = "claro";
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
    "F Music Player " +
    listadoTitulos[reproduciendo] +
    " - " +
    listadoArtistas[reproduciendo];

  reproductor.caratula.src = cancion.caratula;
  reproductor.deslizador["progresoCancion"].value = 0;
  listPlaying();
  setTimeout(() => cambiarCancion(), 500);
  vaciarArrays();
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
  processData(listadoLetras[reproduciendo]);

  if (cancion.audio.currentTime == cancion.audio.duration) cargarCancion(1);
}

function alternarReproduccion() {
  reproductor.boton["reproducirPausa"].classList.toggle(".En_play");

  if (cancion.audio.paused || cancion.audio.ended) {
    idFrame = requestAnimationFrame(actualizarReproductor);
    reproductor.boton["reproducirPausa"]
      .querySelector(".pause-btn")
      .classList.toggle("hide");
    reproductor.boton["reproducirPausa"]
      .querySelector(".play-btn")
      .classList.toggle("hide");
    cancion.audio.play();
    reproductor.nodo.classList.add("reproduciendo");
  } else {
    window.cancelAnimationFrame(idFrame);
    cancion.audio.pause();
    reproductor.boton["reproducirPausa"]
      .querySelector(".pause-btn")
      .classList.toggle("hide");
    reproductor.boton["reproducirPausa"]
      .querySelector(".play-btn")
      .classList.toggle("hide");
    reproductor.nodo.classList.remove("reproduciendo");
  }
}
