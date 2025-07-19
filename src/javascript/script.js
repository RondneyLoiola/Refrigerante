let list = document.querySelectorAll(".item")
let next = document.getElementById("next")
let prev = document.getElementById("prev")

let count = list.length //contar quantos elementos tem na 'list', lenght = 3
let active = 0
//count -1 = list.length - 1 => count = 2


next.onclick = () => {
    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    //se o active for maior ou igual a 2(count-1), ele vai voltar pro 0, se ele não for maior ou igual a 2(count-1), ele vai somar + 1 até chegar em 2(count-1)
    active = active >= count - 1 ? 0 : active + 1
    list[active].classList.add("active")
}


prev.onclick = () => {
    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    //se o active for maior que zero, ele vai subtrair por 1 até chegar em zero, se não for maior que zero, ou igual a zero, ele vai voltar pro 2(count-1)
    active = active <= 0 ? count - 1 : active - 1
    list[active].classList.add("active")
}
