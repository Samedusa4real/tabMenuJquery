// JS SECTION STARTS

// const buttons = document.querySelectorAll(".tab-menu button")

// const firstTab = document.querySelector("#tab1")
// const secondTab = document.querySelector("#tab2")
// const thirdTab = document.querySelector("#tab3")


// buttons.forEach(button => {
//     const tab = button.getAttribute("data-tab")
//     console.log(tab);
//     button.addEventListener("click", function(){
//         if(tab === firstTab.id){
//             firstTab.classList.add("active")
//             thirdTab.classList.remove("active")
//             secondTab.classList.remove("active")
//             button.classList.add("active")
//             button.nextElementSibling.classList.remove("active")
//         }
//         else if(tab === secondTab.id){
//             firstTab.classList.remove("active")
//             thirdTab.classList.remove("active")
//             secondTab.classList.add("active")
//             button.classList.add("active")

//             button.nextElementSibling.classList.remove("active")
//             button.previousElementSibling.classList.remove("active")
//         }
//         else if(tab === thirdTab.id){
//             firstTab.classList.remove("active")
//             secondTab.classList.remove("active")
//             thirdTab.classList.add("active")
//             button.classList.add("active")

//             button.previousElementSibling.classList.remove("active")
//         }
//     })
// })

// JS SECTION ENDS

// JQUERY SECTION STARTS


$(document).ready(function () {
    const buttons = $(".tab-menu button")

    const firstTab = $("#tab1")
    const secondTab = $("#tab2")
    const thirdTab = $("#tab3")

    buttons.each(function() {
        const tab = $(this).attr("data-tab")
        $(this).click(function() {
            if (tab === firstTab[0].id) {
                firstTab.addClass("active")
                thirdTab.removeClass("active")
                secondTab.removeClass("active")
                $(this).addClass("active")
                $(this).next().removeClass("active")
            }
            else if (tab === secondTab[0].id) {
                firstTab.removeClass("active")
                thirdTab.removeClass("active")
                secondTab.addClass("active")
                $(this).addClass("active")

                $(this).next().removeClass("active")
                $(this).prev().removeClass("active")
            }
            else if (tab === thirdTab[0].id) {
                firstTab.removeClass("active")
                secondTab.removeClass("active")
                thirdTab.addClass("active")
                $(this).addClass("active")

                $(this).prev().removeClass("active")
            }
        })
    })

})

// JQUERY SECTION ENDS
