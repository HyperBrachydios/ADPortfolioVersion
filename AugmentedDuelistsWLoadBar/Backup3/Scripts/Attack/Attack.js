// -----JS CODE-----
//@input string Name;
//@input float Damage;
//wanted to store the animation here, but it doesn't seem you can use functions from other scripts in this


script.api.GetAttackName = function () {
    return script.Name;
}
script.api.GetAttackDamage = function () {
    return script.Damage;
}

