function validatePassword(pass1, pass2) {
    if(pass1 != pass2) {
        console.log("Two passwords don't match");
        return false;
    }

    // console.log(pass1.length);
    if(pass1.length < 8) {
        console.log("Length is less than 8.");
        return false;
    }

    var hasNumber = false;
    var hasUpper = false;
    var hasLower = false;
    
    for (let i = 0; i < pass1.length; i++) {

        //check number
        if(pass1.charCodeAt(i) >= 48 && pass1.charCodeAt(i) <= 57) {
            hasNumber = true;
        }

        //check uppercase
        if(pass1.charCodeAt(i) >= 65 && pass1.charCodeAt(i) <= 90) {
            hasUpper = true;
        }

        //check lowercase
        if(pass1.charCodeAt(i) >= 97 && pass1.charCodeAt(i) <= 122) {
            hasLower = true;
        }

    }

    if (!(hasNumber && hasUpper && hasLower)) {
        console.log("Missing required character type.");
        return false;
    }


    return true;
}

function reversePassword(pass) {
    let reversed = ""; 
    for (let i = pass.length - 1; i >= 0; i--) {
        reversed += pass[i];
        
    }

    return reversed;
}

function storePassword(name, pass1, pass2) {
    let password = pass1;

    if (validatePassword(pass1, pass2)) {
        password = reversePassword(pass1);
    }

    

    return car = {name:name, newpassword:password};
}

console.log(storePassword("John", "Pass123", "Pass12345"));