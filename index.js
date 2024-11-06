let ej1_nombre = document.getElementById("ej1_nombre");
let ej1_apellido = document.getElementById("ej1_apellido");
let ej1_cumpleaños = document.getElementById("ej1_cumpleaños");
let form_nombre = document.getElementById("form_nombre");
let form_apellido = document.getElementById("form_apellido");
let form_cumpleaños = document.getElementById("form_cumpleaños");
let select_dias = document.getElementById("fechas_dias");
let select_meses = document.getElementById("fechas_meses");
let select_años = document.getElementById("fechas_años");
let ej2_cumpleaños = document.getElementById("ej2_cumpleaños");
let dias_transcurridos = document.getElementById("dias_transcurridos");
let primer_mes = document.getElementById("primer_mes");
let primer_año = document.getElementById("primer_año");

let cumple = "";

form_nombre.addEventListener("input", (e) => {
    ej1_nombre.innerHTML = e.target.value;
});

form_apellido.addEventListener("input", (e) => {
    ej1_apellido.innerHTML = e.target.value;
});

select_dias.addEventListener("change", (e) => {
    cumple = e.target.value;
    ej2_cumpleaños.innerHTML = cumple
    dias_transcurridos.innerHTML = 0;
    ej1_cumpleaños.innerHTML = "(dd/mm/aaaa)";
    primer_mes.selected = true;
    primer_año.selected = true;
});

select_meses.addEventListener("change", (e) => {
    if(cumple.length < 5) {
        cumple = cumple + "/" + e.target.value;
        ej2_cumpleaños.innerHTML = cumple;
        primer_año.selected = true;
    } else {
        cumple = cumple[0] + cumple[1] + cumple[2] + e.target.value;
        ej2_cumpleaños.innerHTML = cumple;
        primer_año.selected = true;
    }
})

select_años.addEventListener("change", (e) => {
    if(cumple.length < 10) {
        cumple = cumple + "/" + e.target.value;
        ej2_cumpleaños.innerHTML = cumple

        ej1_cumpleaños.innerHTML = cumple;
        dias_transcurridos.innerHTML = dias_vividos(cumple);
    } else {
        cumple = cumple[0] + cumple[1] + cumple[2] + cumple[3] + cumple[4] + cumple[5] + e.target.value;
        ej2_cumpleaños.innerHTML = cumple;

        ej1_cumpleaños.innerHTML = cumple;
        dias_transcurridos.innerHTML = dias_vividos(cumple);
    }
})

for(let i = 1; i < 32; i++) {
    const option = document.createElement("option");

    if(String(i).length == 1) {
        i = "0" + i;
    }

    option.textContent = i;
    option.value = i;
    
    select_dias.appendChild(option);
}

for(let i = 1; i < 13; i++) {
    const option = document.createElement("option");
    
    if(String(i).length == 1) {
        i = "0" + i;
    }

    option.textContent = i;
    option.value = i;
    
    select_meses.appendChild(option);
}

for(let i = 2024; i > 1923; i--) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    
    select_años.appendChild(option);
}

function dias_vividos(cumpleaños) {
    let hoy = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(); 
    let fecha = cumpleaños.split("/");
    let fecha_actual = hoy.split("/");

    let diferencia = (Date.UTC(fecha_actual[2],fecha_actual[1]-1,fecha_actual[0])) - (Date.UTC(fecha[2],fecha[1]-1,fecha[0]));
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return dias;
};

