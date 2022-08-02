/*
    I Love SakuraJima Mai
    copyright:zshMVP
*/

let today = new Date();
function loveContinue(){
    let startDate = new Date(1598457600000),
        DayContinue = Math.floor((today - startDate)/86400000);
    document.getElementById("time").innerHTML = "Love Online: " + DayContinue + "天" + today.getHours() + "時";
}
loveContinue();