let temperature = 0
basic.forever(function () {
    temperature = dstemp.celsius(DigitalPin.P0)
    if (temperature > -300) {
        basic.showNumber(temperature)
        basic.pause(1000)
    }
})
