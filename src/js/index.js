alert("码云Git玩一下")

/*
     1.事件绑定和元素点击事件：window.onload .onclick
 */

let box = document.querySelector(".box")
let p = document.getElementsByTagName('p')
let btn = document.querySelector('#clr')

// 绑定事件：绑定加载信息
window.onload = function () {
    box.innerHTML += "<h2>页面已加载完毕！可以点击！</h2>"
}
// 点击事件：点击显示信息
box.onclick = function () {
    box.innerHTML += "<p>哎呀！我被点击了</p>"
    console.log(p.length)
}
// 撤回一条添加过的信息
btn.onclick = function () {
    if (p.length > 0) {
        box.removeChild(box.childNodes[box.childNodes.length - 1])
        console.log(p.length)
    }
    
}