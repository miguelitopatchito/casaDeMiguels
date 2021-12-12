//saving inputs into an array, still need to populate contacts index from array
/*
const contactInfoArr = [];
//FUNCTION TO NAV TO PROFILE AFTER CLICKING SAVE BUTTON
const gotime = function go(){
  window.location.href="contact-profile.html";
};
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
  //CLEAR FORM AFTER SAVE
  //document.querySelector('form').reset();

  console.warn('added', {contactInfoArr});
  //let pre = document.querySelector('#msg pre');
//  pre.textContent = '\n' + JSON.stringify(contactInfoArr, '\t', 6);

  localStorage.setItem('MyContactList', JSON.stringify(contactInfoArr));
}

const populate = function view() {
   if(localStorage.getItem('MyContactList') !== null){
    document.getElementById('phone-numPro').innerHTML = (contactInfoArr, [2]);
    document.getElementById('namePro').innerHTML=(contactInfoArr, [1]);
  }
};


//EVENT LISTENERS ADDING TO ARRAY, NAV TO PROFILE PAGE
/*
document.addEventListener ('DOMContentLoaded',  ()=>{
  document.getElementById('save-button').addEventListener('click',addCont);
  document.getElementById('save-button').addEventListener('click', gotime);
});

*/
///WHY IN THE HELL DOES THIS NOT WORK
//window.addEventListener('load', ()=>{
//		const contactData = localStorage.MyContactList;
  //              const stringy = JSON.parse(contactData);
    //  document.getElementById('namePro').innerHTML = '\n' + JSON.stringify(contactInfoArr, '/t', 2);
              //stringy.contactData.name;
              //'\n' + JSON.stringify(contactInfoArr, '/t', 2);



		//});



