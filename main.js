window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se o topo da seção passou da linha alvo
  // quais dados vou precisar?

  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informaçôes dos dados
  console.log(
    'o topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine
  )


  // varificar se a base está abaixo da  linha alvo
  // quais dados vou precisar?

  // seção termina onde?
  const sectionEndAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLin = sectionEndAt <= targetLine

  // informaçôes dos dados
  console.log('o fundo da seção passou da linha?',
   sectionEndPassedTargetLin)


  // limites da seção
  const sectionBounderies = 
  sectionTopReachOrPassedTargetLine && 
  !sectionEndPassedTargetLin

  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBounderies) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top', // essa propriedade diz de onde o elemento vai se originar
  distance: '30px', // essa propriedade diz a distancia que o elemento vai ter da origem
  duration: 1500 // essa propriedade diz quantos milissegundos o esse efeito vai durar
}).reveal(`           
#home, 
#home img, 
#home .stats,
#home .stat, 
#services,
#services header,
#services .card,
#about,
#about header
#about .content`) // dentro de reveal você coloca em quais elementos você quer adicionar esse efeito
// obs: aqui eu utilizo acento agudo pra abrir e fechar para poder quebrar a linha
