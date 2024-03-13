// Når du trykker knapp A på micro:bit så gjennomføres denne koden.
input.onButtonPressed(Button.A, function () {
    // Alle de 12 LED-lysene på bit:bot skrus på med grønn farge
    bitbot.setLedColor(0x00FF00)
    // bit:bot kjører fremover med 100% fart (så fort som motorene kan gå) i 1000 millisekunder og stopper før den går videre i programmet. 
    bitbot.goms(BBDirection.Forward, 100, 1000)
    // bit:bot snur til venstre ved å kjøre venstre hjul bakover og høyre hjul fremover med fart 25%. Dette gjøres i 500 millisekunder før motorene stopper.
    // 
    bitbot.rotatems(BBRobotDirection.Left, 25, 500)
    bitbot.setLedColor(0xFF0000)
})
basic.forever(function () {
	
})
