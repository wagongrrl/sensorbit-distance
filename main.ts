let lightVal = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.EigthNote)
})
basic.forever(function () {
	
})
basic.forever(function () {
    lightVal = pins.analogReadPin(AnalogPin.P1)
    if (lightVal < 500) {
        music.playMelody("C5 A B G A F G E ", 120)
    } else {
        basic.showIcon(IconNames.No)
    }
})
