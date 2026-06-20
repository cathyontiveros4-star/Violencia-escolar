// ==============================
// GRÁFICA 1: BULLYING
// ==============================
new Chart(document.getElementById("graficaBullying"), {
    type: "doughnut",
    data: {
        labels: [
            "Han sufrido bullying (32%)",
            "No lo han sufrido (68%)"
        ],
        datasets: [{
            data: [32, 68],
            backgroundColor: [
                "#1E3A5F",
                "#BFC9D1"
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Estudiantes que han sufrido bullying"
            },
            legend: {
                position: "bottom"
            }
        }
    }
});


// ==============================
// GRÁFICA 2: PELEAS FÍSICAS
// ==============================
new Chart(document.getElementById("graficaPeleas"), {
    type: "bar",
    data: {
        labels: [
            "Participaron en peleas",
            "No participaron"
        ],
        datasets: [{
            label: "Porcentaje (%)",
            data: [36, 64],
            backgroundColor: [
                "#1E3A5F",
                "#7D93A6"
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Participación en peleas físicas"
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});


// ==============================
// GRÁFICA 3: CIBERBULLYING
// ==============================
new Chart(document.getElementById("graficaCiber"), {
    type: "pie",
    data: {
        labels: [
            "Han sufrido ciberbullying (10%)",
            "No lo han sufrido (90%)"
        ],
        datasets: [{
            data: [10, 90],
            backgroundColor: [
                "#1E3A5F",
                "#D3DCE3"
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Casos de ciberbullying"
            },
            legend: {
                position: "bottom"
            }
        }
    }
});


// ==============================
// ANIMACIÓN AL HACER SCROLL
// ==============================
const secciones = document.querySelectorAll("section");

function mostrarSecciones() {
    secciones.forEach(seccion => {
        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {
            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0)";
        }
    });
}

secciones.forEach(seccion => {
    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(30px)";
    seccion.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", mostrarSecciones);
window.addEventListener("load", mostrarSecciones);


// ==============================
// DESPLAZAMIENTO SUAVE DEL MENÚ
// ==============================
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
