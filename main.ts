basic.forever(function () {
    for (let j = 0; j <= 4; j++) {
        for (let I = 0; I <= j; I++) {
            led.plot(4 + I - j, 0 + 0)
        }
    }
})
