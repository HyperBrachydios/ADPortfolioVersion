// -----JS CODE-----
//@input Component.Script Player1;
//@input Component.Script Player2;

//@input Component.Script[] MonsterInfo;
//@input Component.Script UI;


//@input SceneObject P1MonsterContainer;
//@input SceneObject P2MonsterContainer;



var Turn = 1;
var P1MonsterIndex = 1;
var P2MonsterIndex = 1;
//script.Player1.api.SelectMonster(script.MonsterInfo[0]);
//script.Player2.api.SetMonster(script.MonsterInfo[0]);
script.UI.api.ShowInstructions();
script.UI.api.SetInstructions("Player 1, please scan a monster");
script.UI.api.UpdateUI(Turn, script.Player1.api.GetHealth(), script.Player1.api.GetMaxHealth(), script.Player2.api.GetHealth(), script.Player2.api.GetMaxHealth());

for (let i = 0; i < script.P1MonsterContainer.getChildrenCount(); ++i) {
    script.P1MonsterContainer.getChild(i).enabled = false;
}

//print(script.P1MonsterContainer.getChild(0).enabled;

//script.Player1.api.SetMonster(script.MonsterInfo[1]);
script.api.SelectMove = function (card) {
    //print(script.Player1.api.MonsterCheck());
    //print(script.Player2.api.MonsterCheck());
    script.UI.api.HideInstructions();
    if (script.Player1.api.MonsterCheck() && script.Player2.api.MonsterCheck()) {
        //print("turn is " + Turn);
        if (card < 3) {

            if (Turn % 2 != 0) {
                //print("Player1Attack " + card + " " + Turn);
                //player 1 attacks, player 2 receives the attack
                //if player 2 dies then sort that out here

                var anim = script.P1MonsterContainer.getChild(script.Player1.api.GetMI()).getChild(0).getChild(0).getComponent("Component.AnimationMixer");
                anim.start(anim.getLayers()[card].name, 0, 1);
                //script.P1MonsterContainer.getChild(script.Player1.api.GetMI()).getChild(0).getChild(0).getComponent("AnimationMixer").stop("");

                //script.P1MonsterContainer.getChild(card).getChild(0).getChild(0).getComponent("AnimationMixer").getLayer("SpinAttack").start(0,1);
                //print();
                //script.P1MonsterContainer.getChild(script.Player1.api.GetMI()).getChild(0).getChild(0).getComponent("AnimationMixer").getLayer("SpinAttack").resume();
                //print(script.P1MonsterContainer.getChild(card).getChild(0).getChild(0).start("float",0,1));


                var Atk = script.Player1.api.SelectAttack(card);
                //print("Selecting here");
                //Atk.api.GetModifier().Val = 1;
                //print("It's running once");
                //print(Atk.api.GetModifier().Val);



                if (Atk.api.GetAffectedByMod()) {
                    script.Player2.api.TakeDamage(Atk.api.GetAttackDamage() * script.Player1.api.GetAtkMod());
                }
                else {
                    script.Player2.api.TakeDamage(Atk.api.GetAttackDamage());
                }


                var Mod = Atk.api.GetModifier(script.Player1.api.GetMultiplierPlaces()[card]);
                if (Mod != -1) {
                    print(script.Player1.api.GetMultiplierPlaces());
                    script.Player1.api.GetMultiplierPlaces()[card] += 1;
                    if (Mod.ST) {
                        ApplyMod(Mod, script.Player1);
                    }
                    else {
                        ApplyMod(Mod, script.Player2);
                    }
                }

                //print(script.Player2.api.GetHealth());
            }
            else {

                /*print("Player2Attack " + card + " " + Turn);*/
                var anim = script.P2MonsterContainer.getChild(script.Player2.api.GetMI()).getChild(0).getChild(0).getComponent("Component.AnimationMixer");
                anim.start(anim.getLayers()[card].name, 0, 1);

                var Atk = script.Player2.api.SelectAttack(card);
                //print("Selecting here");
                //Atk.api.GetModifier().Val = 1;
                //print("It's running once");
                if (Atk.api.GetAffectedByMod()) {
                    script.Player1.api.TakeDamage(Atk.api.GetAttackDamage() * script.Player2.api.GetAtkMod());
                }
                else {
                    script.Player1.api.TakeDamage(Atk.api.GetAttackDamage());
                }
                //print(script.Player2.api.GetHealth());
                var Mod = Atk.api.GetModifier(script.Player2.api.GetMultiplierPlaces()[card]);
                if (Mod != -1) {

                    script.Player2.api.GetMultiplierPlaces()[card] += 1;
                    if (Mod.ST) {
                        ApplyMod(Mod, script.Player2);
                    }
                    else {
                        ApplyMod(Mod, script.Player1);
                    }
                }

            }


            if (!script.Player1.api.MonsterCheck()) {
                script.UI.api.ShowInstructions();
                script.UI.api.SetInstructions("Player 1, please scan a monster card");
                script.P1MonsterContainer.getChild(script.Player1.api.GetMI()).enabled = false;            
            }
            else if (!script.Player2.api.MonsterCheck()) {
                script.UI.api.ShowInstructions();
                script.UI.api.SetInstructions("Player 2, please scan a monster card");
                script.P2MonsterContainer.getChild(script.Player2.api.GetMI()).enabled = false;
            }
            else {

                script.UI.api.SetInstructions("Scan an action card");

                if (Turn < 3) {
                    script.UI.api.ShowInstructions();
                }
            }

            //script.P1MonsterContainer.getChild(script.Player1.api.GetMI()).getChild(0).getChild(0).getComponent("Component.AnimationMixer").start("Float", 0, 100);

        }
        else {

            if (Turn % 2 != 0) {
                script.Player1.api.RemoveMonster();
                script.P1MonsterContainer.getChild(script.Player1.api.GetMI()).enabled = false;
                script.UI.api.SetInstructions("Player 1, please scan a monster card");
                script.UI.api.ShowInstructions();
            }
            else {

                script.Player2.api.RemoveMonster();
                script.P2MonsterContainer.getChild(script.Player2.api.GetMI()).enabled = false;
                script.UI.api.SetInstructions("Player 2, please scan a monster card");
                script.UI.api.ShowInstructions();
            }

        }

        Turn++;
        script.UI.api.UpdateUI(Turn, script.Player1.api.GetHealth(), script.Player1.api.GetMaxHealth(), script.Player2.api.GetHealth(), script.Player2.api.GetMaxHealth());


        if (script.Player1.api.GetDeadMonsters() == 3 || script.Player2.api.GetDeadMonsters() == 3) {
            //script.UI.HideInstructions();
        }
    }
    else {
        print("Need both monsters");
    }

}
ApplyMod = function (M, T) {

    if (M.H) {
        //recover health
        print(M.Val);
        T.api.TakeDamage(-M.Val);
    }
    else if (M.AtkMod) {
        print("Atk up");
        T.api.SetAtkMod(M.Val);
    }
    else {
        T.api.SetDefMod(M.Val);
    }
}

