var userObj = [];

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email === "" || password === ""){
        Toastify({
  text: "please enter email and password",
  duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
//   newWindow: true,
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
        var selectedIndex;
        for(var i=0; i < userObj.length; i++){
            console.log(userObj[i]["email"]);
            if(userObj[i]["email"] == email){
                userExist = true;
                selectedIndex = i;
                break;
            }
        }
        if(userExist == true){
            if(userObj[selectedIndex]["password"] == password){
                alert("login successfully");
                window.location.href = "welcome.html";
            }else{
                alert("invalid password");
            }
        }else{
            alert("email not registered");
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