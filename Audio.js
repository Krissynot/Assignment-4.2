function startSounds()
{
    mySound = new sound();
    mySound.play();

    document.getElementById("StopButton").disable = false;
    document.getElementById("StartButton").disable = true;
//double negative make a postivie so saying you disabling inwhich it is false then it is enable

}
function sound(scr)
{
    this.sound = document.createElement("audio");
    this.sound.scr = scr;
    this.play = function()
    {
        this.sound.play()
    }
}

function stopSound()
{
    window.location.reload()
    //this reloads the whole window will stop the sound
    document.getElementById("StopButton").disable = true;
    document.getElementById("StartButton").disable = false;
}