var btn = document.querySelector(".button")
var alert = document.querySelector(".alert")
var footer = document.querySelector(".footer")
var mask = document.querySelector(".mask")
var body = document.querySelector("body")
var copy = document.getElementById("copy")
var wechat = document.getElementById("wechat")
btn.onclick = function(){
    alert.style.display='block'
    mask.style.display='block'
    body.style.position='fixed'
    alert.classList.add('donghua')
    copy.value = wechat.innerText
    copy.select() // 选中文本
    document.execCommand("copy")
}
footer.onclick = function(){
    alert.style.display='none'
    mask.style.display='none'
    window.location.href="weixin://";
    body.style.position='static'
}
mask.onclick = function(){
    alert.style.display='none'
    mask.style.display='none'
    body.style.position='static'
}

function touchs(e) {
    if(e.type === 'touchstart') {
        footer.style.background = 'rgb(230,230,230)'
    }else {
        footer.style.background = '#fff'
    }
}
footer.addEventListener('touchstart',touchs,false);
footer.addEventListener('touchend',touchs,false);