var signupName=document.getElementById("signupName");
var signupEmail=document.getElementById("signupEmail");
var signupPassword=document.getElementById("signupPassword");
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var btnSignup=document.getElementById("btnSignup");
var btnSignin=document.getElementById("btnSignin");
var signUpArray; 
if (localStorage.getItem('userStore')==null) 
{
        signUpArray=[];
}else 
{
        signUpArray=JSON.parse(localStorage.getItem('userStore'));
        
}
function signUp()
{
        if (checkSignup()==false) 
        {
                document.getElementById('required').innerHTML = '<span class="text-danger">All inputs is required</span';
        }
        else if (isEmailExist()==true) 
        {
                document.getElementById('required').innerHTML = '<span class="text-danger">email already exists</span>';
        
        }
        else
        {
               if(signupNameValid()==true&&signupPassValid()==true&&signupEmailValid()==true)
               {
                addData();
                document.getElementById('required').innerHTML = '<span class="text-success">Success</span>';
               } 
              
        }
        signupPassword.classList.remove("is-valid");
        signupName.classList.remove("is-valid");
        signupEmail.classList.remove("is-valid");
        document.getElementById("nameReq").innerHTML=``;
        document.getElementById("passReq").innerHTML=``; 
        document.getElementById("emailReq").innerHTML=``;  
        clearForm()
}

function addData()
{
        var signUp=
        {
               name:signupName.value,
               email:signupEmail.value,
               pass:signupPassword.value
        }
                signUpArray.push(signUp)
                localStorage.setItem("userStore", JSON.stringify(signUpArray));
}
function checkSignup()
{
        if (signupName.value==""||signupEmail.value==""||signupPassword.value=="") {
            return false
        } else {
            return true
        }
}

function isEmailExist() 
{
        for (var i=0;i<signUpArray.length;i++) 
        {
            if (signUpArray[i].email.toLowerCase()==signupEmail.value.toLowerCase()) 
            {
                return true
            }
        }
}
function clearForm()
{
        signupEmail.value="";
        signupName.value="";
        signupPassword.value=""
}    
// valdition name
signupName.addEventListener("keyup",signupNameValid)
function signupNameValid()
{
        var upName=/^[a-zA-z]{2,20}$/;
        if(upName.test(signupName.value)==true)
        {
               signupName.classList.add("is-valid");
               signupName.classList.remove("is-invalid");
               document.getElementById("nameReq").innerHTML=`<span class="text-success">your name is valid</span>`;
               return true
        }else
        {
                signupName.classList.remove("is-valid");
                signupName.classList.add("is-invalid");
                document.getElementById("nameReq").innerHTML=`<span class="text-danger">please Enter valid name</span>`;
                return false
        }
}

signupPassword.addEventListener("keyup",signupPassValid)
function signupPassValid()
{
        var upName=/^[a-zA-z0-9]{5,10}$/;
        if(upName.test(signupPassword.value)==true)
        {
               signupPassword.classList.add("is-valid");
               signupPassword.classList.remove("is-invalid");
               document.getElementById("passReq").innerHTML=`<span class="text-success">your password is valid</span>`;
               return true
        }else
        {
                signupPassword.classList.remove("is-valid");
                signupPassword.classList.add("is-invalid");
                document.getElementById("passReq").innerHTML=`<span class="text-danger">please Enter valid password</span>`;
                return false
        }
}
signupEmail.addEventListener("keyup",signupEmailValid)
function signupEmailValid()
{
        var upName=/^[a-zA-z]{1,10}@[a-zA-z0-9]{1,5}$/;
        if(upName.test(signupEmail.value)==true)
        {
               signupEmail.classList.add("is-valid");
               signupEmail.classList.remove("is-invalid");
               document.getElementById("emailReq").innerHTML=`<span class="text-success">your email is valid</span>`;
               return true
        }else
        {
                signupEmail.classList.remove("is-valid");
                signupEmail.classList.add("is-invalid");
                document.getElementById("emailReq").innerHTML=`<span class="text-danger">please Enter valid email</span>`;
                return false
        }
}    
//sign in
function signIn()
{
        if (checkSignin()==false) 
        {
                document.getElementById('req').innerHTML = '<span class="text-danger">All inputs is required</span>'
        }else
        {
                setData()
        }
        clearSignForm()
        
}
function setData()
{
        var email=signinEmail.value;
        var password=signinPassword.value;
        for (var i=0;i<signUpArray.length;i++) 
        {
                if (signUpArray[i].email.toLowerCase()==email.toLowerCase()
                &&signUpArray[i].pass.toLowerCase()==password.toLowerCase()) {
                        document.getElementById("anchor").href=`login.html?name=${signUpArray[i].name}`;
                }else{
                        document.getElementById('req').innerHTML = '<span class="text-danger">incorrect email or password</span>'
                }        
        }  
}
function checkSignin() 
{
        if (signinPassword.value==""||signinEmail.value=="") 
        {
            return false
        } else 
        {
            return true
        }
}
function clearSignForm()
{
        signinEmail.value="";
        signinPassword.value=""
} 

