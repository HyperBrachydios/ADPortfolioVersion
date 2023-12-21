// -----JS CODE-----

//@input string MonsterName = "Default";
//@input float MaxHealth = 10f;
//@input SceneObject MonsterMarker;
//@input Component.Script Attack1
//@input Component.Script Attack2
//@input Component.Script Attack3

//the way I'm planning on having this work right now is having the script that runs the game manage everything with changing the health and such
//I've found a way to have references to other scripts and objects, but there's seemingly no way of running a function from another script that would work for this
//I'll start on that script in a bit


print(script.Attack1.Name);
print(script.Attack1.Damage);
print(script.Attack2.Name);