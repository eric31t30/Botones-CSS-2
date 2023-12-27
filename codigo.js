const noScrollLinks = document.querySelectorAll('.btn');

noScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});


// btn 12

const btn_12_cont = document.querySelector('.btn-12-cont')
const btn_12 = document.querySelector('.btn-12')


btn_12.addEventListener('click', ()=>{
    if(!btn_12.classList.contains('btn-12-activado')){
        btn_12.classList.add('btn-12-activado');
        btn_12_cont.classList.add('btn-12-cont-activado');
    }else{
        removerclase_btn12();
        btn_12.classList.remove('btn-12-activado')
        btn_12_cont.classList.remove('btn-12-cont-activado')
    }
});

function removerclase_btn12() {
    btn_12.classList.remove('reloj-interruptor-activado');
    btn_12_cont.classList.remove('icono-activado');
  }