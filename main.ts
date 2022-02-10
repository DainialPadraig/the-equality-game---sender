input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(0, 3))
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(1)
