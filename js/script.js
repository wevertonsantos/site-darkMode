let changeTheme = document.querySelector('#change')
let texto = document.querySelector('.txtTopo')
let img = document.querySelector('.imgDunk')

function darkMode(){
    document.body.classList.toggle('dark')
}

changeTheme.addEventListener("change", function(){
   darkMode()
})