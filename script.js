

let box = document.querySelectorAll(".box")

let box_txt = document.querySelectorAll(".box_txt")


for (let i = 0; i < box.length; i++) {

    box[i].addEventListener("click", function () {


        box_txt.forEach(function (z) {
            z.style.height = 0 + "px"
        })


        if ( box_txt[i].classList.contains("active")) {
            box_txt[i].classList.remove("active")
            box_txt[i].style.height = 0 + "px"
        }
        else{
            box_txt[i].classList.add("active")
            box_txt[i].style.height = box_txt[i].scrollHeight + "px"
        }










    })

}


