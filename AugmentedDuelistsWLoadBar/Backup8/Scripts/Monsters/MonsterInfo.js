// -----JS CODE-----

//@input string MonsterName = "Default";
//@input float MaxHealth = 10f;
//@input SceneObject MonsterMarker;
//@input Component.Script Attack1
//@input Component.Script Attack2
//@input Component.Script Attack3

//@input int MonsterIndex;


//print(script.Attack1.Name);
//print(script.Attack1.api.GetAttackName());
//print(script.Attack2.api.GetAttackDamage());


//print(script.MonsterName);


script.api.GetAttack = function (Num) {

    switch (Num) {
        case 0:
        case 1:
            return script.Attack1;

        case 2:
            return script.Attack2;

        case 3:
            return script.Attack3;
    }
}


//var A = script.api.GetAttack(1);

//print(A.api.GetAttackName());