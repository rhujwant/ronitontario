for (let index = 0; index < 10; index++) {
    led.plot(0, 3)
    led.plot(1, 1)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 1)
    led.plot(3, 4)
    led.plot(4, 3)
    basic.pause(200)
    led.unplot(1, 1)
    led.unplot(3, 1)
    basic.pause(200)
    led.plot(1, 1)
    led.plot(3, 1)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
for (let index = 0; index < 10; index++) {
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 4)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    led.plot(4, 4)
    led.plot(0, 1)
    led.plot(1, 0)
    led.plot(3, 0)
    led.plot(4, 1)
    basic.pause(200)
    led.unplot(1, 1)
    led.unplot(3, 1)
    basic.pause(200)
    led.plot(1, 1)
    led.plot(3, 1)
}
basic.forever(function () {
	
})
