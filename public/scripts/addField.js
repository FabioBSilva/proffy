//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
  //Duplicar os campos. Que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //coloquei true pra pegar os filhos, ou seja, tudo q está dentro da div

  //pegar os campos. que campos?
  const fields = newFieldContainer.querySelectorAll('input') //pega todos os inputs

  //para cada campo, limpar
  fields.forEach(function(field) {
    //pega o field do momento e limpa ele
    field.value = ""
  })

  //Colocar na página. Onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}