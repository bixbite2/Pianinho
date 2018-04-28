const doa = document.querySelector('#ac');
const rea = document.querySelector('#ad');
const mia = document.querySelector('#ae');
const faa = document.querySelector('#af');
const sola = document.querySelector('#ag');
const laa = document.querySelector('#aa');
const sia = document.querySelector('#ab');
const doa2 = document.querySelector('#ac2');

const piano = document.querySelector('#piano');

document.addEventListener('keypress', function(e) {
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
    } else if (e.keyCode === 107) {
        dj = doa2;
    }
    if (dj !== '') {
        dj.load();
        dj.play();
    }
    // const id = document.getElementById(dj.id).id;
    // const doc = document.getElementById(id.slice(1));
    // doc.style.backgroundColor = 'rgb(230, 230, 230)';
    // doc.style.backgroundColor = 'white';
});

piano.addEventListener('click', function(e) {
    console.log(e.target.id);
    let dj = '';
    if (e.target.id === 'c') {
        dj = doa;
    } else if (e.target.id === 'd') {
        dj = rea;
    } else if (e.target.id === 'e') {
        dj = mia;
    } else if (e.target.id === 'f') {
        dj = faa;
    } else if (e.target.id === 'g') {
        dj = sola;
    } else if (e.target.id === 'a') {
        dj = laa;
    } else if (e.target.id === 'b') {
        dj = sia;
    } else if (e.target.id === 'c2') {
        dj = doa2;
    }
    if (dj !== '') {
        dj.load();
        dj.play();
    }
});