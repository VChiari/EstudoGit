var teste = window.setInterval(() => {
  carregar()
}, 1000)

function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  var segundo = data.getSeconds()

  msg.innerHTML = `Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`

  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'fotomanha.png'
    document.body.style.background = '#787e52'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = 'fototarde.png'
    document.body.style.background = '#d58a50'
  } else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#1a4e5d'
    //BOA NOITE
  }
}
