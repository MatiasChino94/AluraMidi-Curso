const listaDeBotones = document.querySelectorAll('.tecla');

function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// let contador = 0;

// while( contador < 9 ){
//     const tecla = listaDeBotones[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#sonido_${instrumento}`;

//     tecla.onclick = () => {
//         playSonido(idAudio);
//     } 
//     contador++;
// }

for (let i = 0; i < listaDeBotones.length; i++) {
    const tecla = listaDeBotones[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = () => {
        playSonido(idAudio);
    }

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('activa')
    }
}