// const form = document.getElementById('form');
const UserName = document.getElementById('UserName');
const email = document.getElementById('email');
const Skill = document.getElementById('Skill');
const Language = document.getElementById('Language');
const age = document.getElementById('age');




form.addEventListener('submit', e => {
  e.preventDefault(); 

  validateInputs();
});


const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/;
  return re.test(String(email).toLowerCase());
}


           // Error Message
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');


  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}


          // Success Message
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};



const validateInputs = () => {
   const UserNameValue = UserName.value.trim();
   const emailValue = email.value.trim();
   const SkillValue = Skill.value.trim()
   const ageValue = age.value.trim();
   const LanguageValue = Language.value.trim();


   if(UserNameValue === '') {
       setError(UserName, 'UserName is required');
   }else {
       setSuccess(UserName);
   }
    


  if(emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  }else {
    setSuccess(email);
  }




  if(SkillValue === '') {
    setError(Skill, 'Skill is required');
  }else {
    setSuccess(Skill);
  }




  if(ageValue === '') {
    setError(age, 'Age is required');
  } else {
    setSuccess(age);
  }



  if(LanguageValue === '') {
    setError(Language, 'Language is required');
  } else {
    setSuccess(Language);
  }

  


};



