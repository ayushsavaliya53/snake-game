let mainbox = document.getElementById('mainbox')
let snake = document.getElementById('snake')
let sBody = document.getElementsByClassName('snake-body')
let fruit = document.getElementById('fruit')
let len = sBody.length
let rtop = parseInt(Math.random() * 13) * 50
let rleft = parseInt(Math.random() * 13) * 50
let startUp, startDown, startRight, startLeft;
let uppressed = false, downpressed = false, rightpressed = false, leftpressed = false
let singleCell = true
fruit.style.top = rtop + 'px'
fruit.style.left = rleft + 'px'
sBody[0].style.top = '0px'
sBody[0].style.left = '0px'

document.body.addEventListener('keydown', function(eve) {
  switch (eve.key) {
    case "ArrowDown":
      if (!uppressed && !downpressed) {
        clearInterval(startLeft)
        clearInterval(startRight)
        leftpressed = false
        rightpressed = false
        downpressed = true
        moveDown();
      }
      break;
    case "ArrowUp":
      if (!uppressed && !downpressed) {
        clearInterval(startLeft)
        clearInterval(startRight)
        leftpressed = false
        rightpressed = false
        uppressed = true
        moveUp();
      }
      break;
    case "ArrowLeft":
      if (!rightpressed && !leftpressed) {
        clearInterval(startUp)
        clearInterval(startDown)
        uppressed = false
        downpressed = false
        leftpressed = true
        moveLeft();
      }
      break;
    case "ArrowRight":
      if (!rightpressed && !leftpressed) {
        clearInterval(startUp)
        clearInterval(startDown)
        uppressed = false
        downpressed = false
        rightpressed = true
        moveRight();
      }
      break;
  }
})

let moveDown = (lwrind = 0, hrind = len - 1) => {

  if (downpressed) {
    if (sBody[0].style.top.slice(0, -2) < 600) {
      if (singleCell) {
        startDown = setTimeout(() => {
          sBody[0].style.top = parseInt(sBody[0].style.top.slice(0, -2)) + 50 + 'px'
          if (eat()) {
            sBody[0].style.top = parseInt(sBody[1].style.top.slice(0, -2)) + 50 + 'px'
            sBody[0].style.left = sBody[1].style.left
          }
          moveDown()
        }, 500)
      }
      else {
        startDown = setTimeout(() => {
          for (i = lwrind; i <= hrind; i++) {
            sBody[i].style.top = parseInt(sBody[i].style.top.slice(0, -2)) + 50 + 'px'
          }
          if (eat()) {
            sBody[0].style.top = parseInt(sBody[1].style.top.slice(0, -2)) + 50 + 'px'
            sBody[0].style.left = sBody[1].style.left
          }
          // if (hrind < len - 1) {
          //   moveDown(0, hrind + 1)
          // } else {
          //   moveDown(0, hrind)
          // }
          moveDown(0, len - 1)
        }, 500)
      }
    } else { downpressed = false }

  }

}
let moveUp = (lwrind = 0, hrind = len - 1) => {
  if (uppressed) {
    if (sBody[0].style.top.slice(0, -2) > 0) {
      if (singleCell) {
        startUp = setTimeout(() => {
          sBody[0].style.top = parseInt(sBody[0].style.top.slice(0, -2)) - 50 + 'px'
          if (eat()) {
            sBody[0].style.top = parseInt(sBody[1].style.top.slice(0, -2)) - 50 + 'px'
            sBody[0].style.left = sBody[1].style.left
          }
          moveUp()
        }, 500)
      }
      else {
        console.log(123)
        startUp = setTimeout(() => {
          for (i = lwrind; i <= hrind; i++) {
            sBody[i].style.top = parseInt(sBody[i].style.top.slice(0, -2)) - 50 + 'px'
          }
          if (eat()) {
            sBody[0].style.top = parseInt(sBody[1].style.top.slice(0, -2)) - 50 + 'px'
            sBody[0].style.left = sBody[1].style.left
          }
          // if (hrind < len - 1) {
          //   moveUp(0, hrind + 1)
          // } else {
          //   moveUp(0, hrind)
          // }
          moveUp(0, len - 1)
        }, 500)
      }
    } else { uppressed = false }
  }
}
let moveRight = (lwrind = 0, hrind = len - 1) => {
  if (rightpressed) {
    if (sBody[0].style.left.slice(0, -2) < 600) {
      if (singleCell) {
        startRight = setTimeout(() => {
          sBody[0].style.left = parseInt(sBody[0].style.left.slice(0, -2)) + 50 + 'px'
          if (eat()) {
            sBody[0].style.left = parseInt(sBody[1].style.left.slice(0, -2)) + 50 + 'px'
            sBody[0].style.top = sBody[1].style.top
          }
          moveRight()
        }, 500)
      }
      else {
        startRight = setTimeout(() => {
          for (i = lwrind; i <= hrind; i++) {
            sBody[i].style.left = parseInt(sBody[i].style.left.slice(0, -2)) + 50 + 'px'
          }
          if (eat()) {
            sBody[0].style.left = parseInt(sBody[1].style.left.slice(0, -2)) + 50 + 'px'
            sBody[0].style.top = sBody[1].style.top
          }
          // if (hrind < len - 1) {
          //   moveRight(0, hrind + 1)
          // } else {
          //   moveRight(0, hrind)
          // }
          moveRight(0, len - 1)
        }, 500)
      }
    } else { rightpressed = false }
  }
}
let moveLeft = (lwrind = 0, hrind = len - 1) => {
  if (leftpressed) {
    if (sBody[0].style.left.slice(0, -2) > 0) {
      if (singleCell) {
        startLeft = setTimeout(() => {
          sBody[0].style.left = parseInt(sBody[0].style.left.slice(0, -2)) - 50 + 'px'
          if (eat()) {
            sBody[0].style.left = parseInt(sBody[1].style.left.slice(0, -2)) - 50 + 'px'
            sBody[0].style.top = sBody[1].style.top
          }
          moveLeft()
        }, 500)
      }
      else {
        startLeft = setTimeout(() => {
          for (i = lwrind; i <= hrind; i++) {
            sBody[i].style.left = parseInt(sBody[i].style.left.slice(0, -2)) - 50 + 'px'
          }
          if (eat()) {
            sBody[0].style.left = parseInt(sBody[1].style.left.slice(0, -2)) - 50 + 'px'
            sBody[0].style.top = sBody[1].style.top
          }
          // if (hrind < len - 1) {
          //   moveLeft(0, hrind + 1)
          // } else {
          //   moveLeft(0, hrind)
          // }
          moveLeft(0, len - 1)
        }, 500)
      }
    } else { leftpressed = false }
  }
}

let eat = () => {
  if (sBody[0].style.top.slice(0, -2) == fruit.style.top.slice(0, -2) && sBody[0].style.left.slice(0, -2) == fruit.style.left.slice(0, -2)) {
    singleCell = false
    len += 1
    snake.insertBefore(sBody[0].cloneNode(true), snake.firstElementChild)
    fruit.style.top = (parseInt(Math.random() * 13) * 50) + 'px'
    fruit.style.left = (parseInt(Math.random() * 13) * 50) + 'px'
    return true
  }
}