// -----JS CODE-----
//the script that connects the game manager to the UI

//@input Component.Text TurnP1Text;
//@input Component.Text TurnP2Text;
//@input Component.Text P1HealthText;
//@input Component.Text P1MaxHealthText;
//@input Component.Text P2HealthText;
//@input Component.Text P2MaxHealthText;

script.api.TestFunc = function() {
    return 0;
}


script.api.UpdateUI = function (T, P1CH, P1MH, P2CH, P2MH) {
    //print("It's not updating");
    if (T % 2 != 0) {
        script.TurnP1Text.enabled = true;
        script.TurnP2Text.enabled = false;
    }
    else {
        script.TurnP1Text.enabled = false;
        script.TurnP2Text.enabled = true;
    }

    
    //script.P1HealthText.text = String.toString(P1CH);
    script.P1HealthText.text = P1CH.toString();
    script.P1MaxHealthText.text = P1MH.toString();

    script.P2HealthText.text = P2CH.toString();
    script.P2MaxHealthText.text = P2MH.toString();

    return 0;
}