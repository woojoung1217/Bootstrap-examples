const emailInputEl =document.querySelectorAll('#exampleInputEmail1')
const ModalEl =document.querySelector('#exampleModal')



ModalEl.addEventListener('shown.bs.modal',function(){
  emailInputEl.hide();
})