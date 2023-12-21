// -----JS CODE-----
//@input Component.Script P1Script;
//@input Component.Script P2Script;

//@input SceneObject WinScreen;
//@input Component.Text Player1;
//@input Component.Text Player2;

//@input Component.Text InstructionText;
//@input Component.Image InstructionButton;


var monstersDefeatedP1 = script.P1Script.api.GetDeadMonsters();
var monstersDefeatedP2 = script.P2Script.api.GetDeadMonsters();

if (monstersDefeatedP1 < 3 && monstersDefeatedP2 < 3) {
    script.WinScreen.enabled = false;
} else {
    //P2 Wins!
    if (monstersDefeatedP1 == 3) {
        print("Player 2 Wins!");
        script.Player1.enabled = false;
        script.WinScreen.enabled = true;
    }


    //P1 Wins!
    if (monstersDefeatedP2 == 3) {
        print("Player 1 Wins!")
        script.Player2.enabled = false;
        script.WinScreen.enabled = true;
    }
    
    
    //Turn off instructions
    script.InstructionText.enabled = false;
    script.InstructionButton.enabled = false;
}