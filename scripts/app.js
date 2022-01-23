const toggleSidebar = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const mainNav = document.querySelector(".main-nav");
const sideBarBtnClose = document.querySelector(".sidebar-btn-close");
const sideBuy = document.querySelector(".sidebar-buy");
const sideRent = document.querySelector(".sidebar-rent");
const sideSell = document.querySelector(".sidebar-sell");






toggleSidebar.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
})

sideBarBtnClose.addEventListener('click', () => {
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
    }
})

sideBuy.addEventListener('click', () => {
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
    }
})

sideRent.addEventListener('click', () => {
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
    }
})

sideSell.addEventListener('click', () => {
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
    }
})