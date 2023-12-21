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


if (script.CardMarker.getSceneObject().getChildrenCount() > 0) {
    //print(script.ScanValue);
    script.CardMarker.getSceneObject().getChild(0).getComponent("Component.Script").api.setProgress(script.ScanValue / 3);
}

if (script.CardFound == true) {
    script.ScanValue += getDeltaTime();
    //if (script.CardMarker.getSceneObject().getChildrenCount() > 0) {
        //script.CardMarker.getSceneObject().getChild(0).getComponent("Component.Script").api.setProgress();
        //script.CardMarker.getSceneObject().getChild(0).getComponent("Component.Script").api.setProgress(script.ScanValue / 3);
        //script.CardMarker.getSceneObject().getChild(0).getComponent("Component.Script").api.ProgressWorkaround(script.ScanValue / 3);
    //}
    //print(script.ScanValue);

    if (script.ScanValue >= 3) {
        script.CardFound = false;
        script.ScanValue = 0;
        //print(script.GM.name);
        script.GM.api.SelectMonster(script.MI);
        //if (script.CardMarker.getSceneObject().getChildrenCount() > 0) {
        //    script.CardMarker.getSceneObject().getChild(0).getComponent("Component.Script").api.setProgress(0);
        //}
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
    //if (script.CardMarker.getSceneObject().getChildrenCount() > 0) {
    //    script.CardMarker.getSceneObject().getChild(0).getComponent("Component.Script").api.setProgress(0);
    //}


}

script.CardMarker.onMarkerFound = function () {
    print("Marked found");
    script.CardFound = true;
    //ScanValue = 0;
}