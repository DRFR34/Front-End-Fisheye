//== open and close modal 
//  avoids "uncaught" errors from JS injected DOM element
window.addEventListener('load', () => {

  /** 
 * added a event delegation to debug firefox, in error with the button listener.
 * article src : https://medium.com/@shanyavermaofficial/what-is-event-delegation-in-javascript-52fd9e7323a0
 */
  document.body.addEventListener('click', (event) => {
    if (event.target.id === 'contactButton') {
      displayContactModal();
    }
  });


  /**
  * Function to display the contact modal.
  * Additionnal features : 
  *    delete the classe "messageIsSent" (CSS commodity)
  *    Place the focus on the form's first field 
  */
  function displayContactModal() {
    const formContainer = document.querySelector('#formContainer');

    // formContainer.classList.remove("messageIsSent");
    formContainer.classList.contains("messageIsSent") ? formContainer.classList.remove("messageIsSent") : null;
    contactModal.style.display = "block";

    const pagePhotographerName = document.querySelector('#pagePhotographerName');

    const contactFormPhotographerName = document.createElement('h2');
    contactFormPhotographerName.innerText = pagePhotographerName.innerText;
    contactFormPhotographerName.setAttribute('id', "contactFormPhotographerName");
    formBanner.append(contactFormPhotographerName);
    firstFocusableElement.focus();

  }
});
/**
 * Close the contact modal
 * Additional features :
 * - Delete "contactFormPhotographerName" to avoid dupplications on next openings (if form is closed but not yet submitted)
 * - place focus if keyboard navigation 
 * @param {String} typeOfNav - for now , two possible options :null or 'keyNav' comes from an 'Enter' when focus on close button, or from an 'Escape' keydown within the modal
 allows you to display the Escape link if keyboard navigation
 */
function closeContactModal(typeOfNav) {
  if (contactModal.style.display === "block") {
    formBanner.removeChild(contactFormPhotographerName);
    contactModal.style.display = "none";
    const escapeLink = document.querySelector('#escapeLink');
    typeOfNav === 'keyNav' ? escapeLink.focus() : null;
  }
}

//== keyboard navigation 

closeContactFormBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    closeContactModal('keyNav');
  }
});


closeContactFormBtn.addEventListener('click', closeContactModal);

const submitBtn = document.querySelector('#submitBtn');

const form = document.querySelector("form");


closeContactFormBtn.addEventListener('keydown', (event) => (event.key === 'Enter') ? closeContactModal('keyNav') : null);

closeContactFormBtn.addEventListener('click', closeContactModal);

//  avoids page reloading
form.addEventListener('submit', (event) => event.preventDefault());

const focusableElements = 'button, input, select, textarea, [tabindex="0"]';
let firstFocusableElement = contactModal.querySelector('[tabindex="0"]');
let focusableContent = contactModal.querySelectorAll(focusableElements);
let lastFocusableElement = focusableContent[focusableContent.length - 1];


/**
 * 
 */
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

/**
 * Function to inspect required fields in a form.
 * Adds an 'input' event listener to each required field.
 * based on the RegExs, checks the validity of the input and displays an error message if the input is invalid.
 */
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

/**
 * Indicate an error in a required field.
 * This function adds an error border to the field and an error message below it.
 * @param {HTMLElement} requiredField - The required field with an error.
 * @param {string} errorSpanId - The span ID is made based on current field ID.
 * @param {string} errorMessage - The error message to display.
 */
function requiredFieldErrorIndication(requiredField, errorSpanId, errorMessage) {
  resetfieldErrorIndication(requiredField, errorSpanId);
  requiredField.classList.add("errorBorder")
  let errorSpan = document.createElement('span');
  errorSpan.setAttribute('id', errorSpanId);
  errorSpan.setAttribute('tabindex', 0);
  errorSpan.textContent = errorMessage;
  requiredField.parentNode.appendChild(errorSpan);
}

/**
 * Delete previous errors indications, to prevent dupplications after multiples in and out of unvalidated fields
 * @param {HTMLElement} requiredField - current required field 
 * @param {string} errorSpanId  - span ID  made based on current field ID.
 */
function resetfieldErrorIndication(requiredField, errorSpanId) {
  requiredField.style.border = 'none';
  if (document.getElementById(errorSpanId)) {
    document.getElementById(errorSpanId).remove();
  }
}

/**
 *  Enables the submit button if all inputs are validated .
 *  calls the createRegistrationIsConfirmed function.
 */
function btnSubmitActivation() {
  AllInputsValidated = firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid;
  if (AllInputsValidated) {
    submitBtn.removeAttribute("disabled", "");
    submitBtn.addEventListener('click', (event) => {
      //  avoids page reloading
      event.preventDefault();
      createRegistrationIsConfirmed();
    });
  } else {
    submitBtn.setAttribute("disabled", "");
  }
}


/**
 * Checks if all inputs are validated and 
 * if they are: 
 * - logs the form data in console
 * Additional features : 
 * - removes the form
 * - displays a confirmation message with a close button
 * - adds a keydown event listener to focus the close button,  to reload the page when 'Enter' or 'Escape'
 */
function createRegistrationIsConfirmed() {
  if (AllInputsValidated) {
    if ((typeof firstName.value && typeof lastName.value && typeof email.value && typeof message.value) !== undefined) {
      console.log("Données du formulaire \n Prénom : " + firstName.value + "\n Nom : " + lastName.value + "\n Email : " + email.value + "\n Message : ", message.value);
    }
  }

  if (AllInputsValidated) {

    const form = document.getElementById('form');
    if (form) {
      formContainer.removeChild(form);
      formContainer.classList.add("messageIsSent")
    }
    // confirmation message injection
    formContainer.innerHTML = `
        <h2>Message<br>envoyé !</h2>
        <button id="confirmationCloseBtn" class="ctcFormBtn" aria-labelledby = "confirmationCloseBtnText" tabindex="0">Fermer </button>
        <span id="confirmationCloseBtnText" class="invisible">Votre message a bien été envoyé. Appuyer sur Entrée ou échappe pour revenir à la page du photographe </span>
        `;
    document.querySelector('#confirmationCloseBtn'),
      confirmationCloseBtn.focus();


    //  removes the ability to lost focus from the button
    window.addEventListener('keydown', (event) => {
      let isPressed = event.key;
      switch (isPressed) {

        case 'Tab':
          event.preventDefault();
          confirmationCloseBtn.focus();
          break;

        case 'Tab && event.shiftKey':
          event.preventDefault();
          confirmationCloseBtn.focus();
          break;

        //  In two next cases => close & reload
        case 'Enter':
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

        default:
      }

    });

    confirmationCloseBtn.addEventListener('click', () => location.reload());

  }
}

requiredFieldsInspection();
