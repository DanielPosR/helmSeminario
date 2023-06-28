const btnPrimerDia = document.querySelector('#primerDia');
const btnSegundoDia = document.querySelector('#segundoDia');
const btnTercerDia = document.querySelector('#tercerDia');

const contenedorActividades = document.querySelector('#actividades');

document.addEventListener('DOMContentLoaded', () => {

    btnPrimerDia.addEventListener('click', () => {
        mostrarAgenda('primero')

        btnSegundoDia.classList.remove('seleccionado');
        btnTercerDia.classList.remove('seleccionado');
        btnPrimerDia.classList.add('seleccionado');
    });
    btnSegundoDia.addEventListener('click', () => {
        mostrarAgenda('segundo')

        btnPrimerDia.classList.remove('seleccionado');
        btnTercerDia.classList.remove('seleccionado');
        btnSegundoDia.classList.add('seleccionado');
    });


    btnTercerDia.addEventListener('click', () => {
        mostrarAgenda('tercero');

        btnPrimerDia.classList.remove('seleccionado');
        btnSegundoDia.classList.remove('seleccionado');
        btnTercerDia.classList.add('seleccionado');
    });
})


const agendaObj = {
    primero: [
        {
            hora: '7:00 - 7:30',
            actividad: 'Cita de clientes en autobuses Guadalajara'
        },
        {
            hora: '7:30',
            actividad: 'Salida autobuses Guadalajara'
        },
        {
            hora: '8:30 - 9:00',
            actividad: 'Cita a clientes Ciudad de México'
        },
        {
            hora: '9:00',
            actividad: 'Salida autobuses Ciudad de México'
        },
        {
            hora: '12:00',
            actividad: ' Llegada autobuses Ciudad de México'
        },
        {
            hora: '12:00 - 13:00',
            actividad: 'Llegada autobuses Guadalajara'
        },
        {
            hora: '13:30 - 15:00',
            actividad: 'Registro (arcos del hotel, dejan equipaje y el hotel lo lleva a las habitaciones)'
        },
        {
            hora: '13:30 - 15:00',
            actividad: 'Comida inauguración en jardín (Buffet)'
        },
        {
            hora: '15:00 - 15:05',
            actividad: 'Bienvenida e información del evento'
        },
        {
            hora: '15:05 - 15:15',
            actividad: 'Discurso de inauguración, Nancy Rodríguez'
        },
        {
            hora: '15:15 - 15:20',
            actividad: 'Video HELM'
        },
        {
            hora: '15:20 - 16:20',
            actividad: 'Conferencia 1 - Rosemire Shiraishi <br> \"Igredientes Naturales para Soluciones Naturales\"'
        },
        {
            hora: '16:20 - 17:20',
            actividad: ' Conferencia 2. EVONIK Carolina Guerreiro <br> \"¿Cómo superar los desafíos de escalamiento y fabricación de procesos de recubrimiento con EUDRAGIT?\"'
        },
        {
            hora: '17:20 - 18:30',
            actividad: ' Conferencia 3. EVONIK Carolina Guerreiro y Equipo Técnico Eudragit Helm México - Moderador Luis Morales <br> \"Problemas Comunes Durante el Proceso de Recubrimiento de Formas Farmacéuticas Sólidas -Mesa Redonda\"'
        },
        {
            hora: '18:30 - 18:40',
            actividad: 'Instrucciones de actividades vespertinas'
        },
        {
            hora: '19:30 - 20:30',
            actividad: 'Cena y actividades sorpresa'
        }

    ],

    segundo: [
        {
            hora: '7:30 - 8:30',
            actividad: 'Desayuno buffet'
        },
        {
            hora: '8:30 - 9:30',
            actividad: 'Conferencia 4 DFE Pharma Karoline Mathias Leite <br> \"Desafíos de Compresión Directa o Tabletas Buco-Dispersables\"'
        },
        {
            hora: '9:30 - 10:30',
            actividad: 'Conferencia 5. Novo Nordisk <br> Chantale Julien <br>Pari-Naz Javaheri <br> Non-alcohol based topical antiseptics and wound care'
        },
        {
            hora: '10:30 - 11:30',
            actividad: 'Conferencia 6. BASF Dra. Krizia M. Karry "De la idea a la tableta: Desarrollo de una formulación basada en QbD para manufactura continua"'
        },
        {
            hora: '11:30 - 11:50',
            actividad: 'Receso'
        },
        {
            hora: '11:50 - 12:50',
            actividad: 'Conferencia 7. BASF Melisa Rodriguez Saucedo <br> "Descubre el Poder de ZoomLab™, un asistente técnico virtual para potenciar tus habilidades en formulación y reducir los tiempos de desarrollo"'
        },
        {
            hora: '12:50 - 14:20',
            actividad: 'Conferencia 8. NATURAL CAPSULES Mr Vasudev Kumar <br> "Hard Gelatin Capsule Shells – Advantages over Tablets, Types of Capsules & Capsule Sizes, Manufacturing Process & Regulatory requirements"'
        },
        {
            hora: '14:20 - 15:40',
            actividad: 'Comida Jardín (Buffet)'
        },
        {
            hora: '15:40 - 16:40',
            actividad: 'Conferencia 9 DFE Pharma <br> Karoline Mathias Leite Nitrosamines'
        },
        {
            hora: '16:40 - 17:40',
            actividad: 'Conferencia 10 CECYPE MCB Jorge E. Herrera Rodríguez D.C. José Herrera Rodríguez <br> "Presente y futuro de los terceros autorizados y de la investigación clínica para productos farmacéuticos en México. Perspectiva de un Tercer Autorizado"'
        },
        {
            hora: '17:40 - 18:40',
            actividad: 'Conferencia 11 PERLEN Detlef Wolters <br> "Pharmaceutical Blister Packaging and Climate Impact"'
        },
        {
            hora: '19:30 - 24:00',
            actividad: 'Cena de clausura y espectáculo sorpresa'
        },
    ],

    tercero: [
        {
            hora: '8:00 - 9:00',
            actividad: 'Desayuno Buffet'
        },
        {
            hora: '9:00 - 10:00',
            actividad: 'Conferencia 12 PERLEN <br> Por definir'
        },
        {
            hora: '10:00 - 11:00',
            actividad: 'Conferencia 13 IPCA Mauricio Carvajal <br> Tendencias del Mercado Farmacéutico en México'
        },
        {
            hora: '11:00 - 12:00 ',
            actividad: 'Conferencia 14 USP <br> Por definir'
        },
        {
            hora: '12:30 - 12:50',
            actividad: 'Clausura Nancy Rodríguez'
        },
        {
            hora: '12:50 - 13:20',
            actividad: 'Entrega de constancias y boxlunch'
        },
        {
            hora: '13:30',
            actividad: 'Salida de autobuses GDL y CDMX'
        },
        {
            hora: '16:30',
            actividad: 'LLegada autobuses a CDMX'
        },
        {
            hora: '18:30',
            actividad: 'Llegada de autobuses a GDL'
        },
    ]
}




function mostrarAgenda(id) {
    limpiarHTML();
    const div = document.createElement('div');
    
    for (let i = 0; i < agendaObj[id].length; i++) {

        const actividad = document.createElement('div');
        actividad.classList.add('actividad')
        actividad.innerHTML = `
            <h5 class="horario">${agendaObj[id][i].hora}</h5>
            <p class="actividad-info">
                ${agendaObj[id][i].actividad}
            </p>
        `;

        div.appendChild(actividad);

        contenedorActividades.appendChild(div);
    }

};


function limpiarHTML() {
    while (contenedorActividades.firstChild) {
        contenedorActividades.removeChild(contenedorActividades.firstChild)
    }
}
