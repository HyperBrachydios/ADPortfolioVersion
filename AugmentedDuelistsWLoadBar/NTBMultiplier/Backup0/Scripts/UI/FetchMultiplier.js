// -----JS CODE-----
//@input Component.Text multiplierValue;
//@input Component.Script PlayerScript;


//script.multiplierValue.text = script.PlayerScript.api.GetMultiplierPlaces();

//multiplierValue.text


//print(script.PlayerScript.api.GetMultiplierPlaces);
if (script.PlayerScript.api.GetMultiplierPlaces == null)
{
    script.multiplierValue.text = "1.0x";
} else {
    script.multiplierValue.text = script.PlayerScript.api.GetAtkMod() + "x";
}

