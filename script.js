function validate(e) {
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var username = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var cpassword = document.getElementById("cnfpass").value;
    var mobno = document.getElementById("mobno").value;
    var birthDate = document.getElementById("dob").value;
    var parts = birthDate.split("-");
    var today = new Date();
    var genders = document.getElementsByName("gender");
    var selectedGender = "";
    for(var i = 0; i < genders.length; i++) {
        if(genders[i].checked)
            selectedGender = genders[i].value;
    }
    

    //  REGEX ------
    var fcheck = /^[A-Z][a-z]+$/;
    var mcheck = /^([A-Z][a-z]+)?$/;
    var lcheck = /^[A-Z][a-z]+$/;
    var usercheck = /^[a-zA-Z][a-z0-9_]{0,29}$/;
    var emailcheck = /^([A-Za-z\.-_]+)@([a-z]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var mobnocheckindia = /^[6789][0-9]{9}$/;
    var mobnocheckusa = /^[0-9]{10}$/;
    var mobnocheckuk = /^[0-9]{10}$/;

    let returnval=true;

    if(fname == "") {
        document.getElementById("ferror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        if(fcheck.test(fname)) {
            document.getElementById("ferror").innerHTML=" ";
        }
        else {
            document.getElementById("ferror").innerHTML="** Invalid First name";
            returnval = returnval && false;
        }
    }

    if(mcheck.test(mname)) {
        document.getElementById("merror").innerHTML=" ";
    }
    else {
        document.getElementById("merror").innerHTML="** Invalid Middle name";
        returnval = returnval && false;
    }

    if(lname == "") {
        document.getElementById("lerror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        if(lcheck.test(lname)) {
            document.getElementById("lerror").innerHTML=" ";
        }
        else {
            document.getElementById("lerror").innerHTML="** Invalid Last name";
            returnval = returnval && false;
        }
    }
    
    if(username == "") {
        document.getElementById("usererror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        if(usercheck.test(username)) {
            document.getElementById("usererror").innerHTML=" ";
        }
        else {
            document.getElementById("usererror").innerHTML="** Invalid Username";
            returnval = returnval && false;
        }
    }
    
    if(email == "") {
        document.getElementById("emailerror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        if(emailcheck.test(email)) {
            document.getElementById("emailerror").innerHTML=" ";
        }
        else {
            // let pos1 = email.lastIndexOf(".co");
            // let pos2 = email.indexOf(".co");
            // if(pos2 == -1) {
            //     document.getElementById("emailerror").innerHTML="** Invalid Email";
            //     return false;
            // }
            // if(!(pos1 === pos2)) {
            //     document.getElementById("emailerror").innerHTML="** Invalid Email";
            //     return false;
            // }
            document.getElementById("emailerror").innerHTML="** Invalid Email";
            returnval = returnval && false;
        }
    }

    if(password == "") {
        document.getElementById("passerror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        if(passwordcheck.test(password)) {
            document.getElementById("passerror").innerHTML=" ";
        }
        else {
            document.getElementById("passerror").innerHTML="** Invalid Password";
            returnval = returnval && false;
        }
    }

    // if(cpassword == "") {
    //     document.getElementById("cnpasserror").innerHTML="** Field do not be empty.";
    //     returnval = returnval && false;
    // }
    // else {

    // }
    if(cpassword.match(password)) {
        document.getElementById("cnpasserror").innerHTML=" ";
    }
    else {
        document.getElementById("cnpasserror").innerHTML="** Password didn't match";
        returnval = returnval && false;
    }

    if(mobno == "") {
        document.getElementById("mobnoerror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        if(document.myForm.Country.value == "1") {
            if(mobnocheckindia.test(mobno)) {
                document.getElementById("mobnoerror").innerHTML=" ";
            }
            else {
                document.getElementById("mobnoerror").innerHTML="** Invalid Mobile Number for India";
                returnval = returnval && false;
            }
        }
    
        if(document.myForm.Country.value == "2") {
            if(mobnocheckuk.test(mobno)) {
                document.getElementById("mobnoerror").innerHTML=" ";
            }
            else {
                document.getElementById("mobnoerror").innerHTML="** Invalid Mobile Number for UK";
                returnval = returnval && false;
            }
        }
        
        if(document.myForm.Country.value == "3") {
            if(mobnocheckusa.test(mobno)) {
                document.getElementById("mobnoerror").innerHTML=" ";
            }
            else {
                document.getElementById("mobnoerror").innerHTML="** Invalid Mobile Number for USA";
                returnval = returnval && false;
            }
        }
    }

    if(birthDate == "") {
        document.getElementById("doberror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        if(today.getFullYear() - parts[0] < 18) {
            document.getElementById("doberror").innerHTML="** Minimum Age must be 18 years.";
            returnval = returnval && false;
        }
        else if(today.getFullYear() - parts[0] == 18) {
            if((today.getMonth()+1) < parts[1]) {
                document.getElementById("doberror").innerHTML="** Minimum Age must be 18 years.";
                returnval = returnval && false;
            }
            else if((today.getMonth()+1) == parts[1]) {
                if(today.getDate() < parts[2]) {
                    document.getElementById("doberror").innerHTML="** Minimum Age must be 18 years.";
                    returnval = returnval && false;
                }
            }
        }
        else {
            document.getElementById("doberror").innerHTML=" ";
        }
    }

    if(selectedGender === "") {
        document.getElementById("gendererror").innerHTML="** Field do not be empty.";
        returnval = returnval && false;
    }
    else {
        document.getElementById("gendererror").innerHTML=" ";
    }
    return returnval;
}