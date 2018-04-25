const doa = document.querySelector('#doa');
const rea = document.querySelector('#rea');
const mia = document.querySelector('#mia');
const faa = document.querySelector('#faa');
const sola = document.querySelector('#sola');
const laa = document.querySelector('#laa');
const sia = document.querySelector('#sia');

const piano = document.querySelector('#piano');


document.addEventListener('keypress', function(e) {
    console.log(e.keyCode);
    let dj = '';
    if (e.keyCode === 97) {
        dj = doa;
    } else if (e.keyCode === 115) {
        dj = rea;
    } else if (e.keyCode === 100) {
        dj = mia;
    } else if (e.keyCode === 102) {
        dj = faa;
    } else if (e.keyCode === 103) {
        dj = sola;
    } else if (e.keyCode === 104) {
        dj = laa;
    } else if (e.keyCode === 106) {
        dj = sia;
    }
    console.log(dj);
    if (dj !== '') {
        dj.load();
        dj.play();
    }
});

piano.addEventListener('click', function(e) {
    console.log(e.target.id);
    let dj = '';
    if (e.target.id === 'do') {
        dj = doa;
    } else if (e.target.id === 're') {
        dj = rea;
    } else if (e.target.id === 'mi') {
        dj = mia;
    } else if (e.target.id === 'fa') {
        dj = faa;
    } else if (e.target.id === 'sol') {
        dj = sola;
    } else if (e.target.id === 'la') {
        dj = laa;
    } else if (e.target.id === 'si') {
        dj = sia;
    }
    console.log(dj);
    if (dj !== '') {
        dj.load();
        dj.play();
    }
});