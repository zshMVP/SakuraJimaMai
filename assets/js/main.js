console.warn("I Love SakuraJima Mai");
console.log("%c Copyright %c zshMVP ","background: #606050;color: #fff;border-radius: 3px 0 0 3px","background: #1475B2;color: #fff;border-radius: 0 3px 3px 0");
const LoadingHtml = "<div id='loading'><h2 data-text='SAKURAJIMA'>SAKURAJIMA</h2></div>";
document.write(LoadingHtml);
document.onreadystatechange = completeload;
function completeload() {
    if (document.readyState === "complete"){
        document.getElementById("loading").remove();
    }
}