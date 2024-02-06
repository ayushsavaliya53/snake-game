document.getElementById('snake').innerHTML += '<div class="snake-body"></div>'

let mainbox = document.getElementById('mainbox')
let snake = document.getElementById('snake')
let sBody = document.getElementsByClassName('snake-body')
let fruit = document.getElementById('fruit')
let len = sBody.length
let rtop = parseInt(Math.random() * 13) * 50
let rleft = parseInt(Math.random() * 13) * 50
let startUp, startDown, startRight, startLeft;

fruit.style.top = rtop + 'px'
fruit.style.left = rleft + 'px'
sBody[0].style.top = '0px'
sBody[0].style.left = '0px'

document.body.addEventListener('keydown', function(eve) {
  switch (eve.key) {
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
  }
})

console.log(fruit.style.top)
console.log(fruit.style.left)
let moveDown = () => {
  clearInterval(startUp)
  clearInterval(startLeft)
  clearInterval(startRight)
  if (sBody[0].style.top == fruit.style.top && sBody[0].style.left == fruit.style.left) {
    snake.innerHTML += '<div class="snake-body"></div>'
    sBody[len - 1].style.top = '0px'
    sBody[len - 1].style.left = '0px'
  }
  startDown = setInterval(
    () => {
      for (let i = 0; i < len; i++) {
        sBody[i].style.top = (parseInt(sBody[i].style.top.slice(0, -2)) + 50) + 'px'
      }
    }, 200)
}
let moveUp = () => {
  clearInterval(startDown)
  clearInterval(startLeft)
  clearInterval(startRight)
  if (sBody[0].style.top == fruit.style.top && sBody[0].style.left == fruit.style.left) {
    snake.innerHTML += '<div class="snake-body"></div>'

  }
  startUp = setInterval(
    () => {
      for (let i = 0; i < len; i++) {
        sBody[i].style.top = (parseInt(sBody[i].style.top.slice(0, -2)) - 50) + 'px'
      }
    }, 200)
}
let moveRight = () => {
  clearInterval(startUp)
  clearInterval(startDown)
  clearInterval(startLeft)
  if (sBody[0].style.top == fruit.style.top && sBody[0].style.left == fruit.style.left) {
    snake.innerHTML += '<div class="snake-body"></div>'
  }
  startRight = setInterval(
    () => {
      for (let i = 0; i < len; i++) {
        sBody[i].style.left = (parseInt(sBody[i].style.left.slice(0, -2)) + 50) + 'px'
      }
    }, 200)
}
let moveLeft = () => {
  clearInterval(startUp)
  clearInterval(startDown)
  clearInterval(startRight)
  if (sBody[0].style.top == fruit.style.top && sBody[0].style.left == fruit.style.left) {
    snake.innerHTML += '<div class="snake-body"></div>'
  }
  startLeft = setInterval(
    () => {
      for (let i = 0; i < len; i++) {
        sBody[i].style.left = (parseInt(sBody[i].style.left.slice(0, -2)) - 50) + 'px'
      }
    }, 200)
}
