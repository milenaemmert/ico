export let menuState = 0

export const openMenu = (menu, shadow) => {
    if(menuState === 0 && window.innerWidth <= 840) {
        menu.classList.remove('--menu_mobile-closed')
        shadow.classList.remove('--invisible')
        menuState = 1
        document.activeElement.blur()
    }
}

export const closeMenu = (menu, shadow) => {
    if(menuState === 1) {
        menu.classList.add('--menu_mobile-closed')
        shadow.classList.add('--invisible')
        menuState = 0
        document.activeElement.blur()
    }
}

export const closeMenuQuery = (event, menu, shadow) => {
    if(event.matches && menuState === 1) {
        menu.classList.add('--menu_mobile-closed')
        shadow.classList.add('--invisible')
        menuState = 0
    }
}