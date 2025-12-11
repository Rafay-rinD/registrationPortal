var userObj = [];

function signUp(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email === "" || password === ""){
        Toastify({
  text: "please enter email and password",
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();
    }else{
        var userExist = false;
        for(var i=0; i < userObj.length; i++){
            console.log(userObj[i]["email"]);
            if(userObj[i]["email"] == email){
                userExist = true;
                break;
            }
        }
        if(userExist == true){
            alert("user already registered");
        }else{
            userObj.push({
                email: email,
                password: password,
            });
            alert("user signup successfully")
            localStorage.setItem("UserData", JSON.stringify(userObj))
            email.value = "";
            password.value = "";
            window.location.href = "login.html";
        }
    }
}

function setData(){
    var users = localStorage.getItem("UserData") || [];
    // console.log(users);
    // console.log(JSON.parse(users));
    userObj = JSON.parse(users);
}
setData();