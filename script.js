var button = document.querySelector('#res')
console.log(button);
var allHtml = document.body.innerHTML;
if(button) {
button.onclick= createForm;
}
function createForm() {
  document.body.innerHTML= "";
 let reservationForm = document.createElement('form');
 reservationForm.innerHTML= '<h5>Log In</h5><label for="email"><b>Email</b></label><br><input type="text" placeholder="Enter Email" name="email" required><br><label for="psw"><b>Password</b></label><br><input type="password" placeholder="Enter Password" name="psw" required><br>'
 let formDiv =  document.createElement('div');
 formDiv.className += 'form-div'
 document.body.appendChild(formDiv)
 formDiv.appendChild(reservationForm)
 let formButton = document.createElement('button');
 formButton.innerHTML= "Submit";
 formButton.className += 'submit-btn'
 formDiv.appendChild(formButton);
 formButton.onclick= retrievePage;

 function retrievePage() {
  document.body.innerHTML = allHtml;
 }

//     <input type="password" placeholder="Enter Password" name="psw" required>'
//  var forms = document.createElement('form');
//  divs.className += "form-popup"
//  forms.className += "form-container"
//  var formHeader = document.createElement('h5')
//  formHeader.innerHTML= "Login";
//  forms.appendChild(formHeader)

//  var formLabel = document.createElement('label')
//  formLabel.innerHTML= 'Email';
//  forms.appendChild(formLabel);


 document.body.appendChild(divs)
 divs.appendChild(forms)
//  console.log(divs);
// // /* <form action="/action_page.php" class="form-container">
//     <h1>Login</h1>

//     <label for="email"><b>Email</b></label>
//     <input type="text" placeholder="Enter Email" name="email" required>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required>

//     <button type="submit" class="btn">Login</button>
//     <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
//   </form> */}
}


