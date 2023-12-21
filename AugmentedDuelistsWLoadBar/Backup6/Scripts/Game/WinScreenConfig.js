// -----JS CODE-----
//@input int monstersLeftP1 = 3;
//@input int monstersLeftP2 = 3;

//@input SceneObject WinScreen;
//@input Component.Text Player1;
//@input Component.Text Player2;

if (script.monstersLeftP1 > 0 && script.monstersLeftP2 > 0)
{
    script.WinScreen.enabled  = false;
} else 
{
    //P2 Wins!
    if (script.monstersLeftP1 == 0)
    {
        script.Player1.enabled = false;
        script.WinScreen.enabled  = true;
    }


    //P1 Wins!
    if (script.monstersLeftP2 == 0)
    {
        script.Player2.enabled = false;
        script.WinScreen.enabled = true;
    }
}
