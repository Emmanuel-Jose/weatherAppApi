import '../css/menu.css'

// References
const btnMenu     = document.querySelector( '.temperature-search' )
const menu        = document.querySelector( '.menu' )
const btnMenuExit = document.querySelector( '.menu-exit' );

btnMenu.addEventListener( 'click', () => {
    menu.classList.remove( 'desactivated' );
})

btnMenuExit.addEventListener( 'click', () => {
    menu.classList.toggle( 'desactivated' );
})

const hey = () => {
    console.log( 'hey' )
}

export {
    hey
}