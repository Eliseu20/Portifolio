// this var is for get the element by class cmenu
const get_cmenu = document.querySelector('input[class="cmenu"]').checked
console.log(get_cmenu)

const close_menu = document.querySelector('ul')

// this function is for close menu
close_menu.addEventListener('click', ()=> document.querySelector('input[class="cmenu"]').checked = false)

document.body.scroll= 'overflow-y: hidden;' ? get_cmenu == true : console.log('Não é possivel')

/*// this function is for delete the vertical scroll
const stop_scroll = () => {
    const get_cmenu = document.querySelector('input[class="cmenu"]').checked
    if  get_cmenu {
        document.html.style = 'overflow-y: hidden;'
     
    }
}
let htmlElement = document.documentElement;
stop_scroll()*/
