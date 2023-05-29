let slider_items = document.querySelector('.slider-items')
let slider_control = document.querySelector('.slider-control')

function showSliderControl() {
    slider_control.style.cssText = `bottom: 0px;`
}

function hideSliderControl() {
    slider_control.style.cssText = `bottom: -60px;`
}

slider_items.addEventListener('mouseenter', showSliderControl)
slider_items.addEventListener('mouseleave', hideSliderControl)

slider_control.addEventListener('mouseenter', showSliderControl)
slider_control.addEventListener('mouseleave', hideSliderControl)

export { slider_items, slider_control }
