let mainbox = document.getElementById('mainbox')
let snake = document.getElementById('snake')
let sBody = document.getElementsByClassName('snake-body')
let fruit = document.getElementById('fruit')
let len = sBody.length
let rtop = parseInt(Math.random() * 13) * 50
let rleft = parseInt(Math.random() * 13) * 50
let startUp, startDown, startRight, startLeft;
let uppressed = false, downpressed = false, rightpressed = false, leftpressed = false

fruit.style.top = rtop + 'px'
fruit.style.left = rleft + 'px'
sBody[0].style.top = '0px'
sBody[0].style.left = '0px'

document.body.addEventListener('keydown', function(eve) {
  switch (eve.key) {
    case "ArrowDown":
      if (uppressed == false) {
        leftpressed = false
        rightpressed = false
        downpressed = true
        moveDown();
      }
      break;
    case "ArrowUp":
      if (downpressed == false) {
        leftpressed = false
        rightpressed = false
        uppressed = true
        moveUp();
      }
      break;
    case "ArrowLeft":
      if (rightpressed == false) {
        uppressed = false
        downpressed = false
        leftpressed = true
        moveLeft();
      }
      break;
    case "ArrowRight":
      if (leftpressed == false) {
        uppressed = false
        downpressed = false
        rightpressed = true
        moveRight();
      }
      break;
  }
})

let moveDown = (lwrind, hrind) => {

  if (downpressed) {
    if (sBody[0].style.top.slice(0, -2) < 600) {
      startDown = setTimeout(() => {
        sBody[0].style.top = parseInt(sBody[0].style.top.slice(0, -2)) + 50 + 'px'
        // if (eat()) {
        //   sBody[1].style.top = parseInt(sBody[0].style.top.slice(0, -2)) - 50 + 'px'
        //   sBody[1].style.left = sBody[0].style.left
        // }
        moveDown()
      }, 500)
    } else { downpressed = false }

  }

}
let moveUp = (lwrind, hrind) => {
  if (uppressed) {
    if (sBody[0].style.top.slice(0, -2) > 0) {
      startUp = setTimeout(() => {
        sBody[0].style.top = parseInt(sBody[0].style.top.slice(0, -2)) - 50 + 'px'
        // if (eat()) {
        //   sBody[1].style.top = parseInt(sBody[0].style.top.slice(0, -2)) + 50 + 'px'
        //   sBody[1].style.left = sBody[0].style.left
        // }
        moveUp()
      }, 500)
    } else { uppressed = false }
  }
}
let moveRight = (lwrind, hrind) => {
  if (rightpressed) {
    if (sBody[0].style.left.slice(0, -2) < 600) {
      startRight = setTimeout(() => {
        sBody[0].style.left = parseInt(sBody[0].style.left.slice(0, -2)) + 50 + 'px'
        // if (eat()) {
        //   sBody[1].style.left = parseInt(sBody[0].style.left.slice(0, -2)) - 50 + 'px'
        //   sBody[1].style.top = sBody[0].style.top
        // }
        moveRight()
      }, 500)
    } else { rightpressed = false }
  }
}
let moveLeft = (lwrind, hrind) => {
  if (leftpressed) {
    if (sBody[0].style.left.slice(0, -2) > 0) {
      startLeft = setTimeout(() => {
        sBody[0].style.left = parseInt(sBody[0].style.left.slice(0, -2)) - 50 + 'px'
        // if (eat()) {
        //   sBody[1].style.left = parseInt(sBody[0].style.left.slice(0, -2)) + 50 + 'px'
        //   sBody[1].style.top = sBody[0].style.top
        // }
        moveLeft()
      }, 500)
    } else { leftpressed = false }
  }
}

// let eat = () => {
//   if (sBody[0].style.top.slice(0, -2) == fruit.style.top.slice(0, -2) && sBody[0].style.left.slice(0, -2) == fruit.style.left.slice(0, -2)) {
//     fruit.style.top = rtop + 'px'
//     fruit.style.left = rleft + 'px'
//     len += 1
//     snake.insertBefore(sBody[0].cloneNode(true), sBody[0])
//     return true
//   }
// }