/* 

Work to be done -

- add a blog section
- make it seo friendly
- include google ads
- convert to pwa


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


