let title = document.createElement('h1');
title.innerText = 'Belajar DOM';
title.classList.add('text-center', 'mt-5');

let container = document.createElement('div');
container.classList.add('container', 'mt-5');

let row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

let col = document.createElement('div');
col.classList.add(
    'col-md-6',
    'offset-md-3',
    'd-flex',
    'justify-content-center',
    'align-items-center',
);
row.appendChild(col);

let buttonmin = document.createElement('button');
buttonmin.classList.add('btn', 'm-4', 'btn-danger', 'btn-block');
buttonmin.innerText = '-';
buttonmin.id = 'btnmin';
col.appendChild(buttonmin);

let angka = document.createElement('h6');
angka.innerText = 0;
angka.classList.add('text-center');
col.appendChild(angka);

let buttonplus = document.createElement('button');
buttonplus.classList.add('btn', 'm-4', 'btn-success', 'btn-block');
buttonplus.innerText = '+';
buttonplus.id = 'btnplus';
col.appendChild(buttonplus);


// inisialisasi angka
let count = 0;
// melakukan update pada angka dan warna
let update = function(){
    if (count<0) {
        angka.classList.add('text-danger');
    } else {
        angka.classList.remove('text-danger');
    }
};
// mengurangi angka pada saat tombol diklik
buttonmin.addEventListener('click', function () {
    count--;
    angka.innerText = count;
    update();
});

// menambah angka pada saat tombol diklik
buttonplus.addEventListener('click', function () {
    count++;
    angka.innerText = count;
    update();
});

document.body.appendChild(title);
document.body.appendChild(container);