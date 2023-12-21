// -----JS CODE-----
// Enable the 'Image Tracking' template in Lens Studio
//@input Component.Text currentHealthP1;
//@input Component.Text maxHealthP1;
///@input Component.MarkerTrackingComponent snapchatMarker;

//var Scene = require('Scene');
//var Diagnostics = require('Diagnostics');

// Reference to the text object you want to update
//var currHealth = Scene.root.find('Player1MaxHealth');
//var maxHealth = Scene.root.find('Player1CurrentHealth');


// Reference to the image tracker
//var imageTracker = Scene.root.find('SnapchatMarker-MonsterTest');
var markerTracking = script.getSceneObject().getComponent("Component.MarkerTrackingComponent");
//var textObject = script.getSceneObject().getChild().0;
// Subscribe to the image tracker's onObjectTracked event
if (markerTracking) {
    
    if (markerTracking.isTracking())
    {
        //print("yes");
        //currentHealthP1.text = "500"; 
        //textObject = "500";
        maxHealthP1 = '500';
    } else {
            //print("no");
        currentHealthP1 = '500'; 
        maxHealthP1 = '500';
       // currentHealthP1.text = '0'; 
       // maxHealthP1.text = '0';
    }
} else {
    print("image not found");
}    

