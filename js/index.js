
const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btn-form');
const inputNombre = document.querySelector('#nombre');
const inputEmpresa = document.querySelector('#empresa');
const inputArea = document.querySelector('#area');
const inputTel = document.querySelector('#telefono');
const inputEmail = document.querySelector('#email');
const inputAsk = document.querySelector('#ask');

const checkSi = document.querySelector('#si');
const checkNo = document.querySelector('#no');

const opciones = document.querySelector('#lugar');

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        scrollNav();
        crearGaleria();

        btnEnviar.classList.add('btn-desactivado');
        btnEnviar.disabled = true;

        inputNombre.addEventListener('blur', validarForm);
        inputEmpresa.addEventListener('blur', validarForm);
        inputArea.addEventListener('blur', validarForm);
        inputTel.addEventListener('blur', validarForm);
        inputEmail.addEventListener('blur', validarForm);
        inputAsk.addEventListener('blur', validarForm);

        checkSi.addEventListener('change', opcionesTransporte);
        checkNo.addEventListener('change', opcionesTransporte);

        btnEnviar.addEventListener('click', handleSubmit);

        const logo = document.querySelector('#logo').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })

    })
};

let datosFormulario;

const reg = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

function validarForm(e) {

    if (e.target.value === '') {

        e.target.placeholder = 'Este campo es obligatorio';

        e.target.classList.remove('success')
        e.target.classList.add('error')

        return;
    } else {
        e.target.classList.remove('error');
        e.target.classList.add('success');
    }

    if (e.target.name === 'email') {
        if (!reg.test(inputEmail.value)) {
            e.target.classList.add('error');
            e.target.value = '';
            e.target.placeholder = 'El email no es válido, ingreselo nuevamente';
            return;
        }
    }

    if (inputNombre.value != '' & inputEmpresa.value != '' & inputArea.value != '' & inputTel.value != '' & inputEmail.value != '' & inputAsk.value != '') {
        btnEnviar.classList.remove('btn-desactivado');
        btnEnviar.disabled = false;
    }
}




function opcionesTransporte() {

    if (checkNo) {
        opciones.value = '';
        opciones.classList.toggle('esconder');
        console.log(opciones.value);
        return;
    }
}


function handleSubmit(e) {
    e.preventDefault();
    const formFooter = document.querySelector('.form-footer');

    datosFormulario = {
        nombre: inputNombre.value,
        empresa: inputEmpresa.value,
        area: inputArea.value,
        telefono: inputTel.value,
        correo: inputEmail.value,
        ask: inputAsk.value,
        transporte: opciones.value
    }

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');

    formFooter.appendChild(divSpinner);

    setTimeout(() => {
        divSpinner.remove();
    }, 2000);


    setTimeout(() => {

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro exitoso. En breve nos comunicaremos con usted',
            showConfirmButton: false,
            timer: 2000
        })

        formulario.reset();
    }, 2500);

    return datosFormulario;
}



/** Galeria */
function crearGaleria() {
    const galeria = document.querySelector('.slider-ponentes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');
        imagen.classList.add('img-slider')
        imagen.src = `./img/ponentes/ponente${i}.png`;

        imagen.onclick = () => {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);

    }
}



