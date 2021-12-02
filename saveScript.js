//saving inputs into an array, still need to populate contacts index from array
let contactInfoArr = [];

const addCont = (ev)=> {
  ev.preventDefault();
  let contactInfo = {
    id: Date.now(),
    name: document.getElementById('name-input').value,
    relationship: document.getElementById('relationship-input'.value),
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value
  }
  contactInfoArr.push(contactInfo);
  document.querySelector('form').reset();

  console.warn('added', {contactInfoArr});
  //let pre = document.querySelector('#msg pre');
  //pre.textContent = '\n' + JSON.stringify(contactInfoArr, '\t', 6);

  localStorage.setItem('MyContactList', JSON.stringify(contactInfoArr));
}

function view() {
    if(localStorage.getItem('MyContactList') != null){
      document.getElementById('phone-num').innerHTML = contactInfoArr [3];
    }
}
document.addEventListener ('DOMContentLoaded',  ()=>{
    document.getElementById('save-button').addEventListener('click', addCont, view);
});
