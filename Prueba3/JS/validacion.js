function validar() {
    var result_val_email = validar_email();
    var result_val_tel = validarTelefono();
    return(result_val_email&&result_val_tel);
}
function validar_fto_email(mail) {
    var idx_arroba = mail.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = mail.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == mail.length - 1) {
            return false;
        }        
        return true;
    }
}

function validar_email() {
    var email = document.getElementById("mail").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email).value) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "el formato no es valido";
            div.className = "text-danger";
            return false;
        }
    }else {
        div.innerHTML = "el email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
        
}



