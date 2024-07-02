
let player = "x"

let gaveOver = true


function reset() {
    location.reload()
}

function plyerWin() {
    let col_1 = document.getElementById('col-1').textContent == player
    let col_2 = document.getElementById('col-2').textContent == player
    let col_3 = document.getElementById('col-3').textContent == player
    let col_4 = document.getElementById('col-4').textContent == player
    let col_5 = document.getElementById('col-5').textContent == player
    let col_6 = document.getElementById('col-6').textContent == player
    let col_7 = document.getElementById('col-7').textContent == player
    let col_8 = document.getElementById('col-8').textContent == player
    let col_9 = document.getElementById('col-9').textContent == player



    let column1 = document.getElementById('col-1')
    let column2 = document.getElementById('col-2')
    let column3 = document.getElementById('col-3')
    let column4 = document.getElementById('col-4')
    let column5 = document.getElementById('col-5')
    let column6 = document.getElementById('col-6')
    let column7 = document.getElementById('col-7')
    let column8 = document.getElementById('col-8')
    let column9 = document.getElementById('col-9')

    let status = document.getElementById('game_status')
    let btn = document.getElementById('button')

  


    if (col_1 == col_2 && col_1 == col_3 && col_1 != "") {
       
        console.log("you won");
        column1.classList.add('red')
        column2.classList.add('red')
        column3.classList.add('red')
        status.textContent = `${column1.textContent} is won`
        btn.style.display = "block"
       


        // col4 col 5 col 6
    } else if (col_4 == col_5 && col_4 == col_6 && col_4 != "") {
       
        column4.classList.add('red')
        column5.classList.add('red')
        column6.classList.add('red')
        status.textContent = `${column4.textContent} is won`
        btn.style.display = "block"
        
    }

    else if (col_7 == col_8 && col_7 == col_9 && col_7 != "") {
        console.log("you won");
        column7.classList.add('red')
        column8.classList.add('red')
        column9.classList.add('red')
        status.textContent = `${column7.textContent} is won`
        btn.style.display = "block"
    }
    else if (col_1 == col_4 && col_1 == col_7 && col_1 != "") {
        console.log("you won");
        column1.classList.add('red')
        column4.classList.add('red')
        column7.classList.add('red')
        status.textContent = `${column1.textContent} is won`
        btn.style.display = "block"
    }
    else if (col_2 == col_5 && col_2 == col_8 && col_2 != "") {
        console.log("you won");
        column2.classList.add('red')
        column5.classList.add('red')
        column8.classList.add('red')
        status.textContent = `${column2.textContent} is won`
        btn.style.display = "block"
    }

    else if (col_3 == col_6 && col_3 == col_9 && col_3 != "") {
        console.log("you won");
        column3.classList.add('red')
        column6.classList.add('red')
        column9.classList.add('red')
        status.textContent = `${column3.textContent} is won`
       btn.style.display = "block"
    }

    else if (col_1 == col_5 && col_5 == col_9 && col_1 != "") {
        console.log("you won");
        column1.classList.add('red')
        column5.classList.add('red')
        column9.classList.add('red')
        status.textContent = `${column1.textContent} is won`
       btn.style.display = "block"
    }

    else if (col_3 == col_5 && col_3 == col_7 && col_3 != "") {
        console.log("you won");
        column3.classList.add('red')
        column5.classList.add('red')
        column7.classList.add('red')
        status.textContent = `${column3.textContent} is won`
        btn.style.display = "block"
    } 




    else {
        console.log("match draw");
    }

}

function clicked(column) {
    let col = document.getElementById('col-' + column)

    if (col.textContent == "") {
        col.textContent = player
        plyerWin()
        if (player == "x") {

            player = "o"
        } else {
            player = "x"
        }


    } else {
        alert('column not empty')
    }
}