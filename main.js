const btnmobile = document.getElementById('btn-menu')
function toggleMenu() {
  const nav = document.getElementById('nav-lateral')
  nav.classList.toggle('active')
}

btnmobile.addEventListener('click', toggleMenu)



const product = document.getElementById('product')

function toggleList() {
  const list = document.getElementById('list-products')
  list.classList.toggle('active')
}

product.addEventListener('click', toggleList)