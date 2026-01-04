let mainContainer = document.querySelector(".main-container")


function createGrid(num){
    for(let i = 0 ;i < num*num; i++){
        let divCreated = document.createElement("div")
        divCreated.style.border = "1px solid black"
        divCreated.style.width   = `${500/num}px`
        divCreated.style.height = `${500/num}px`
        // divCreated.textContent= `${i}`

        divCreated.addEventListener("mouseenter", ()=>{
            divCreated.style.backgroundColor = "black"
        })

        mainContainer.appendChild(divCreated)
    }
}

createGrid(16)  
