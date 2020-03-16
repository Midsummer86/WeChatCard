var btn = document.querySelector(".button")
var alert = document.querySelector(".alert")
var footer = document.querySelector(".footer")
var mask = document.querySelector(".mask")
var body = document.querySelector("body")
var input = document.getElementById("input")
btn.onclick = function(){
    input.style.display='block'
    alert.style.display='block'
    mask.style.display='block'
    body.style.position='fixed'
    alert.classList.add('donghua')
    input.select() // 选中文本
    document.execCommand("copy")
}
footer.onclick = function(){
    input.style.display='none'
    alert.style.display='none'
    mask.style.display='none'
    window.location.href="weixin://";
    body.style.position='static'
}
mask.onclick = function(){
    input.style.display='none'
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

// 屏幕固定
// function toggleBody(isPin){
//     if(isPin){
//         document.body.style.height = '100vh'
//         document.body.style['overflow-y'] = 'hidden'
//     }
//     else{
//         document.body.style.height = 'unset'
//         document.body.style['overflow-y'] = 'auto'
//     }
// }