
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.setStatusLight(StatusLight.RedFlash)
    brick.showString("Hello world", 1)
    brick.showString("Everything Is Awesome!", 2)
    brick.showString("jk lol", 3)
})