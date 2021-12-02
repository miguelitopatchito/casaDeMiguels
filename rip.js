document.getElementById('#save-button')
.addEventListener('click', function (fullName, relationship, phone, email, address) {
  const nameInput = document.querySelector('#name-input');
    addContact(nameInput.value);
  nameInput.value='';

  const relationshipInput = document.querySelector('#relationship-input');
    addContact(relationshipInput.value);
      relationshipInput.value='';

  const phoneInput = document.querySelector('#phone-info');
    addContact(phoneInput.value);
      phoneInput.value='';
//
  const emailInput = document.querySelector('#email');
    addContact(emailInput.value);
      emailInput.value='';

  const addressInput = document.querySelector('#address');
    addContact(addressInput.value);
    addressInput.value='';
});

function addContact(fullName, relationship, phone, email, address){

  if(!fullName||!fullName.trim()) return;

  const infoSectionDiv = document.getElementById('info-sectionDiv');


    const infoSec = document.querySelector('info-section');


  const nameDiv = document.getElementById('name');
    nameDiv.textContent = fullName;

  const relationshipDiv = document.getElementById('relationship-div');
      relationshipDiv.textContent = relationship;
  const phoneDiv = document.getElementById('phone-div');
      phoneDiv.textContent = phone;
  const emailDiv = document.getElementById('email-div');
      emailDiv.textContent = email;
  const addressDiv = document.getElementById('address-div');
      addressDiv.textContent = address;

  infoSec.append(nameDiv);
  infoSec.append(relationshipDiv);
  infoSec.append(phoneDiv);
  infoSec.append(emailDiv);
  infoSec.append(addressDiv);
  document.querySelector('#info-section').append(infoSec);
}
