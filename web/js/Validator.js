function ValidateEmail() {
    inputText = document.getElementById("emailUser").value
    console.log("inputText", inputText)
    var mailformat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(yahoo|hotmail|gmail|correo)\.(com|usa|edu|co)(\W|$)/;
    if (inputText.match(mailformat)) {
        // alert("Ok: The email entered has the correct format (name@domain.domain)");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("El correo electrónico no tiene el formato correcto. \nPor ejemplo: name@domain_name.domain)\n\n  Para continuar, DEBE proporcionar un correo electrónico válido");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateIdentificacion() {
    inputText = document.getElementById("identificationUser").value
    console.log("inputText", inputText.length)

    if (inputText.length > 5 && inputText.length < 14) {
        // alert("Ok: valid identification ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Identificación no válida, el campo debe tener más de 5 y menos de 14 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateName() {
    inputText = document.getElementById("nameUser").value
    console.log("inputText", inputText.length)

    if (inputText.length > 1 && inputText.length <= 80) {
        // alert("Ok: valid name ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Nombre inválido, el campo debe tener más de 1 y menos de 80 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateAddress() {
    inputText = document.getElementById("addressUser").value
    console.log("inputText", inputText.length)

    if (inputText.length > 5 && inputText.length <= 30) {
        // alert("Ok: valid address ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Dirección inválida, el campo debe tener más de 5 y menos de 30 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateCellPhone() {
    inputText = document.getElementById("cellphoneUser").value
    console.log("inputText", inputText.length)

    if (inputText.length >= 5 && inputText.length <= 10) {
        // alert("Ok: valid cellphone ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Celular inválido, el campo debe tener más de 5 y menos de 10 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validatePassword() {
    inputText = document.getElementById("passwordUser").value
    console.log("inputText", inputText)
    var mailformat = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (inputText.match(mailformat)) {
        // alert("Ok: password valid");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("La contraseña debe incluir mayúsculas, minúsculas, dígitos y símbolos.");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateCreate() {
    if (ValidateEmail() && validateIdentificacion() && validateName() && validateAddress() && validateCellPhone() && validatePassword()) {
        return true;
    }
    return false;
}
/************************************************** */

function ValidateEmailU() {
    inputText = document.getElementById("emailUserU").value
    console.log("inputText", inputText)
    var mailformat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(yahoo|hotmail|gmail|correo)\.(com|usa|edu|co)(\W|$)/;
    if (inputText.match(mailformat)) {
        // alert("Ok: The email entered has the correct format (name@domain.domain)");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("El correo electrónico no tiene el formato correcto. \nPor ejemplo: name@domain_name.domain)\n\n  Para continuar, DEBE proporcionar un correo electrónico válido");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateIdentificacionU() {
    inputText = document.getElementById("identificationUserU").value
    console.log("inputText", inputText.length)

    if (inputText.length > 5 && inputText.length < 14) {
        // alert("Ok: valid identification ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Identificación no válida, el campo debe tener más de 5 y menos de 14 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateNameU() {
    inputText = document.getElementById("nameUserU").value
    console.log("inputText", inputText.length)

    if (inputText.length > 1 && inputText.length <= 80) {
        // alert("Ok: valid name ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Nombre inválido, el campo debe tener más de 1 y menos de 80 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateAddressU() {
    inputText = document.getElementById("addressUserU").value
    console.log("inputText", inputText.length)

    if (inputText.length > 5 && inputText.length <= 30) {
        // alert("Ok: valid address ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Dirección inválida, el campo debe tener más de 5 y menos de 30 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateCellPhoneU() {
    inputText = document.getElementById("cellphoneUserU").value
    console.log("inputText", inputText.length)

    if (inputText.length >= 5 && inputText.length <= 10) {
        // alert("Ok: valid cellphone ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Celular inválido, el campo debe tener más de 5 y menos de 10 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validatePasswordU() {
    inputText = document.getElementById("passwordUserU").value
    console.log("inputText", inputText)
    var mailformat = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (inputText.match(mailformat)) {
        // alert("Ok: password valid");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("La contraseña debe incluir mayúsculas, minúsculas, dígitos y símbolos.");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateUpdate() {
    if (ValidateEmailU() && validateIdentificacionU() && validateNameU() && validateAddressU() && validateCellPhoneU() && validatePasswordU()) {
        return true;
    }
    return false;
}

/*****************************************************
 * 
 */

function ValidateEmail_() {
    inputText = document.getElementById("email").value
    console.log("inputText", inputText)
    var mailformat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(yahoo|hotmail|gmail|correo)\.(com|usa|edu|co)(\W|$)/;
    if (inputText.match(mailformat)) {
        // alert("Ok: The email entered has the correct format (name@domain.domain)");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("El correo electrónico no tiene el formato correcto. \nPor ejemplo: name@domain_name.domain)\n\n  Para continuar, DEBE proporcionar un correo electrónico válido");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateIdentificacion_() {
    inputText = document.getElementById("identification").value
    console.log("inputText", inputText.length)

    if (inputText.length > 5 && inputText.length < 14) {
        // alert("Ok: valid identification ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Identificación no válida, el campo debe tener más de 5 y menos de 14 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateName_() {
    inputText = document.getElementById("name").value
    console.log("inputText", inputText.length)

    if (inputText.length > 1 && inputText.length <= 80) {
        // alert("Ok: valid name ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Nombre inválido, el campo debe tener más de 1 y menos de 80 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateAddress_() {
    inputText = document.getElementById("address").value
    console.log("inputText", inputText.length)

    if (inputText.length > 5 && inputText.length <= 30) {
        // alert("Ok: valid address ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Dirección inválida, el campo debe tener más de 5 y menos de 30 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateCellPhone_() {
    inputText = document.getElementById("cellphone").value
    console.log("inputText", inputText.length)

    if (inputText.length >= 5 && inputText.length <= 10) {
        // alert("Ok: valid cellphone ");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("Celular inválido, el campo debe tener más de 5 y menos de 10 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validatePassword_() {
    inputText = document.getElementById("pass").value
    console.log("inputText", inputText)
    var mailformat = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (inputText.match(mailformat)) {
        // alert("Ok: password valid");
        //document.querySelector("useremail").focus();           

        return true;
    }
    else {
        console.log(inputText)
        alert("La contraseña debe incluir mayúsculas, minúsculas, dígitos y símbolos.");
        //document.getElementById("useremail").focus()        
        return false;
    }
}


function validateLogin() {
    if (ValidateEmail_() && validateIdentificacion_() && validateName_() && validateAddress_() && validateCellPhone_() && validatePassword_()) {
        return true;
    }
    return false;
}