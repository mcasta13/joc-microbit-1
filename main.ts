input.onButtonPressed(Button.A, function () {
    objeto.move(1)
    objeto.ifOnEdgeBounce()
})
input.onButtonPressed(Button.B, function () {
    objeto.turn(Direction.Right, 90)
})
let objeto: game.LedSprite = null
objeto = game.createSprite(2, 4)
basic.forever(function () {
    while (true) {
        objeto.move(4)
        objeto.ifOnEdgeBounce()
        objeto.turn(Direction.Right, randint(0, 7) * 45)
        basic.pause(500)
    }
})
