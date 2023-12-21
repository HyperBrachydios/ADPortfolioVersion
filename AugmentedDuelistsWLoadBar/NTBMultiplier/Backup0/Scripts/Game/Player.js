//namespace Math;
// -----JS CODE-----
//so fun fact that's not officially documented anywhere
//it seems that lens studio cannot run a function from another script if the scripts are on different objects
//it just pretends that it doesn't exist
//so both player scripts have to be on the same one as the game manager
//this exists for no practical reason other than to set them apart in the inspector
//@input int PlayerNumber;

//@input Component.Script Monster;


var Health = 5;
var MaxHealth = 10;

//if we decide to have attacks that change stats, this is where to do it
var AtkMod = 1;
var DefMod = 1;

//this may be unnecessary since I think we're only planning on three cards
const MonsterLimit = 3;

var CurrentMonster = 0;
//@input Component.Script[] PrevMonsters;
//@input float[] MonsterHealth;

//@input Component.Script UI;

//var MI;

//@input int[] ModPlace;


var DeadMonsters = 0;


var HasMonster = false;


for (var i = 0; i < 3; ++i) {
    script.MonsterHealth.push(0);
    script.ModPlace.push(0);
}


script.api.GetMonsterName = function () {
    return script.Monster.MonsterName;
}
script.api.GetHealth = function () {
    return Health;
}
script.api.GetMaxHealth = function () {
    return MaxHealth;
}
script.api.SelectAttack = function (num) {
    //print(script.Monster.api.GetAttack(num));
    return script.Monster.api.GetAttack(num);
}

script.api.TakeDamage = function (D) {
    if (D > 0) {
        D = D * DefMod;
    }
    Health -= D;

    Health = Health.toFixed(2);

    script.MonsterHealth[script.CurrentMonster] = Health;
    if (Health <= 0) {
        //play death animation
        HasMonster = false;
        DeadMonsters++;
    }


    if (Health > MaxHealth) {
        Health = MaxHealth;
    }
}

script.api.RecoverHealth = function (D) {

}
script.api.SetAtkMod = function (M) {
    //AtkMod = Math.Round(M * 100) / 100;
    AtkMod = M.toFixed(2);
}

script.api.GetAtkMod = function () {
    //print("Atk modifier = " + AtkMod);
    return AtkMod;
}

script.api.SetDefMod = function (M) {
    DefMod = M.toFixed(2);
}

script.api.GetDefMod = function () {
    return DefMod;
}

script.api.MonsterCheck = function () {
    if (HasMonster) {
        return true;
    }
    return false;
}

script.api.GetDeadMonsters = function () {
    return DeadMonsters;
}


script.api.SetMonster = function (M) {
    //print(Health);

    

    //script.PrevMonsters.push(M);

    //print(M.MaxHealth);
    var MonsterLocation = -1;

    for (let i = 0; i < script.PrevMonsters.length; ++i) {
        if (script.PrevMonsters[i].MonsterName == M.MonsterName) {
            //print("Matched " + i);
            MonsterLocation = i;
            break;
        }
    }

    if (MonsterLocation == -1) {
        //print("Hasn't found monster");
        if (script.PrevMonsters.length < MonsterLimit) {
            ResetMultipliers();
            script.Monster = M;
            script.PrevMonsters.push(M);
            Health = M.MaxHealth;
            MaxHealth = M.MaxHealth;
            HasMonster = true;
            CurrentMonster = script.PrevMonsters.length - 1;
            script.MonsterHealth[CurrentMonster] = Health;
        }
        else {
            //can't add more than 3 monsters
            //this should just show an error message
            print("How did you invent a fourth card");
        }
    }
    else {
        //print("Found in list");
        //check if that monster is dead
        //Resummons monster
        print(script.MonsterHealth[MonsterLocation]);
        if (script.PrevMonsters[MonsterLocation] == script.PrevMonsters[CurrentMonster]) {

            //tell the player that they can't re-use the same card
            print("That's the current monster");
            if (script.MonsterHealth[CurrentMonster] != 0) {
                HasMonster = true;
            }
        }
        else if (script.MonsterHealth[MonsterLocation] <= 0) {
            //tell the player that they can't use a dead monster
            print("Can't use a dead monster")
            script.UI.api.ShowInstructions();
            script.UI.api.SetInstructions("That monster has already been defeated! Please scan a different card.");

        }
        else {
            //print("Swapping them out");
            //print(CurrentMonster);
            //print(MonsterLocation);
            //print(script.MonsterHealth[0]);
            //print(script.MonsterHealth[1]);
            ResetMultipliers();

            
            script.Monster = M;
            script.MonsterHealth[CurrentMonster] = Health;

            CurrentMonster = MonsterLocation;
            
            Health = script.MonsterHealth[CurrentMonster];
            MaxHealth = M.MaxHealth;
            HasMonster = true;
        }

    }
    //print(script.Monster.api.MonsterName);
}

ResetMultipliers = function () {
    for (let i = 0; i < script.ModPlace.length; ++i) {
        script.ModPlace[i] = 0;
    }
}

script.api.GetMultiplierPlaces = function() {
    return script.ModPlace;
}

script.api.RemoveMonster = function () {
    HasMonster = false;

}

script.api.GetMI = function (I) {
    return script.Monster.MonsterIndex;
}
