

 
  let stateMenu = 0
  function showMenu(){
     container = document.querySelector('.container')
     menu = document.querySelector('.menu')
      if(stateMenu == 0){
          menu.style.marginLeft = '0'
          container.style.marginLeft = '80%'
          stateMenu++;
          menu.style.transition = '.2s'
          container.style.transition = '.2s'
        } else  if(stateMenu == 1){
        menu.style.marginLeft = '-100%'
        container.style.marginLeft = '0'
        container.style.transition = '.2s'
        stateMenu--;
        menu.style.transition = '.2s'
    }
  }