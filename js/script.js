let changeTheme = document.querySelector('#change')

function darkMode(){
    document.body.classList.toggle('dark')
}

changeTheme.addEventListener("change", function(){
   darkMode()
})