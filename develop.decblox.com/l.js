setTimeout(() => {
    libspin()
}, 1000)

function libspin() {
   const maindata = document.querySelector('.main-lib')

   maindata.innerHTML = "<div class='search-area'><input placeholder='🔍Search' class='search-bar'><div class='search-btn'></div></div><div class='lib-models'><h3 class='ssl-blue-text'>MODELS</h3><p class='ssl sr-new-market'>Showing Results</p><div class='m-m-a' style='display: flex;'><div class='lib-models'><img src='https://tr.rbxcdn.com/5af2da6331f68ee249b9993b4856da45/250/250/Model/Png' style='width: 190px;border: 1px solid rgb(200,200,200);'><p class='ssl'>R6 Dummy</p><p class='ssl-price'>FREE</p></div><div class='lib-models'><img src='https://tr.rbxcdn.com/598d382e8a66f3ab72127765e0ac8f30/250/250/Model/Png' style='width: 190px;border: 1px solid rgb(200,200,200);'><p class='ssl'>Neutral Spawn Location</p><p class='ssl-price'>FREE</p></div><div class='lib-models'><img src='https://tr.rbxcdn.com/5668798b7f64dad7e663eeaafb696cf6/250/250/Model/Png' style='width: 190px;border: 1px solid rgb(200,200,200);'><p class='ssl'>HD Admin</p><p class='ssl-price'>FREE</p></div></div></div>"
   maindata.classList.remove('dev-spinner')
}
