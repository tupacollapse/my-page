(function() {

    const controlls = document.querySelectorAll ('.dots__item');
    const activeClass = 'dots__item--active';
    
    controlls.forEach(function(control) {
    
      control.addEventListener('click', function(e) {
        e.preventDefault();
    
        controlls.forEach(function(link) {
            link.closest('.dots__item').classList.remove(activeClass);
        })
    
        control.closest('.dots__item').classList.add(activeClass);
      })
    
    })
    
    
    
    }())