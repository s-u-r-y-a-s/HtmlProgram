var js_user = "";
var js_passwrd = "";

function change() {
    js_user = document.getElementById("user").value.trim();
    js_passwrd = document.getElementById("pass").value;
    if (js_user.length > 0) {

        document.getElementById("pass").style = "block";
        document.getElementById("btn").value = "submit";

        if (js_passwrd.length > 0) {
            if (((js_user == "xyzabc@def.com") || (js_user == 9000010000)) && (js_passwrd == "Admin@2021")) {
                alert("login sucessful");
            } else {
                alert("Please check your credentials");
            }
        }
    }
    else {
        alert("Enter email");

    }

}