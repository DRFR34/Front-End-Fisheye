//== open and close modal 

window.addEventListener('load', () => {

  const pagePhotographerName = document.querySelector('#pagePhotographerName');
        console.log("pagePhotographerName", pagePhotographerName);
        console.log("pagePhotographerName innerText", pagePhotographerName);

  const contactFormPhotographerName = document.createElement('h2');
  contactFormPhotographerName.innerText= pagePhotographerName.innerText;
  contactFormPhotographerName.setAttribute('id', "contactFormPhotographerName");
  formBanner.append(contactFormPhotographerName)

        console.log("contactFormPhotographerName :", contactFormPhotographerName);

  /** 
 * added a event delegation to debug firefox, in error with the button listener.
 * article src : https://medium.com/@shanyavermaofficial/what-is-event-delegation-in-javascript-52fd9e7323a0
 */
  document.body.addEventListener('click', function(event) {

    
    
    if (event.target.id === 'contactButton') {
        displayModal();
    }
});
 
  
  
  function displayModal() {   
      const formContainer = document.querySelector('#formContainer');
      formContainer.classList.remove("messageIsSent");
      formContainer.classList.contains("messageIsSent") ? formContainer.classList.remove("messageIsSent") : null;
      contactModal.style.display = "block";
      
      
  }
  });

function closeContactModal(typeOfNav) {
  if (contactModal.style.display === "block"){  
    contactModal.style.display = "none";
    const escapeLink = document.querySelector('#escapeLink');
    typeOfNav === 'keyNav'? escapeLink.focus() : null ;
  }    
}

//== keyboard navigation 

closeContactFormBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      closeContactModal('keyNav');
    }
  });
  
  
closeContactFormBtn.addEventListener('click', closeContactModal);

const submitBtn= document.querySelector('#submitBtn');
 
const form = document.querySelector("form");


closeContactFormBtn.addEventListener('keydown', (event) => (event.key === 'Enter') ? closeContactModal('keyNav') : null);
  
closeContactFormBtn.addEventListener('click', closeContactModal);

form.addEventListener('submit', (event) => event.preventDefault());

const focusableElements = 'button, input, select, textarea, [tabindex="0"]';
let firstFocusableElement = contactModal.querySelector('[tabindex="0"]');
let focusableContent = contactModal.querySelectorAll(focusableElements);
let lastFocusableElement = focusableContent[focusableContent.length - 1];

document.addEventListener('keydown', (event) => {
  let isTabPressed = event.key === 'Tab';
  let isEscapePressed = event.key === "Escape";
  let isShiftTabPressed = event.shiftKey && event.key === 'Tab';


if (isEscapePressed) {
  closeContactModal('keyNav');
} else if (isShiftTabPressed) { 
  if (document.activeElement === firstFocusableElement) {
    lastFocusableElement.focus(); 
    event.preventDefault();
  }
} else if (isTabPressed) {
  if (document.activeElement === lastFocusableElement) { 
    firstFocusableElement.focus(); 
    event.preventDefault();
  }
}
});

closeContactFormBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    closeContactModal('keyNav');
  }
});

closeContactFormBtn.addEventListener('click', closeContactModal);


//== form's fields validation  

let firstNameIsValid;
let lastNameIsValid;
let emailIsValid;
let messageIsValid;
let AllInputsValidated = false;
const formContainer = document.querySelector('#formContainer');

//-- - - - - RegExs 
const nameFieldsRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}/;
const emailFieldRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/;
const messageFieldRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ- ,.;]{5,}/;

//-- - - - -  functions


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
                    break;
                case "lastName":
                    isValid = requiredField.value.match(nameFieldsRegex);
                    errorMessage = "Le nom doit comporter au moins deux lettres";
                    isValid ? lastNameIsValid = true : lastNameIsValid = false;

                    break;
                case "email":
                    isValid = requiredField.value.match(emailFieldRegex);
                    errorMessage = "Cette adresse email n'est pas valide";
                    isValid ? emailIsValid = true : emailIsValid = false;
                    break;
                case "message":
                    isValid = requiredField.value.match(messageFieldRegex);
                    errorMessage = "Le message doit comporter au moins 5 caractères";
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
    requiredField.classList.add("errorBorder")    
    let errorSpan = document.createElement('span');
    errorSpan.setAttribute('id', errorSpanId);
    errorSpan.setAttribute('tabindex', 0);
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
    if (AllInputsValidated) {
        submitBtn.removeAttribute("disabled", "");
        submitBtn.addEventListener('click', (event) => {
          event.preventDefault();
            createRegistrationIsConfirmed();
        });
    } else {
        submitBtn.setAttribute("disabled", "");
    }
}

function createRegistrationIsConfirmed() {
    if (AllInputsValidated){
      if ((typeof firstName.value && typeof lastName.value && typeof email.value && typeof message.value) !== undefined ) {
        console.log("données du formulaire \n Prénom : " +  firstName.value + "\n Nom : " + lastName.value + "\n Email : " + email.value + "\n Message : ", message.value);}
    }

    if (AllInputsValidated){

        const form = document.getElementById('form');
        if (form) {
            formContainer.removeChild(form);
            formContainer.classList.add("messageIsSent")
        }
        formContainer.innerHTML = `
        <h2>Message<br>envoyé !</h2>
        <button id="confirmationCloseBtn" class="ctcFormBtn" aria-labelledby = "confirmationCloseBtnText" tabindex="0">Fermer </button>
        <span id="confirmationCloseBtnText" class="invisible">Votre message a bien été envoyé. Appuyer sur Entrée ou échappe pour revenir à la page du photographe </span>
        `; 
        document.querySelector('#confirmationCloseBtn'),
        confirmationCloseBtn.focus();

          window.addEventListener('keydown', (event) => {
          let isPressed = event.key;
          switch (isPressed) {

            case 'Tab' :
              event.preventDefault();
              confirmationCloseBtn.focus();
            break;

            case 'Tab && event.shiftKey' :
              event.preventDefault();
              confirmationCloseBtn.focus();
              document.write
            break;

            case 'Enter' :
              confirmationCloseBtn.focus();
              location.reload();
            break;

            case 'Escape':
              event.preventDefault();
              location.reload();
              try {
                if (confirmationCloseBtn) {
                    confirmationCloseBtn.focus();
                }
            } catch (error) {
                console.log("Esc est sans effet sur la navigation, presser 'Enter'");
            }
            return;

            default :
          }

        });

        confirmationCloseBtn.addEventListener('click', () => location.reload() );

    }
}

requiredFieldsInspection();
