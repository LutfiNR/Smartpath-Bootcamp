var name = 'Lutfi Nur Rohman';

console.log(name);

let umur = 20;
console.log(umur);

const jenisKelamin = 'laki-laki';
console.log(jenisKelamin);


const paragrafBaru = document.createElement('p')
const isiParagraf = document.createTextNode('upik lewat js')

paragrafBaru.appendChild(isiParagraf);
document.body.appendChild(paragrafBaru);


let angka = 0;
const buttonSubmit = document.getElementById('buttonSubmit');
buttonSubmit.addEventListener('click', ()=>{
    angka += 1;
    alert(angka)
})