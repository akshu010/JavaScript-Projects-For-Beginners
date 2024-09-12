const passwordbox = document.getElementById("pass");

const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbol = "!@#$%^&*()_+?><|';:.,";

const allchar = uppercase + lowercase + number + symbol;

function getPassword() {

    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    
    password += lowercase[Math.floor(Math.random() * lowercase.length)];

    password += number[Math.floor(Math.random() * number.length)];

    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {

        password += allchar[Math.floor(Math.random() * allchar.length)];

    }

    passwordbox.value = password;

}

function copypassword(){

    passwordbox.select();
    
    document.execCommand("copy");
    
}
