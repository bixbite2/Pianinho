const doa = document.querySelector('#ca');
const rea = document.querySelector('#da');
const mia = document.querySelector('#ea');
const faa = document.querySelector('#fa');
const sola = document.querySelector('#ga');
const laa = document.querySelector('#aa');
const sia = document.querySelector('#ba');
const doa2 = document.querySelector('#ca2');


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
    } else if (e.keyCode === 107) {
        dj = doa2;
    }
    if (dj !== '') {
        dj.load();
        dj.play();
    }
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