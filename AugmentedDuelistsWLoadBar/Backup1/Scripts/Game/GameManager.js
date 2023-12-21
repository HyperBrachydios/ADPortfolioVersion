// -----JS CODE-----
//@input Asset.ObjectPrefab[] M;

//@input Component.Script Player1;
//@input Component.Script Player2;


//@input Component.Script[] MonsterInfo;
//@input Component.Script UI;
var Turn = 1;
script.Player1.api.SetMonster(script.MonsterInfo[0]);
script.Player2.api.SetMonster(script.MonsterInfo[1]);
script.UI.api.UpdateUI(Turn, script.Player1.api.GetHealth(), script.Player1.api.GetMaxHealth(), script.Player2.api.GetHealth(), script.Player2.api.GetMaxHealth());

script.api.SelectMove = function (card) {
    if (card < 4) {

        if (Turn % 2 != 0) {
            //player 1 attacks, player 2 receives the attack
            //if player 2 dies then sort that out here
        }
        else {

        }
    }
    else {

        if (Turn % 2 != 0) {
            script.Player1.api.SwapMonster();
        }        else {

            script.Player2.api.SwapMonster();
        }

    }

    Turn++;
}

script.api.SelectMonster = function (card) {
    //check if player 1 has a monster first, if not then select that
    //the players have to do it in order when selecting both. Player 1 first, then player 2. This shouldn't take up a turn.
    if (!script.Player1.HasMonster) {
        //have a pop up on screen to confirm it
    }
    else if (!script.Player2.HasMonster) {

    }

    //if it's not either of these then it should ignore it
}