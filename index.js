let qrimg  = document.getElementById("qrimg");
let imgbox = document.getElementById("imgBox");
let qrtext = document.getElementById("qrtext");

function createQr(){

    if(qrtext.value == ""){
        alert("Enter some text")
    }
    else{
    
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`;
    qrimg.src = url;
    imgbox.classList.add("show-img");
    }
}