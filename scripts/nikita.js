$('.dots__item-link').on('click', function(e) {
    e.preventDefault()
    $('.dots__item-link').removeClass('dots__item-link--active')
    $('.futbolki__item').removeClass('futbolki__item--show')
    $(this).addClass('dots__item-link--active')
    $($(this).attr('href')).addClass('futbolki__item--show')
})