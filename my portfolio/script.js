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

}
// side menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycby2BFQZE1H0DD5mXG1EiXr-Hg7lzjZOtwHtrjgGHkfmWjdipQmkfS6rETWkMbx3Poj1/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {msg.innerHTML="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
// const certificates = [
//     { img: "images/ibm cloud.png", pdf: "images\ibm cloud computing.pdf" },
//     { img: "images/ibm html css.png", pdf: "images/intro to html css.pdf" },
//     // Add more certificates here
//   ];
  
//   const container = document.getElementById("certificates");
  
//   certificates.forEach(cert => {
//     const certDiv = document.createElement("div");
//     certDiv.className = "certificate";
  
//     const img = document.createElement("img");
//     img.src = cert.img;
//     img.alt = "Certificate Sample";
  
//     const link = document.createElement("a");
//     link.href = cert.pdf;
//     link.target = "_blank";
//     link.textContent = "View Full Certificate";
  
//     certDiv.appendChild(img);
//     certDiv.appendChild(link);
//     container.appendChild(certDiv);
//   });
  
