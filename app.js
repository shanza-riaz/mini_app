function bulbon(){
    let text = document.getElementById('bulbtitle')
    for(x=1; x<6; x++){
    let bid = document.getElementById('lightoff'.concat(x));

    if(bid.src.match('on')){
        bid.src= "off.png";
        text.innerHTML = "LIGHT OFF";
        text.style.color = "white";
    }
    else{
        bid.src = "on.png"
        document.getElementById('pp').style.textAlign = "center";
        document.getElementById('pp1').style.textAlign = "center";
        document.getElementById('pp2').style.textAlign = "center";
        document.getElementById('pp3').style.textAlign = "center";
        document.getElementById('pp4').style.textAlign = "center";
        text.innerHTML = "LIGHT ON";
        text.style.color = "yellow";
    }
}



}
