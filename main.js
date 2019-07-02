
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbFgZCY_RfceNk8IDJPtL5g_PGoisOHK0",
    authDomain: "contactform-5490b.firebaseapp.com",
    databaseURL: "https://contactform-5490b.firebaseio.com",
    projectId: "contactform-5490b",
    storageBucket: "contactform-5490b.appspot.com",
    messagingSenderId: "1031266773487"
  };
  firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref('messages');


//listen from submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();
	//get values
	var name = getInputVal('name');
	var email = getInputVal('email');
	var company = getInputVal('company');
	var message = getInputVal('message');
	 //save message
	 saveMessage(name, company, email, message);
	//show alert
	document.querySelector('.alert').style.display = 'block';
	//hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	},3000);
	//clear message after submission
	document.getElementById('contactForm').reset();
}
//function to get form value
function getInputVal(id){
	return document.getElementById(id).value;
} 

//save message to database
function saveMessage(name,company,email,message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		message: message
	});
}