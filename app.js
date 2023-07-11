/* 

Work to be done -

- change name to whatsappkaro
- make button green
- make input box selected color green
- makes links green
- add a blog section
- make it seo friendly
- include google ads


*/

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}


function sendToWhatsAppChat() {

    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('textMessage').value;

    let url =  'https://wa.me/' + phoneNumber + '?text=' + message

    window.open(url,'_blank');

    console.log(url)

}


