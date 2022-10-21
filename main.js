let button = document.querySelector(".btn")
button.disabled = true;

const result = function getResult(itemid, value){

document.getElementById(itemid).innerHTML = value
}

function getFormHtml(formsdata){
 const data = formsdata.map(item => {
  return `<div class="col-12 mt-3">
   <label for="${item.id}" class="form-label">${item.label}</label>
   <input type="${item.type}" class="form-control" id="${item.id}"
   placeholder="${item.placeholder}" ${item.required? "required":""}>
   <span class="invalid-form" id="${item.id}_error_msg"></span>
</div>`
}).join("");
 return data
}

function createForm(formsdata){
  let htmldata = getFormHtml(formsdata);
    result("form_area", htmldata );
}

createForm(formsdata)

document.getElementById("myforms").addEventListener("change", validateForm);
// document.getElementById("email").addEventListener("change", validateForm);
// document.getElementById("password").addEventListener("change", validateForm);
// document.getElementById("phone").addEventListener("change", validateForm);
// document.getElementById("age").addEventListener("change", validateForm);
// document.getElementById("gender").addEventListener("change", validateForm);


function clearErrors(){
  let errors = document.getElementsByClassName("invalid-form");
  for(let item of errors){
    item.innerHTML = "";
  }
}

function validateForm(){
  clearErrors();

  // name validation
  let name = document.forms['myforms']["name"].value;
  if (name == "") {
    result("name_error_msg", "Name must be filled out");
  }
  else if  ((name.length) < 3) {
    result("name_error_msg", "Name too small");
  }

  // email validation
  let email = document.forms['myforms']["email"].value;
  if (email == "") {
    result("email_error_msg", "email must be filled out");
  }
  else if  ((email.length) <= 5) {
    result("email_error_msg", "email too small");
  }

  // password validation
  let pass = document.forms['myforms']["password"].value;
  if (pass == "") {
    result("password_error_msg", "password must be filled out");
  }
  else if  ((pass.length) <= 5) {
    result("password_error_msg", "password too small");
  }
  
  //  phone validation
  let phone = document.forms['myforms']["phone"].value;
  if (phone == "") {
    result("phone_error_msg", "phone number must be filled out");
  }
  else if  ((phone.length) < 10) {
    result("phone_error_msg", "invalid phone number");
  }
  else if  ((phone.length) > 10) {
    result("phone_error_msg", "invalid phone number");
  }

  //  age validation
  let age = document.forms['myforms']["age"].value;
  if (age == "") {
    result("age_error_msg", "age must be filled out");
  }
  else if  (age < 18) {
    result("age_error_msg", "you are too young to apply");
  }
  else if  (age > 40) {
    result("age_error_msg", "you are too old to apply");
  }

   //  gender validation
   let gender = document.forms['myforms']["gender"].value;
   if (gender == "") {
     result("gender_error_msg", "age must be filled out");
   }

   return button.disabled= false ;
}