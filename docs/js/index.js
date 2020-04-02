

   

   function showInfo(a){
       info = document.querySelector('.info-div')
       container = document.querySelector('.container')
       bnt = document.querySelector('#info')
       if(a == 0){
           info.style.top = '25vh'
           info.style.opacity = '1'
           info.style.display = 'block'
           info.style.transition = '.4s'
           container.style.filter = 'blur(5px)'
           bnt.style.display = 'none'
        } else  if(a == 1){
        info.style.top = '10vh'
        info.style.opacity = '0'
        info.style.display = 'none'
        info.style.transition = '.4s'
        container.style.filter = 'blur(0px)'
        bnt.style.display = 'block'
    }
   }



   