// -----JS CODE-----

//@input string MonsterName = "Default";
//@input float MaxHealth = 10f;
//@input SceneObject MonsterMarker;
//@input Component.Script Attack1
//@input Component.Script Attack2
//@input Component.Script Attack3

//@input int MonsterIndex;


script.api.GetAttack = function (Num) {

    switch (Num) {
        case 0:
            return script.Attack1;

        case 1:
            return script.Attack2;

        case 2:
            return script.Attack3;
    }
}


//var A = script.api.GetAttack(1);

//print(A.api.GetAttackName());