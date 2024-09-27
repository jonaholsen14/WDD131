var selecter = document.getElementById("theme");
var logoImage = document.getElementById('byui-logo');

selecter.addEventListener("change", (event) => {
    changeTheme();
});

function changeTheme() {
    if (selecter.value === "dark") {
        document.getElementById("body").className = "dark";
        logoImage.src = '../images/byui-logo_white.png';
        console.log("dark");
    }
    else {
        document.getElementById("body").classList.remove("dark");
        console.log("light");
    }
    console.log(selecter.value);
}