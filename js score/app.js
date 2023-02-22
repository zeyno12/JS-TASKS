const form = document.getElementById("form");
const btn = document.getElementById("btn");
const UserName = document.getElementById("name");
const Password = document.getElementById("password");

var User = [
  {
    name: "Ulvi",
    Soyad: "Nuriyev",
    Score: Number(91),
    userName: "Ulvi123",
    password: "salam123",
  },
  {
    name: "Nigu",
    Soyad: "Niguyeva",
    Score: Number(81),
    userName: "nigus111",
    password: "nigu321",
  },
  {
    name: "Zeyno",
    Soyad: "Zeynos",
    Score: Number(71),
    userName: "zeyno542",
    password: "zeyno987",
  },
];

if (btn) {
  btn.addEventListener("click", UserLogin);

  function UserLogin(e) {
    e.preventDefault();
    var userNameValue = UserName.value;
    var PasswordValue = Password.value;
    if (userNameValue.trim() === "" && PasswordValue.trim() === "") {
      alert("xanalari duzgun doldurn");
    }
    for (const user of User) {
      if (userNameValue === user.userName && PasswordValue === user.password) {
        if (user.Score > 90 && user.Score < 100) {
          document.getElementById("output").innerHTML =
            "Imtahan neticeniz 90 ve 100 arasidir";
        } else if (user.Score > 80 && user.Score < 90) {
          document.getElementById("output").innerHTML =
            "Imtahan neticeniz 80 ve 90 arasidir";
        } else if (user.Score > 70 && user.Score < 80) {
          document.getElementById("output").innerHTML =
            "Imtahan neticeniz 70 ve 80 arasidir";
        } else if (user.Score > 60 && user.Score < 70) {
          document.getElementById("output").innerHTML =
            "Imtahan neticeniz 60 ve 70 arasidir";
        } else if (user.Score < 50) {
          document.getElementById("output").innerHTML =
            "Imtahandan kesildin!!!!";
        }
      } else {
       alert("duzgun melumati daxil edin bele bir adda user yoxdur")
    
      }
    }
  }
}
