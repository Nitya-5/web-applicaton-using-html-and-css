var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
function submit(){
  var name= document.getElementById("pname").value;
  if(name==''|| name.length<3){
  document.getElementById('pna').innerHTML="Please enter valid name!";
  document.getElementById('pna').style.color='red';
  return false;
  }
  else{
  document.getElementById("pna").innerHTML='';
  }
  // email validation
  var email= document.getElementById("pemail").value;
  mail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(!email.match(mail))
  {
  document.getElementById("pem").innerHTML='Please enter valid email!';
  document.getElementById('pem').style.color='red';
  return false;
  }
  else{
    document.getElementById("pem").innerHTML='';
  }
}
function querycheck(){
  var name= document.getElementById("name").value;
  if(name==''|| name.length<3){
  document.getElementById('pnam').innerHTML="Please enter valid name!";
  document.getElementById('pnam').style.color='red';
  return false;
  }
  else{
  document.getElementById("pnam").innerHTML='';
  }
  // email validation
  var email= document.getElementById("email").value;
  mail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(!email.match(mail))
  {
  document.getElementById("pemal").innerHTML='Please enter valid email!';
  document.getElementById('pemal').style.color='red';
  return false;
  }
  else{
    document.getElementById("pemal").innerHTML='';
  }
  var subject = document.getElementById("subject").value
  if(subject==""||subject.length<10){
    document.getElementById('psub').innerHTML="Please enter valid subject!";
  document.getElementById('psub').style.color='red';
  return false;
  }
  else{
  document.getElementById("psub").innerHTML='';
  }
  var message = document.getElementById("msg").value
  if(message==""||message.length<10){
    document.getElementById('pmsg').innerHTML="Please enter valid message!";
  document.getElementById('pmsg').style.color='red';
  return false;
  }
  else{
  document.getElementById("pmsg").innerHTML='';
  }
}