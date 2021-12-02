function view() {
    if(localStorage.getItem('MyContactList') != null){
      document.getElementById('phone-num').innerHTML = contactInfoArr [3];
    }
}
document.addEventListener ('DOMContentLoaded',view);
