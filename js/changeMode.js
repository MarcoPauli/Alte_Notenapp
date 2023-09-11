/*This file manages that the user can switch between normal-mode and edit-mode*/

let editGradesBtn = document.getElementById("editGradesBtn");
editGradesBtn.addEventListener("click", editGradesBtnFunc);

function editGradesBtnFunc () {
    editGradesBtn.removeEventListener("click", changeIntoEditMode);
    editGradesBtn.addEventListener("click", leaveEditMode);
    changeIntoEditMode();
}

function changeIntoEditMode() {
    changeMode(changeParticularClassElement_Set, "none", "block", "🔚", "Bearbeitungsmodus verlassen", "Bearbeitungsmodus")
}

function leaveEditMode () {
    editGradesBtn.removeEventListener("click", leaveEditMode);
    editGradesBtn.addEventListener("click",changeIntoEditMode);
    changeMode(changeParticularClassElement_Remove, "block", "none", "🖊", "Noten bearbeiten", "Ansichtmodus");
}

function changeMode (currentFunction, stStyle, editModeStyle, btnTxt, btnTitle, modeTxt) {
    let klnClass = document.getElementsByClassName("KLNs");
    let glnClass = document.getElementsByClassName("GLNs");
    let subjectClass = document.getElementsByClassName("subject");
    for (let i = 0; i < klnClass.length; i++) {
        currentFunction(klnClass, i, "showEditGradesPopup(this)");
        currentFunction(subjectClass, i, "showEditSubjectsPopup(this)");
        currentFunction(glnClass, i, "showEditGradesPopup(this)");
    }
    let standardInformation = document.getElementById("standardInformation");
    standardInformation.style.display = stStyle;
    let editModeDiv = document.getElementById("editModeDiv");
    editModeDiv.style.display = editModeStyle;
    let editGradesBtn = document.getElementById("editGradesBtn");
    editGradesBtn.innerHTML = btnTxt;
    editGradesBtn.title = btnTitle;
    let showEditModeTxt = document.getElementById("showEditModeTxt");
    showEditModeTxt.innerHTML = modeTxt;
}

function changeParticularClassElement_Set (className, i, popup) {
    className[i].setAttribute("onclick", popup);
    className[i].style.cursor = "pointer";
}

function changeParticularClassElement_Remove (className, i, popup) {
    className[i].removeAttribute("onclick");
    className[i].style.cursor = "unset";
}