script.api.SelectMonster = function (card) {
    print("Select monster");
    script.UI.api.HideInstructions();
    //print(card.MonsterName);

    //check if player 1 has a monster first, if not then select that
    //the players have to do it in order when selecting both. Player 1 first, then player 2. This shouldn't take up a turn.
    
    //Checks to make sure that both players have not lost 3 monsters.    
    if (script.Player1.api.GetDeadMonsters() < 3 && script.Player2.api.GetDeadMonsters() < 3) {
        //If player 1 doesn't have a monster, set card        
        if (!script.Player1.api.MonsterCheck()) {
            //have a pop up on screen to confirm it
            script.Player1.api.SetMonster(card);
            //script.P2MonsterContainer.getChild(card.MonsterIndex).enabled = true;
            //print(card.MonsterIndex);
            if (script.Player1.api.MonsterCheck()) {

                script.P1MonsterContainer.getChild(script.Player1.api.GetMI()).enabled = true;
            }


        }
        else if (!script.Player2.api.MonsterCheck()) {
            script.Player2.api.SetMonster(card);
            if (script.Player2.api.MonsterCheck()) {
                script.P2MonsterContainer.getChild(script.Player2.api.GetMI()).enabled = true;
            }
            //script.P2MonsterContainer.getChild(card.MonsterIndex).enabled = true;
        }





        if (!script.Player2.api.MonsterCheck()) {
            script.UI.api.ShowInstructions();
            script.UI.api.SetInstructions("Player 2, please scan a monster card");
        }

        if (script.Player1.api.MonsterCheck() && script.Player2.api.MonsterCheck()) {

            print(script.Player1.api.GetMI());
            print(script.Player2.api.GetMI());
            script.P2MonsterContainer.getChild(script.Player2.api.GetMI()).enabled = true;
            script.UI.api.SetInstructions("Scan an action card");
        }

        if (Turn < 3) {
            script.UI.api.ShowInstructions();
        }


        script.UI.api.UpdateUI(Turn, script.Player1.api.GetHealth(), script.Player1.api.GetMaxHealth(), script.Player2.api.GetHealth(), script.Player2.api.GetMaxHealth());
    }
    //print(script.P1MonsterContainer.getChild(card.MonsterIndex).enabled);

    //if it's not either of these then it should ignore it


}

//script.api.SelectMonster(script.MonsterInfo[1]);
//script.api.SelectMonster(script.MonsterInfo[2]);
    

//script.api.SelectMove(1);
//script.api.SelectMove(2);
//script.api.SelectMove(4);
//script.api.SelectMonster(script.MonsterInfo[2]);

//script.api.SelectMove(1);
//script.api.SelectMove(1);
//script.api.SelectMove(2);
//script.api.SelectMove(2);
//script.api.SelectMove(1);