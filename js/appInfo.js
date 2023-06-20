let appInfo = document.getElementById("appInfo");
appInfo.addEventListener("change", changeAppInfoAction);
let userAction = "default";

function changeAppInfoAction() {
    let toDo = document.getElementById("appInfo").value;
    let pasteAppInfoTextValue = document.getElementById("pasteAppInfoTextValue");
    if (toDo == "Einfügen") {
        userAction = "paste";
        pasteAppInfoTextValue.removeAttribute("readonly");
    } else if (toDo == "Kopieren") {
        userAction = "copy";
    } else {
        userAction = "default";
    }
    return userAction;
}

let confirmAppInfoAction = document.getElementById("confirmAppInfoAction");
confirmAppInfoAction.addEventListener("click", checkUserAction);

function checkUserAction() {
    if (userAction == "copy") {
        copyAppData();
    } else if(userAction == "paste") {
        pasteAppData();
    }
}

function copyAppData() {
    let AppData = document.getElementById("showGradesTable");
    navigator.clipboard.writeText(AppData.innerHTML);
}

function pasteAppData() {
    let userInput = document.getElementById("pasteAppInfoTextValue");
    let table = document.getElementById("showGradesTable");
    table.innerHTML = userInput.value;
}