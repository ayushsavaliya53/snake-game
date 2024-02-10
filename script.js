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
let prevDir = ''
let curDir = ''
let score = 0
let speed = 100
let gameOver = false

fruit.style.top = rtop + 'px'
fruit.style.left = rleft + 'px'
sBody[0].style.top = '0px'
sBody[0].style.left = '0px'

document.body.addEventListener('keydown', function(eve) {
  switch (eve.key) {
    case "ArrowDown":
      if (!uppressed && !downpressed) {
        prevDir = curDir
        curDir = 'down'
        clearInterval(startLeft)
        clearInterval(startRight)
        leftpressed = false
        rightpressed = false
        downpressed = true
        if (prevDir && len > 2) {
          if (prevDir == 'left') {
            moveLeft('dec', 1, len - 1)
            moveDown('inc', 0, 1)
          }
          else {
            moveRight('dec', 1, len - 1)
            moveDown('inc', 0, 1)
          }
        }
        else {
          moveDown();
        }
      }
      break;
    case "ArrowUp":
      if (!uppressed && !downpressed) {
        prevDir = curDir
        curDir = 'up'
        clearInterval(startLeft)
        clearInterval(startRight)
        leftpressed = false
        rightpressed = false
        uppressed = true
        if (prevDir && len > 2) {
          if (prevDir == 'left') {
            moveLeft('dec', 1, len - 1)
            moveUp('inc', 0, 1)
          }
          else {
            moveRight('dec', 1, len - 1)
            moveUp('inc', 0, 1)
          }
        }
        else {
          moveUp();
        }
      }
      break;
    case "ArrowLeft":
      if (!rightpressed && !leftpressed) {
        prevDir = curDir
        curDir = 'left'
        clearInterval(startUp)
        clearInterval(startDown)
        uppressed = false
        downpressed = false
        leftpressed = true
        if (prevDir && len > 2) {
          if (prevDir == 'up') {
            moveUp('dec', 1, len - 1)
            moveLeft('inc', 0, 1)
          }
          else {
            moveDown('dec', 1, len - 1)
            moveLeft('inc', 0, 1)
          }
        }
        else {
          moveLeft();
        }
      }
      break;
    case "ArrowRight":
      if (!rightpressed && !leftpressed) {
        prevDir = curDir
        curDir = 'right'
        clearInterval(startUp)
        clearInterval(startDown)
        uppressed = false
        downpressed = false
        rightpressed = true
        if (prevDir && len > 2) {
          if (prevDir == 'up') {
            moveUp('dec', 1, len - 1)
            moveRight('inc', 0, 1)
          }
          else {
            moveDown('dec', 1, len - 1)
            moveRight('inc', 0, 1)
          }
        }
        else {
          moveRight();
        }
      }
      break;
  }
})

let moveDown = (lim, lwrind = 0, hrind = len - 1) => {
  if (downpressed || lim) {
    if (sBody[0].style.top.slice(0, -2) < 600) {
      startDown = setTimeout(() => {
        for (i = lwrind; i <= hrind; i++) {
          sBody[i].style.top = parseInt(sBody[i].style.top.slice(0, -2)) + 50 + 'px'
        }
        if (eat()) {
          sBody[0].style.top = parseInt(sBody[1].style.top.slice(0, -2)) + 50 + 'px'
          sBody[0].style.left = sBody[1].style.left
        }
      }, 500)
      if (lim) {
        if (lim == 'dec') {

        }
      }
    } else { downpressed = false }

  }

}
let moveUp = (lim, lwrind = 0, hrind = len - 1) => {
  if (uppressed || lim) {
    if (sBody[0].style.top.slice(0, -2) > 0) {
      console.log(123)
      startUp = setTimeout(() => {
        for (i = lwrind; i <= hrind; i++) {
          sBody[i].style.top = parseInt(sBody[i].style.top.slice(0, -2)) - 50 + 'px'
        }
        if (eat()) {
          sBody[0].style.top = parseInt(sBody[1].style.top.slice(0, -2)) - 50 + 'px'
          sBody[0].style.left = sBody[1].style.left
        }
      }, 500)
    } else { uppressed = false }
  }
}
let moveRight = (lim, lwrind = 0, hrind = len - 1) => {
  if (rightpressed || lim) {
    if (sBody[0].style.left.slice(0, -2) < 600) {
      startRight = setTimeout(() => {
        for (i = lwrind; i <= hrind; i++) {
          sBody[i].style.left = parseInt(sBody[i].style.left.slice(0, -2)) + 50 + 'px'
        }
        if (eat()) {
          sBody[0].style.left = parseInt(sBody[1].style.left.slice(0, -2)) + 50 + 'px'
          sBody[0].style.top = sBody[1].style.top
        }
      }, 500)
    } else { rightpressed = false }
  }
}
let moveLeft = (lim, lwrind = 0, hrind = len - 1) => {
  if (leftpressed || lim) {
    if (sBody[0].style.left.slice(0, -2) > 0) {
      startLeft = setTimeout(() => {
        for (i = lwrind; i <= hrind; i++) {
          sBody[i].style.left = parseInt(sBody[i].style.left.slice(0, -2)) - 50 + 'px'
        }
        if (eat()) {
          sBody[0].style.left = parseInt(sBody[1].style.left.slice(0, -2)) - 50 + 'px'
          sBody[0].style.top = sBody[1].style.top
        }
      }, 500)
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