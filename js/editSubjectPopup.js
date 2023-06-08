let editSubjectValue = "";
let editSubjectsPopup = document.getElementById("editSubjectsPopup");
let overlayDivi = document.getElementById("overlayDiv");

function showEditSubjectsPopup(THIS) {
    alert("Diese Funktion wird gerade entwickelt und ist demnächst verfügbar...");
    editSubjectsPopup.style.display = "block";
    overlayDivi.style.display = "block";
    saveSubjectValue(THIS);
}

function saveSubjectValue(x) {
    editSubjectValue = x.id;
    return editSubjectValue;
}

let editSubjectFinished= document.getElementById("editSubjectFinished");

editSubjectFinished.addEventListener("click", () => {
    editSubjectsPopup.style.display = "none";
    overlayDivi.style.display = "none";
});

let confirmRenaming = document.getElementById("confirmRenaming");
let IDisEqual = false;

confirmRenaming.addEventListener("click", renameSubject);

function renameSubject() {
    let newSubjectName = document.getElementById("newSubjectName");
    setIsEqual(false);
    checkID(newSubjectName.value);
    if ((IDisEqual == false) && (newSubjectName.value.trim() != "")) {
        let subject = document.getElementById(editSubjectValue);
        subject.parentNode.id = newSubjectName.value;
        subject.removeAttribute("id");
        subject.setAttribute("id", "sub" + newSubjectName.value);
        subject.innerHTML = newSubjectName.value;
        showInformation('Fach in "' + newSubjectName.value + '" umbenannt!', "green");
    } else {
        showInformation("Bitte anderen Namen überlegen!", "red");
    }
}

function checkID(name) {
    let tr = document.querySelectorAll("tr");
    for (let i = 1; i < tr.length; i++) {
        let trID = tr[i].id;
        if (trID == name) {
            console.log(true)
            setIsEqual(true);
        }
    }
}

function setIsEqual(x) {
    IDisEqual = x;
    return IDisEqual;
}

//This function shows - if executed - the given information
function showInformation(info, color) {
    let informationDiv = document.getElementById("informationDiv");
    informationDiv.style.display = "block";
    informationDiv.style.color = color;
    let information = document.getElementById("information");
    information.innerHTML = info;
    setTimeout(() => {
        informationDiv.style.display = "none";
        information.innerHTML = "";
    }, 2000)
}
//End of function "showInformation"