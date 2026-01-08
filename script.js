/*function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  */


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleSubMenu(subMenuId) {
  // 1. Find the specific sub-menu (e.g., the Portfolio list)
  const subMenu = document.getElementById(subMenuId);
  
  // 2. Toggle the visibility class
  subMenu.classList.toggle("open-submenu");

  // 3. OPTIONAL: Make the main menu grow to fit the new content
  // This fixes the issue where content gets cut off at the bottom
  const mainMenu = document.querySelector(".menu-links");
  mainMenu.style.maxHeight = "1000px"; 
}
