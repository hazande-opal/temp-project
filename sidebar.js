const hamburgerBtn = document.querySelector('.hamburger-menu');
const sideBar = document.querySelector('.sidebar-nav');
const closeSidebar = document.querySelector('.js-close-icon');

hamburgerBtn.onclick = function blobSidebar(){
    sideBar.style.display = "block";
}
closeSidebar.onclick = function closeBar (){
    sideBar.style.display = "none";
}