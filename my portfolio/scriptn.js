function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // for(tablink of tabcontainer){
    //     tablink.classlist.remove("active-link");
    // }
    document.querySelector(`[onclick="opentab('${tabname}')"]`).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    // Close the sidebar when a tab is clicked (for mobile view)
    closemenu();
}
// side menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {

    sidemenu.classList.add("active");
}
function closemenu() {
    
    sidemenu.classList.remove("active");
}
document.addEventListener('click',function (event){
    if(!sidemenu.contains(event.target)&& !event.target.matches('.fa-bars')){
        closemenu();
    }
});
// window.addEventListener('resize',function(){
//     if(this.window.innerWidth>768){
//         sidemenu.classList.remove("active");
//         sidemenu.style.right="0";
//     }
//     else{
//         sidemenu.style.right="-250px";
//     }
// });
const scriptURL = 'https://script.google.com/macros/s/AKfycby2BFQZE1H0DD5mXG1EiXr-Hg7lzjZOtwHtrjgGHkfmWjdipQmkfS6rETWkMbx3Poj1/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})