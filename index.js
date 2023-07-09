function sendToWhatsAppChat() {

    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('textMessage').value;

    let url =  'https://wa.me/' + phoneNumber + '?text=' + message

    window.open(url,'_blank');

    console.log(url)

}