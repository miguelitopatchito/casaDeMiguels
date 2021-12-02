document.querySelector('#btn-add-contact')
.addEventListener('click', function () {
  const nameInput = document.querySelector('#name-input');
  addContact(nameInput.value);
  nameInput.value='';
  const phoneInput = document.querySelector('#phone');
  addContact(phoneInput.value);
  phoneInput.value='';
  const emailInput = document.querySelector('#email');
  addContact(emailInput.value);
  emailInput.value='';
});

//document.querySelector('#btn-delete-contact')
//.addEventListener('click', function () {
//  contactDiv.remove();

//});

function addContact(fullName, emailContent, phoneNumber){

  if(!fullName||!fullName.trim()) return;
//  if(!email||!email.trim()) return;
  //if(!phoneNumber||!phoneNumber.trim()) return;
//  return;

  const contactDiv = document.createElement('div');
  contactDiv.className = 'contact-entry';



  const nameInitialDiv=document.createElement('div');
  nameInitialDiv.className = 'name-initial';
  nameInitialDiv.textContent = fullName.charAt(0);

  const fullNameDiv = document.createElement('div');
  fullNameDiv.className='full-name';
  fullNameDiv.textContent = fullName;

  const emailDiv = document.createElement('div');
  emailDiv.className = 'email';
  emailDiv.textContent = emailContent;

  const phoneDiv = document.createElement('div');
  phoneDiv.className = 'phone';
  phoneDiv.textContent = phoneNumber;
  //append in border
  contactDiv.append(nameInitialDiv);
  contactDiv.append(fullNameDiv);
  contactDiv.append(emailDiv);
  contactDiv.append(phoneDiv);
  document.querySelector('#contacts-list').append(contactDiv);

}

/*function get(evt){
  var fields = [];
  event.target.form
  .querySelectorAll('form')('input:not([disabled]):not([type="submit"])').forEach(function(e) {
    fields.push({name: e.name, value: e.value});
  })
  console.log(fields);
  return false;
}
*/
