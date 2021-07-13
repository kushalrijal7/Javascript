function validateform(form){
    fail=validateFname(form.fname.value)
    fail+=validateSname(form.sname.value)
    fail+=validateUsername(form.username.value)
    fail+=validateAge(form.age.value)
    fail+=validateEmail(form.email.value)
    fail+=validatePassword(form.password.value)
    fail += validateGender(form.fav_language.value)
    fail += validateCheck(form.check.value)
    if(fail==""){
        return true
    }
    else{
        alert(fail)
    }
}


function validateFname(field){
    if(field=="")return "No First name was entered.\n"
    return ""
}
function validateSname(field){
    if(field=="")return "No Surname was entered.\n"
    return ""
}
function validateUsername(field){
    if(field=="") return "No Username was entered.\n"
    else if(field.length < 5) return "Username must contain at least 5 characters.\n"
    else if(/[^a-zA-Z0-9_-]/.test(field))
        return "Only a-z, A-Z, 0-9,- and _ are allowed in username.\n"
    
        return ""
}
function validatePassword(field){
    if(field =="") return "No password was entered.\n"
    else if(field.length < 6)
        return "Password must be at least 6 character.\n"
    else if(!/[a-z]/.test(field) || ! /[A-Z]/.test(field) || !/[0-9]/.test(field))
        return "Passwords require one of each of a-z, A-Z and 0-9\n"

    return ""
}
function validateAge(field){
    if(isNaN(field)) return "No Age was entered.\n"
    else if(field < 18 || field > 150)
        return "Age must be between 18 and 150.\n"
    return ""
}
function validateEmail(field){
    if(field =="") return "No Email was entered.\n"
    else if(!((field.indexOf(".")>0) && (field.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(field))
        return "The Email address is invalid.\n"
    return ""
}
function validatePhoneno(field){
    if(isNaN(field)) return "No Phone number was entered.\n"
    else if(field.length !=10) return "Phone number must have 10 numbers."

    return ""
}
function validateGender(field){
    if (field=="") return "Check on Gender.\n"

     else if (document.getElementById('Male').checked) {
        alert("Male Checked");

    }
    else if(document.getElementById('Female').checked){
        alert("Female Checked");
   
    }
    else if(document.getElementById('Others').checked){
        alert("Others Checked");
   
    }
    return ""
}

function validateCheck() {
    
 if (document.getElementById('check').checked) {
    alert("Terms & Conditons checked");
} else {
    alert("You didn't check the terms & conditons.");
}
return ""
}