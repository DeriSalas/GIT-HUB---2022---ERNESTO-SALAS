
let words = [];

words.push({'word':'Amazonas', 'key':'Chachapoyas'},
    {'word':'Ancash', 'key':'Huaraz'},
    {'word':'Apurimac', 'key':'Abancay'},
    {'word':'Arequipa', 'key':'Arequipa'},
    {'word':'Ayacucho', 'key':'Ayacucho'},
    {'word':'Cajamarca', 'key':'Cajamarca'},
    {'word':'Cusco', 'key':'Cusco'},
    {'word':'Huancavelica', 'key':'Huancavelica'},
    {'word':'Huanuco', 'key':'Huanuco'},
    {'word':'Ica', 'key':'Ica'},
    {'word':'Junin', 'key':'Huancayo'},
    {'word':'LaLibertad', 'key':'Trujillo'},
    {'word':'Lambayeque', 'key':'Chiclayo'},
    {'word':'Lima', 'key':'Lima'},
    {'word':'Loreto', 'key':'Iquitos'},
    {'word':'MadreDeDios', 'key':'Puerto Maldonado'},
    {'word':'Moquegua', 'key':'Moquegua'},
    {'word':'Pasco', 'key':'Cerro de Pasco'},
    {'word':'Piura', 'key':'Piura'},
    {'word':'Puno', 'key':'Puno'},
    {'word':'SanMartin', 'key':'Moyobamba'},
    {'word':'Tacna', 'key':'Tacna'},
    {'word':'Tumbes', 'key':'Tumbes'},
    {'word':'Ucayali', 'key':'Pucallpa'});

let word = '';
let word_spaces = '';
let intentos = 6;
let fails = 0;
let aciertos = 0;
let final = 'FALSE';

let head = document.querySelector('.partA');
let body = document.querySelector('.partB');
let left_arm = document.querySelector('.partC');
let right_arm = document.querySelector('.partD');
let left_leg = document.querySelector('.partE');
let right_leg = document.querySelector('.partF');

head.style.display = 'none';
body.style.display = 'none';
left_arm.style.display = 'none';
right_arm.style.display = 'none';
left_leg.style.display = 'none';
right_leg.style.display = 'none';

const begin = () => {
    let index = Math.floor(Math.random() * words.length);
    word = words[index].word;
    let key = words[index].key;
    word_spaces = word.length;

    key_tag = document.querySelector('.key');
    dynamic_word_tag = document.querySelector('.dynamic_word');
    info_tag = document.querySelector('.info');
    
    aux = '';
    for(i=0;i<word_spaces;i++){
        aux = aux + `<p id=${i}>_</p>`;
    }

    key_tag.innerHTML = key;
    dynamic_word_tag.innerHTML = aux;
};

function hacer(l){
    if(final == 'FALSE'){
        fails = 0;
        for(i=0;i<word.length;i++){
            uppercase = word[i].toUpperCase();
            if(l == uppercase ){
                dynamic_letter = document.getElementById(i).innerHTML = uppercase;
                aciertos = aciertos + 1;
                document.querySelector(`.${l}`).style.display = 'none';
                if(aciertos == word.length){
                    info_tag.innerHTML = 'Ganaste! 🤭 Felicidades';
                    final = 'TRUE';
                } else {
                    info_tag.innerHTML = `Acertaste! 🤠👍 letra: ${l}`;
                }
            } else {
                fails = fails + 1;
            }

            if(fails == word.length){
                info_tag.innerHTML = 'Fallaste!';
                intentos = intentos - 1;
                switch (intentos) {
                    case 5:
                        head.style.display = 'block';
                    break;
                    case 4:
                        body.style.display = 'block';
                    break;
                    case 3:
                        left_arm.style.display = 'block';
                    break;
                    case 2:
                        right_arm.style.display = 'block';
                    break;
                    case 1:
                        left_leg.style.display = 'block';
                    break;
                    case 0:
                        right_leg.style.display = 'block';
                        info_tag.innerHTML = `Estas muerto 😭. Tienes ${intentos} intentos`;
                    break;
                }
            }
        }
    } else {
        alert('Ya ganaste! 🤭. Ve a tu casa');
    }
}

begin();