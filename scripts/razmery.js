(function() {

    const controlls = document.querySelectorAll ('.razmer__item');
    const activeClass = 'razmer__item--active';
    
    controlls.forEach(function(control) {
    
      control.addEventListener('click', function(e) {
        e.preventDefault();
    
        controlls.forEach(function(link) {
            link.closest('.razmer__item').classList.remove(activeClass);
        })
    
        control.closest('.razmer__item').classList.add(activeClass);
      })
    
    })
    
    
    
    }())