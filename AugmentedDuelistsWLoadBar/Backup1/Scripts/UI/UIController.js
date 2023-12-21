// -----JS CODE-----
//the script that connects the game manager to the UI

//@input Component.Text TurnP1Text;
//@input Component.Text TurnP2Text;
//@input Component.Text P1HealthText;
//@input Component.Text P1MaxHealthText;
//@input Component.Text P2HealthText;
//@input Component.Text P2MaxHealthText;

//@input Component.Image P1HealthBar;
//@input Component.Image P2HealthBar;

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

    var P1HealthPercent = P1CH / P1MH;

    //did you know that javascript doesn't have a clamp function? I do now
    //and I can't be bothered to make my own one
    if (P1HealthPercent < 0) {
        P1HealthPercent == 0;
    }
    if (P1HealthPercent > 1) {
        P1HealthPercent == 1;
    }

    var P2HealthPercent = P1CH / P1MH;

    //same as before
    if (P2HealthPercent < 0) {
        P2HealthPercent == 0;
    }
    if (P2HealthPercent > 1) {
        P2HealthPercent == 1;
    }
    

    script.P1HealthBar.getTransform().setLocalScale(new vec3(P1HealthPercent, 1, 1));
    script.P2HealthBar.getTransform().setLocalScale(new vec3(P2HealthPercent, 1, 1));
    

    return 0;
}