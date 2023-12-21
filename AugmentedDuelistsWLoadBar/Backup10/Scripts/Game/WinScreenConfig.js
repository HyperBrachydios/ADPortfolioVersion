// -----JS CODE-----
//@input Component.Script P1Script;
//@input Component.Script P2Script;

//@input SceneObject WinScreen;
//@input Component.Text Player1;
//@input Component.Text Player2;

var monstersLeftP1 = script.P1Script.api.GetDeadMonsters();
var monstersLeftP2 = script.P2Script.api.GetDeadMonsters();

script.Player2.enabled = false;
script.WinScreen.enabled = true;

if (monstersLeftP1 < 3 && monstersLeftP2 < 3) {
    script.WinScreen.enabled = false;
} else {
    //P2 Wins!
    if (monstersLeftP1 == 3) {
        script.Player1.enabled = false;
        script.WinScreen.enabled = true;
    }


    //P1 Wins!
    if (monstersLeftP2 == 0) {
        script.Player2.enabled = false;
        script.WinScreen.enabled = true;
    }
}