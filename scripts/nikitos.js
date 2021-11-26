$('.filter__link').on('click', function(e) {
    e.preventDefault()
    $('.filter__link').removeClass('filter__link--active')
    $('.combo__item').removeClass('combo__item--show')
    $(this).addClass('filter__link--active')
    $($(this).attr('href')).addClass('combo__item--show')
})