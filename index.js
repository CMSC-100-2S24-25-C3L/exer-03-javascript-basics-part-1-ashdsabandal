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

console.log(validatePassword("aEZl1234", "aEZl1234"));