function mostrarImagen(id) {

    const arrayPonentes = [
        {},
        {
            nombre: 'Dra. Krizia M.Karry - Directora Global de Marketing Técnico para BASH Pharma Solutions - BASF',
            descripcion: 'Sus enfoques técnicos incluyen optimización de formulaciones, procesos de manufactura continua para sólidos y espectroscopía para mediciones en tiempo real de atributos críticos o PAT. Krizia tiene más de una década de experiencia en la industria farmacéutica donde trabajó en compañias globales como Pfizer, Bristol-Myers Squibb, AstraZeneca y ELi-Lilly'
        },
        {
            nombre: 'Carolina Guerreiro - Gerente de Servicios de Formulación y Aplicación LATAM - Evonik',
            descripcion: 'Carolina Guerreiro es Gerente de Servicios de Formulación y Aplicación LATAM para la línea de Health Care de Evonik. Es licenciada en Farmacia-Bioquímica por la Universidad de São Paulo (FCFRP-USP), MBA en gestión de Proyectos por la misma institución (ESALQ-USP) y cuenta con más de 10 años de experiencia en el desarrollo de nuevos productos. Ha trabajado en los equipos de Investigación y Desarrollo en distintas undustrias farmacéuticas de Brasil, y durante 4 años, se ha dedicado al mercado de productos químicos especializados.'
        },
        {
            nombre: 'Chantal Julien - Global product manager',
            descripcion: 'Estudió Ciencias Aniales en la Universidad Laval de Quebec Canadá y tiene una Maestría. A lo largo de los años, también se desempeñó como Gerente de Marketing, Gerente de Proyectos Comerciales y Gerente de Asuntos Regulatorios. Entre 2018 y 2019 trabajó como Gerente de Proyectas CaPA en Cook Medical Europe.'
        },
        {
            nombre: 'MCB Jorge Herrera Rodríguez - Director Comercial de Elemental Traslational Research - CECYPE',
            descripcion: 'Ingeniero Electrónico y Maestro en Ciencias Bioéticas, Jorge Herrera es la segunda generación de directivos de CECYPE en donde acumuló cerca de 15 años de experiencia como líder de un tercer autorizado. Maestro en bioética por la universidad de Clarkson y el hospital Monte Sinai. Al día de hoy es Director Comercial del consorcio Elemental Traslational Research en donde aplica toda su experiencia para la atracción de nuevos desarrollos farmacéuticos en México.'
        },
        {
            nombre: 'Pari-Naz Javaheri - Sales Manager',
            descripcion: 'Estudió Neurociencia Cognitiva y del Comportamiento en la Universidad de California, San Diego. Tiene una Maestría en Administración de Empresas de la Universidad del Sur de California. Se unió a Novo Nordisk en 2021, como responsable de ventas de Quarts (compuestos de amonio cuaternario) e insulina para su uso en medios de cultivo celular.'
        },
        {
            nombre: 'Rosemarie Shiraishi - Country manager Latam - Kemin',
            descripcion: 'Farmacéutica y Bioquímica con más de 18 años de experiencia en el mercado farmacéutico y de suplementos alimenticios. Cuenta con posgrado en gerencia de marketing concluido en Londres. Country Manager para la región LATAM con más de 5 años en Kemin.'
        },
        {
            nombre: 'Mauricio Carvajal - Gerente de Desarrollo de Negocios - IPCA',
            descripcion: 'Con 13 años de experiencia en el ámbito de suministros de materias primas para la industria Farmacéutica, Veterinaria, Alimenticia y Cosmética, Mauricio ha desarrollado la habilidad de desarrollar negocios y crear relaciones dentro del gremio; desde proveedores de materia prima hasta laboratorios farmacéuticos. Se especiliza en el análisis estratégico de mercado, asi como negociaciones con clientes internacionales. Su formación inicial como financiero y su trayecto en la industria le ha permitido tener una visión panorámica de la situacion actual del mercado farmacéutico.'
        },
        {
            nombre: 'Mr Vasudev Kumar - General Manager of Corporate Quality Assurance - Natural Capsules',
            descripcion: 'Con 30 años de experiencia en la industria farmacéutica, Mr Kumar domina todo alrededor de las formas farmacéuticas sólidas orales (tabletas, cápsulas, líquidos orales, polvo seco, ungüentos, emulsiones y suspensiones). Materiales de consumo de rápido movimiento (FMCG), cápsulas de gelatina blanda, cápsulas de gelatina dura y Asuntos Regulatorios.'
        },
        {
            nombre: 'Melisa Rodriguez Saucedo - Gerente Comercial Regional en BASF Pharma Solutions',
            descripcion: 'Química Farmacéutica Industrial egresada del IPN, tiene una maestría en Administración Industrial por parte de la UNAM y 16 años de experiencia en la industria farmacéutica. Desempeñandose en diferentes roles, desde el soporte técnico hasta ventas. Actualmente se desempeña como Gerente Comercial Regional en BASF Pharma Solutions como responsable de Cánada, USA, México y CA&C.'
        },
        {
            nombre: 'Karoline Mathias Leite - Tecnical Manager - Latin America',
            descripcion: 'Farmacéutica Bioquímica graduada de la Universidad Unesp-Brasil, tiene una maestría en Ciencias por la Universidad de São Paulo y un MBA en Cosmetología. Inició su carrera en la industria farmacéutica hace 11 años, trabjando en empresas brasileñas como Eurofarma, Biolab y multinacionales como Colorcon, principalmente en el área de desarrollo de nuevos productos. Actualmente es Gerente Técnica Latam en DFE Pharma y profesora de posgrado en dos instituciones educativas.'
        },
        {
            nombre: 'Detlef Wolters - Head of Technical Service & Product Management Perlen Packaging AG',
            descripcion: 'Jefe de Servicio Técnico y Gestión de Productos en Perlen Packaging Switzerland. Ingeniero Químico con especialidad en Técnologia de Plásticos. Se ha desempeñado como Ingeniero de Proyectos y Gerente de planta en Brückner Maschinenbau, fabricante de máquinas para películas plásticas flexibles; Jefe de Servicio Técnico en Ac-Folien, Alemania (ahora Gerente de Producción, antes Gerente de Procesos y Jefe de Servicio Técnico en Amcor Flexibles Teningen, Alemania).'
        },
        {
            nombre: 'Dr. José Herrera - Director General - CECYPE',
            descripcion: 'José Herrera es la tercera generación de directivos de CECYPE. Empezó su carrera estudiando una maestría en investigación clínica, trabajando con medicamentos biotecnológicos en la escuela superior de medicina del IPN. Cuenta también con un doctorado en ciencias médicas trabajando con vacunas en los Paises Bajos. Trabajó varios años en el área analítica de CECYPE y ahora como el nuevo Director General de CECYPE.'
        }
    ]

    Swal.fire({
        html: `
        <div class="swal-imagen">
            <img src="./img/ponentes/ponente${id}.png" class="swal-img" alt="Informacion sobre ${arrayPonentes[id].nombre}">

            <h3 class="swal-titulo">${arrayPonentes[id].nombre}</h3>
            <p class="swal-texto">${arrayPonentes[id].descripcion}</p>
        </div>
        `,
        width: '40rem',
    })
}