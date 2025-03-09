// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function inicioSorteo() {
    amigos = [];
    cantidadIngresos = 0;
    sorteo = '';
}
inicioSorteo();
function agregarAmigo() {
    let nuevoIngreso = document.getElementById('amigo').value;
    if (!nuevoIngreso) { alert("Ingrese un Nombre Correcto"); }
    else {
        amigos.push(nuevoIngreso);
        cantidadIngresos++;
        document.getElementById('amigo').value = '';
        let li = document.createElement('li');
        li.textContent = nuevoIngreso;
        document.getElementById('listaAmigos').appendChild(li);
        let borraResultado = document.getElementById('resultado');
        borraResultado.innerHTML = '';
    }
}
function sortearAmigo() {
    let sorteo = Math.floor(Math.random()*cantidadIngresos);
    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = 'El amigo secreto sorteado es:' + `${amigos[sorteo]}`;
    let borraLista = document.getElementById('listaAmigos');
    borraLista.innerHTML = '';
    inicioSorteo();
}
