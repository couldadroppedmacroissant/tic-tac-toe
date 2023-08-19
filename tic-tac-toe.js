let c1 = document.querySelector(".cell1")
let c2 = document.querySelector(".cell2")
let c3 = document.querySelector(".cell3")
let c4 = document.querySelector(".cell4")
let c5 = document.querySelector(".cell5")
let c6 = document.querySelector(".cell6")
let c7 = document.querySelector(".cell7")
let c8 = document.querySelector(".cell8")
let c9 = document.querySelector(".cell9")
let cell = document.querySelectorAll(".cell")
let cardWrapper = document.querySelector(".finalCardWrapper")
let card = document.querySelector(".finalWrapper")
let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let tie = document.querySelector('.tie')
let cellArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9]
let userArray = []
let result = document.querySelector(".result") 
let count = 0;
cell.forEach(element => {
    if(cell.length != 0 && cellArray.length != 0 && element == element){
        element.addEventListener("click", ()=>{
            if(count == 0 && element.value !== 'X'){
                element.innerHTML = "O";
                element.value = "O"
                userArray.push(element)
                count = 1;
            }
            if(count == 1) {
                rand = (Math.random()*8).toFixed()
                console.log(rand)
                while (true) {
                    rand = (Math.random() * 8).toFixed()
                    console.log(rand)
                    if(cellArray[rand].value == undefined){
                        break
                    }
                }
                cellArray[rand].innerHTML = "X";
                cellArray[rand].value = "X";
                count = 0;
            }
            console.log(element.value)
            for (i = 0; i < userArray.length; i++) {
                for (j = 0; j < userArray.lengt; j++){

                }
            }
            if(cellArray[0].value == "O" && cellArray[1].value == "O" && cellArray[2].value == "O"){
            }
        })
    }
})
console.log((Math.floor(8 / 3))) // row check
console.log(((8 % 3))) // column check
// 1 2 3
// 4 5 6 
// 7 8 9

// 0 1 2
// 3 4 5
// 6 7 8