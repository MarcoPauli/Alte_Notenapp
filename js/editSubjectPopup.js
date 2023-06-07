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
    checkID(newSubjectName.value);
    if (!IDisEqual && (newSubjectName.value.trim() != "")) {
        let subject = document.getElementById(editSubjectValue);
        subject.id = newSubjectName;
        subject.innerHTML = newSubjectName.value;
    } else {
        alert("Bitte anderen Namen überlegen!");
    }
}

function checkID(name) {
    let tr = document.querySelectorAll("tr");
    for (let i = 1; i < tr.length; i++) {
        let trID = tr[i].id;
        if (trID == name) {
            setIsEqual(true);
        }
    }
}

function setIsEqual(x) {
    IDisEqual = x;
    return IDisEqual;
}