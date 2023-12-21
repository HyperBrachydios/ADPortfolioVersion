
// -----JS CODE-----
//@input string Name;
//@input float Damage;
//@input bool AffectedByMod;

//inelegant solution but a lot less tedious than having to make a seperate script and attach it
//@input bool Modifier;
//@input bool ModifierSelfTarget;

//the best way to do this would be an enum
//but you need typescript for that and I'm not doing that this late in
//if the first bool is true then it affects attack, if false it affects defense
//if the second is true it ignores the first and adds to health
//@input bool AttackModifier;
//@input bool HealthModifier;


//if it's an attack modifier the values should be above 1
//if a def modifier they should be below 1


//@input float[] MultiplierValues;




//wanted to store the animation here, but it doesn't seem you can use functions from other scripts in this

class Mod {
    constructor(SelfTarget, AtkMod, Health, Val) {
        this.ST = SelfTarget;
        this.AtkMod = AtkMod;
        this.H = Health;
        this.Val = Val;
    };

    //GetSelfTarget = function () {
    //    return SelfTarget;
    //}
}

script.api.GetAttackName = function () {
    return script.Name;
}
script.api.GetAttackDamage = function () {
    return script.Damage;
}

script.api.GetAffectedByMod = function () {
    return script.AffectedByMod;
}

script.api.GetModifier = function (MultiplierCount) {
    //print("Can't make an omelete without fucking a few eggs jack");

    if (script.Modifier) {
        //if (MultiplierCount < script.MultiplierValues.length - 1) {
        //    MultiplierCount++;
        //}
        var Modifier = new Mod(script.ModifierSelfTarget, script.AttackModifier, script.HealthModifier, script.MultiplierValues[MultiplierCount]);
        //print(script.Name);
        //if (script.ModifierValue != 0) {
        //    //print(script.ModifierValue);
        //    //print(Modifier.Val);
        //}

        //print(Modifier.Val);


        return Modifier;
    }
    return -1;
}