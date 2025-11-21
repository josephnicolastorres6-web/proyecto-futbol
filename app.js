const modalElement = document.getElementById("modalInfo");
const modal = new bootstrap.Modal(modalElement);

/* LOGIN */
function mostrarRegistro() {
    loginContainer.style.display = "none";
    registroContainer.style.display = "block";
}
function mostrarLogin() {
    registroContainer.style.display = "none";
    loginContainer.style.display = "block";
}

function registrar() {
    if (!regUser.value || !regPass.value) return alert("Completa todo.");
    localStorage.setItem("user", regUser.value);
    localStorage.setItem("pass", regPass.value);
    alert("Cuenta creada");
    mostrarLogin();
}

function login() {
    if (
        loginUser.value === localStorage.getItem("user") &&
        loginPass.value === localStorage.getItem("pass")
    ) {
        loginContainer.style.display = "none";
        app.style.display = "block";
    } else alert("Error en datos");
}

function logout() {
    app.style.display = "none";
    loginContainer.style.display = "block";
}

/* CAMBIO DE SECCIONES */
function cambiarVista(vista) {
    document.querySelectorAll(".vista").forEach((s) => s.classList.remove("activa"));
    document.getElementById(vista).classList.add("activa");
}

/* NOTICIAS ACTUALES */
const noticias = [
    { titulo: "Lionel Messi gana el Balón de Oro 2025", descripcion: "El astro argentino se corona nuevamente.", dato: "Su séptimo Balón de Oro." },
    { titulo: "Real Madrid ficha joven promesa", descripcion: "El Madrid asegura un talento de 18 años.", dato: "Transferencia récord para su edad." },
    { titulo: "Champions 2025: Final confirmada", descripcion: "Se enfrentarán PSG y Arsenal.", dato: "El partido será en Estambul." },
    { titulo: "Lesión de estrella", descripcion: "Mbappé se pierde 3 semanas.", dato: "Recuperación estimada: 21 días." },
    { titulo: "Nuevo récord de goles en Europa", descripcion: "Robert Lewandowski alcanza 500 goles.", dato: "Récord en ligas europeas." },
];

function cargarNoticias() {
    contenedorNoticias.innerHTML = "";
    noticias.forEach((n) => {
        contenedorNoticias.innerHTML += `
        <div class="col-md-4">
            <div class="glassCard p-3 text-white mb-3">
                <h4>${n.titulo}</h4>
                <p>${n.descripcion}</p>
                <button class="botonModerno" onclick="info('${n.dato}')">Ver más</button>
            </div>
        </div>`;
    });
}
cargarNoticias();

/* CAMISETAS CON MÁS INFORMACIÓN */
const camisetas = {
    retro: [
        {
            nombre: "Real Madrid 2002",
            img: "https://editorial.uefa.com/resources/025d-0f69b209e165-4b70a310f06b-1000/bayer_leverkusen_v_real_madrid_-_champions_league_final_2002.jpeg",
            dato: "La volea de Zidane en Champions",
        },
        { nombre: "Barcelona 1999", img: "https://i.pinimg.com/originals/81/f0/6c/81f06c46154d0e57b80d63376717b230.jpg", dato: "Año mágico de Rivaldo" },
        { nombre: "Milan 2007", img: "https://media.gettyimages.com/id/525003090/es/foto/milan-italy-13-january-2008-ricardo-kaka-of-ac-milan-celebrates-during-the-serie-a-2007-2008.jpg?s=612x612&w=gi&k=20&c=IATNmuoCeOy6kiFJE20gciXi8krJ9PhYaDmxXRRQPpY=", dato: "Kaká lidera al Milan hacia el Scudetto" },
        { nombre: "Juventus 1998", img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Juventus_FC_1998-99.png", dato: "Año de la histórica temporada de Del Piero" },
    ],
    
    actual: [
        {
            nombre: "PSG 2025",
            img: "https://media.gettyimages.com/id/2218587823/es/foto/munich-germany-khvicha-kvaratskhelia-of-psg-celebrates-after-scoring-to-give-the-side-a-4-0.jpg?s=612x612&w=gi&k=20&c=3DTarnx3CxSbby_ywtlcJaatpjtBtIWxGTvrv7Utt5k=",
            dato: "Primera camiseta tras ganar la Champions",
        },
        { nombre: "Arsenal 2025", img: "https://aftv.co.uk/wp-content/uploads/2025/09/ace-4-14.jpg", dato: "Una de las más vendidas del año" },
        {
            nombre: "Barcelona 2025",
            img: "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/147a19e7-27ba-47ec-86e1-106bbc99ffe1/fotos%20sitio%20-%202025-08-31T170656.309.png?ver=03-06-2025?w=3840&q=75=",
            dato: "Camiseta conmemorativa tras la Supercopa",
        },
        {
            nombre: "Real Madrid 2025",
            img: "https://assets.uefa.com/imgml/2025/real-madrid-jersey.jpg",
            dato: "Inspirada en los años dorados de la Champions",
        },
    ],
};

function mostrarCamisetas(tipo) {
    contenedorCamisetas.innerHTML = "";
    camisetas[tipo].forEach((c) => {
        contenedorCamisetas.innerHTML += `
        <div class="col-md-4">
            <div class="glassCard p-3 text-white mb-3">
                <h4>${c.nombre}</h4>
                <img src="${c.img}" class="w-100 mb-2" />
                <button class="botonModerno" onclick="info('${c.dato}')">Dato curioso</button>
            </div>
        </div>`;
    });
}

/* PARTIDOS */
const ligas = {
    inglesa: ["Arsenal vs Chelsea", "City vs Liverpool", "Manchester United vs Tottenham"],
    espanola: ["Barcelona vs Sevilla", "Madrid vs Valencia", "Atlético vs Betis"],
    italiana: ["Inter vs Milan", "Juve vs Roma", "Napoli vs Lazio"],
    alemana: ["Bayern vs Dortmund", "Leipzig vs Leverkusen", "Bayer vs Wolfsburg"],
};

/* NUEVO CAMPO PARA LOGOS DE LIGAS */
const logosLigas = {
    inglesa: "https://logodownload.org/wp-content/uploads/2016/11/premier-league-logo-3.png",
    espanola: "https://logodownload.org/wp-content/uploads/2013/12/la-liga-logo-1.png",
    italiana: "https://logodownload.org/wp-content/uploads/2018/07/serie-a-logo.png",
    alemana: "https://logodownload.org/wp-content/uploads/2017/03/bundesliga-logo.png",
};

function mostrarLiga(liga) {
    info(ligas[liga].join("<br>") + `<br><br><img src="${logosLigas[liga]}" class="w-50 mt-2">`);
}

/* MODAL GENERAL */
function info(texto) {
    modalTexto.innerHTML = texto;

    // Mostrar capa desenfocada (solo fondo)
    document.getElementById("blurOverlay").style.display = "block";

    modal.show();
}

/* Cerrar modal tocando afuera */
modalElement.addEventListener("click", function (e) {
    if (e.target === modalElement) modal.hide();
});

/* Quitar desenfoque al cerrar */
modalElement.addEventListener("hidden.bs.modal", () => {
    document.getElementById("blurOverlay").style.display = "none";
});
