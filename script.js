window.addEventListener('load', ()=>{
  const button = document.getElementById('menu-icon');
  const menu = document.getElementById('menu')
  console.log(menu)
  console.log(button)
  button.addEventListener('click', ()=>{
    if(menu.classList.contains("active")){
      menu.classList.remove("active")
    } else {
      menu.classList.add("active")
    }
  })
})