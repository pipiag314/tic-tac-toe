const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")

let enteredSigns = [...Array(9)];

const player1sign = "❌";
const player2sign = "⭕";

const cubes = document.querySelectorAll(".cube");
let changeSignWhenClick = true; // ? player 1 : player 2 

player1.style.fontSize = "1.3rem";


cubes.forEach((cube, index) => {
  cube.addEventListener("click", (event) => {
    if (changeSignWhenClick && cube.innerHTML.length == 0) {
      cube.innerHTML = player1sign;
      enteredSigns[index] = player1sign
      player1.style.fontSize = "1rem"
      player2.style.fontSize = "1.3rem"
      won(enteredSigns, player1sign)
    } else if(cube.innerHTML.length == 0) {
      cube.innerHTML = player2sign;
      enteredSigns[index] = player2sign
      player2.style.fontSize = "1rem"
      player1.style.fontSize = "1.3rem"
      won(enteredSigns, player2sign)
    }
    changeSignWhenClick = !changeSignWhenClick;
  });
});



function won(array, sign) {

    const allEqual = arr => arr.every(n => n === sign)
    
    const hTop = allEqual(array.slice(0, 3))
    const hMiddle = allEqual(array.slice(3, 6))
    const hBottom = allEqual(array.slice(6))

    const vLeft = allEqual([array[0], array[3], array[6]])
    const vMiddle = allEqual([array[1], array[4], array[7]])
    const vRight = allEqual([array[2], array[5], array[8]])

    const diagonal1 = allEqual([array[0], array[4], array[8]])
    const diagonal2 = allEqual([array[2], array[4], array[6]])


    if(hTop || hMiddle || hBottom || vLeft || vMiddle || vRight || diagonal1 || diagonal2) {
        if(sign == player1sign) {
            alert("Player 1 won")
        } else {
            alert("Player 2 won")
        }
        cubes.forEach(cube => {
            cube.innerHTML = "";
        })
        enteredSigns = [...Array(9)]
    }
}