setTimeout(() => {
    friendspin()
}, 1000)

function friendspin() {
   const maindata = document.querySelector('.main-list')

   maindata.innerHTML = "<div class='friend-id' style='width: 100px;height: fit-content;padding: 2px'><img src='tr.dcblx.com/freind1.png' style='width: 100px;border-radius: 100px;background-color: rgb(180,180,180);'><a href='' style='color: black;text-align: center;'>mustaf16</a></div><div class='friend-id' style='width: 100px;height: fit-content;padding: 2px'><img src='tr.dcblx.com/friend2.png' style='width: 100px;border-radius: 100px;background-color: rgb(180,180,180);'><a href='' style='color: black;text-align: center;'>OrdinaryTeapot</a></div><div class='friend-id' style='width: 100px;height: fit-content;padding: 2px'><img src='tr.dcblx.com/friend3.png' style='width: 100px;border-radius: 100px;background-color: rgb(180,180,180);'><a href='' style='color: black;text-align: center;'>dragonSlayer</a></div><div class='friend-id' style='width: 100px;height: fit-content;padding: 2px'><img src='tr.dcblx.com/friend4.png' style='width: 100px;border-radius: 100px;background-color: rgb(180,180,180);'><a href='' style='color: black;text-align: center;'>Icewhiz</a></div>"
   maindata.classList.remove('dev-spinner')
}