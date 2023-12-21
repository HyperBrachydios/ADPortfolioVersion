// -----JS CODE-----

//@input Component.Script GM;
//@input Component.Script MI;
//@input Component.MarkerTrackingComponent CardMarker;

//@input int ScanValue = 0;
//@input bool CardFound = false;
//the value that increases
//var ScanValue = 0;

////updates every frame when it is found

//print(script.getSceneObject().name);
if (script.CardFound == true) {
    script.ScanValue += getDeltaTime();
    print(script.ScanValue);

    if (script.ScanValue >= 0) {
        script.CardFound = false;
        script.ScanValue = 0;
        print(script.GM.name);
        script.GM.api.SelectMonster(script.MI);
    }
}



script.CardMarker.onMarkerLost = function () {
    print("Marker Lost");
    //print(script.currentlyTracked);
    script.ScanValue = 0;
    script.CardFound = false;
    //script.P1.enabled = true;
    //script.P2.enabled = false;    
    // print("Value: " + script.P2.enabled);


}

script.CardMarker.onMarkerFound = function () {
    print("Marked found");
    script.CardFound = true;
    //ScanValue = 0;
}