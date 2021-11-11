var content = document.querySelector(".content")
    
    content.addEventListener("mouseout",function(){
        // console.log("content")
            content.style.backgroundColor = "blue"
        })


    content.addEventListener("mouseleave",function(){
        // console.log("content")
            content.style.backgroundColor = "red"
        })

    content.addEventListener("mouseenter",function(){
        // console.log("content")
            content.style.backgroundColor = "yellow"
        })

    content.addEventListener("mouseup",function(){
        // console.log("content")
            content.style.backgroundColor = "green"
        })

    content.addEventListener("click",function(){
        // console.log("content")
        content.style.backgroundColor = "orange"
        })
        