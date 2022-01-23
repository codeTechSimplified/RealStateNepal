const toggleSidebar = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const mainNav = document.querySelector(".main-nav");
const sideBarBtnClose = document.querySelector(".sidebar-btn-close");
const sideBuy = document.querySelector(".sidebar-buy");
const sideRent = document.querySelector(".sidebar-rent");
const sideSell = document.querySelector(".sidebar-sell");
//buy-home
const selectPrice = document.querySelector(".select-price");
const priceRangeSubMenu = document.querySelector(".price-range-submenu");
const priceOk = document.querySelector(".price-ok");
const priceCancel = document.querySelector(".price-cancel");
const priceRangeAnyPrice = document.querySelector(".price-range-any-price");
const highPrice = document.querySelector(".high-price");
const lowPrice = document.querySelector(".low-price");








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

selectPrice.addEventListener('click', () => {
    if (priceRangeSubMenu.style.display === 'none') {
        priceRangeSubMenu.style.display = 'block';
    } else if (priceRangeSubMenu.style.display = 'block') {
        priceRangeSubMenu.style.display = 'none';
    } else {
        priceRangeSubMenu.style.display = 'none';
    }
})

priceOk.addEventListener('click', () => {
    if (highPrice != 0 && lowPrice != 0) {
        selectPrice.innerText = `${lowPrice.value}-${highPrice.value}`;
    } else {
        selectPrice.innerText = "Select Price";
    }
    if (priceRangeSubMenu.style.display === 'block') {
        priceRangeSubMenu.style.display = 'none';
    } else {
        priceRangeSubMenu.style.display = 'none';
    }
})

priceCancel.addEventListener('click', () => {
    if (priceRangeSubMenu.style.display === 'block') {
        priceRangeSubMenu.style.display = 'none';
    } else {
        priceRangeSubMenu.style.display = 'none';
    }
})

priceRangeAnyPrice.addEventListener('click', () => {
    selectPrice.innerText = "All Prices";
    if (priceRangeSubMenu.style.display === 'block') {
        priceRangeSubMenu.style.display = 'none';
    } else {
        priceRangeSubMenu.style.display = 'none';
    }

})