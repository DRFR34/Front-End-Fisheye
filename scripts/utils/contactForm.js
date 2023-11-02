//****** open and close modal ******
// const photographerName = document.querySelector(".photographerName");
// const contactButton = document.querySelector("#contactButton");
// const contactModal = document.querySelector("#contactModal");
// const pagePhotographerName = document.querySelector("#pagePhotographerName");
contactButton.addEventListener("click", displayModal);
function displayModal() {   
    // const photographerName = document.querySelector(".photographerName")

    contactModal.style.display = "block"
    // const contactModalTitle = document.createElement('h2');
    // const formContainer = document.querySelector("#formContainer")
    // contactModalTitle.innerText = `Contactez-moi <br>${pagePhotographerName}`
    formBanner.append(pagePhotographerName);
}
function closeModal() {
    textsContentBox.prepend(pagePhotographerName)
    contactModal.style.display = "none";
}

//****** keyboard navigation ****** 

const closeContactFormBtn = document.querySelector('#closeContactFormBtn');
// const submitBtn= document.querySelector('#submitBtn');

closeContactFormBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      closeModal();
    }
  });
  
  closeContactFormBtn.addEventListener('click', closeModal);

const submitBtn= document.querySelector('#submitBtn');
 
const form = document.querySelector("form");


//****** form's fields validation  ******

let firstNameIsValid;
let lastNameIsValid;
let emailIsValid;
let messageIsValid;
let AllInputsValidated = false;
const nameFieldsRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}/;
const emailFieldRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/;
const messageFieldRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ- ,.;]{5,}/;



function requiredFieldsInspection() {
    const requiredFieldsList = document.querySelectorAll('input[required], textarea[required]');
    requiredFieldsList.forEach((requiredField) => {
        let errorSpanId = requiredField.id + 'ErrorSpan';
        requiredField.addEventListener("input", () => {
            let isValid = false;
            let errorMessage = '';
            switch (requiredField.id) {
                case "firstName":
                    isValid = requiredField.value.match(nameFieldsRegex);
                    errorMessage = "Le prénom doit comporter au moins deux lettres";
                    isValid ? firstNameIsValid = true : firstNameIsValid = false;
                            // console.log("firstNameIsValid:", firstNameIsValid);
                    break;
                case "lastName":
                    isValid = requiredField.value.match(nameFieldsRegex);
                    errorMessage = "Le nom doit comporter au moins deux lettres";
                    // lastNameIsValid = isValid;
                    isValid ? lastNameIsValid = true : lastNameIsValid = false;

                    break;
                case "email":
                    isValid = requiredField.value.match(emailFieldRegex);
                    errorMessage = "Cette adresse email n'est pas valide";
                    // emailIsValid = isValid;
                    isValid ? emailIsValid = true : emailIsValid = false;
                    break;
                case "message":
                    isValid = requiredField.value.match(messageFieldRegex);
                    errorMessage = "Le message doit comporter au moins 5 caractères";
                    // messageIsValid = isValid;
                    isValid ? messageIsValid = true : messageIsValid = false;

            }
            if (isValid) {
                resetfieldErrorIndication(requiredField, errorSpanId);
            } else {
                requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage);
            }
            btnSubmitActivation();
        });
    });
}

function requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage) {
    resetfieldErrorIndication(requiredField, errorSpanId);
    requiredField.style.border = 'solid 2px red';    
    let errorSpan = document.createElement('span');
    errorSpan.setAttribute('id', errorSpanId);
    errorSpan.textContent = errorMessage;
    requiredField.parentNode.appendChild(errorSpan);
}

function resetfieldErrorIndication(requiredField, errorSpanId) {
    requiredField.style.border = 'none';
    if (document.getElementById(errorSpanId)) {
        document.getElementById(errorSpanId).remove();
    }
}

function btnSubmitActivation() {
    AllInputsValidated = firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid;
            // console.log("AllInputsValidated:", AllInputsValidated);
    const form = document.querySelector('form');
    if (AllInputsValidated) {
        form.querySelector('#submitBtn').removeAttribute("disabled");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            createRegistrationIsConfirmed();
            // console.log("données du formulaire \n Prénom : " +  firstName.value + "\n Nom : " + lastName.value + "\n Email : " + email.value + "\n Message : ", message.value);
        });
    } else {
        form.querySelector('#submitBtn').setAttribute("disabled", "");
    }
}
function createRegistrationIsConfirmed() {
    // écriture d'un console.log
    if (AllInputsValidated){
    console.log("données du formulaire \n Prénom : " +  firstName.value + "\n Nom : " + lastName.value + "\n Email : " + email.value + "\n Message : ", message.value);
    }

    if (AllInputsValidated){

        // sélection du corps de la modale
        let formContainer = document.querySelector('#formContainer');
        // supression du formulaire de saisie
        const form = document.getElementById('form');
        if (form) {
            formContainer.removeChild(form);
        }
        // insertion du message de confirmation
        formContainer.innerHTML = '<h2>Message<br>envoyé !</h2>';
        formContainer.style.minHeight = '850px';
        formContainer.style.textAlign = 'center';
        formContainer.style.display = 'flex';
        formContainer.style.flexDirection = 'column';
        formContainer.style.justifyContent = "center";
        formContainer.style.alignItems = "center";
        // insertion du bouton de fermeture
        const confirmationCloseBtn = document.createElement('button');
        confirmationCloseBtn.textContent = "Fermer";
        confirmationCloseBtn.classList.add('btn-submit');
        confirmationCloseBtn.classList.add('button');
        confirmationCloseBtn.style.position = 'absolute';
        confirmationCloseBtn.style.bottom = '25px';
        confirmationCloseBtn.setAttribute = 'tabindex="0"';
        formContainer.appendChild(confirmationCloseBtn);
        confirmationCloseBtn.addEventListener('click', () => location.reload() );

    }
}
requiredFieldsInspection();
