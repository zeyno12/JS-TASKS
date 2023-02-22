const ButtonSubmit = document.getElementById("btn_click");
const Name = document.getElementById("name");
const password = document.getElementById("password");
const tesdiq = document.getElementById("tesdiq");
const PullMoney = document.getElementById("Pullmoney");

var User = [
  {
    name: "Ulvi",
    surname: "Nuriyev",
    Password: "salam123",
    UserName: "Ulvi_Nuriyev",
    kartNumber: Number(1122334455667788),
    CVV: Number(345),
    CartTime: "07/23",
  },
  {
    name: "Zeynus",
    surname: "Bagirova",
    Password: "zeynus123",
    Username: "Kuskun_xanim",
    kartNumber: Number(2233445566778899),
    CVV: Number(346),
    CartTime: "03/22",
  },
  {
    name: "Nigus",
    surname: "Sahriyarli",
    Password: "Nigu123",
    UserName: "Hacker_Nigus",
    kartNumber: Number(3344556677889900),
    CVV: Number(567),
    CartTime: "06/24",
  },
];

if (ButtonSubmit) {
  ButtonSubmit.addEventListener("click", Login);
  function Login(e) {
    e.preventDefault();
    const UserNameValue = Name.value;
    const PasswordValue = password.value;

    for (const user of User) {
      if (UserNameValue !== user.UserName || PasswordValue !== user.Password) {
        document.getElementById("outputname").style.display = "block";
        document.getElementById("outputPassword").style.display = "block";
      } else {
        window.location.href = "http://127.0.0.1:5500/payment.html";
      }
    }
  }
}

if (tesdiq) {
  tesdiq.addEventListener("click", PushDate);
}

function PushDate(e) {
  const moneyValue = document.getElementById("money").value;
  const CVVValue = document.getElementById("cvv").value;
  const DateValue = document.getElementById("date").value;
  console.log(moneyValue, CVVValue, DateValue);

  e.preventDefault();
  for (const cartdata of User) {
    if (
      cartdata.CVV !== Number(CVVValue) ||
      cartdata.kartNumber !== Number(moneyValue) ||
      cartdata.CartTime !== DateValue
    ) {
      document.getElementById("outputCartCode").style.display = "block";
      document.getElementById("outputCVV").style.display = "block";
      document.getElementById("outputDate").style.display = "block";
    } else {
      window.location.href = "http://127.0.0.1:5500/Balans.html";
    }
  }
}

if (PullMoney) {
  PullMoney.addEventListener("click", pullMoney);

  function pullMoney(e) {
    e.preventDefault();
    var PriceMoney = document.getElementById("balans").value;
    if (PriceMoney < 1) {
      document.getElementById("moneyCheck").style.display = "block";
    } else {
      const DataValue = document.getElementById("BalancePrice");

      var dataEnd = document.getElementById("BalancePrice").value;

      if (PriceMoney < dataEnd) {
        console.log("Err");
        document.getElementById("moneyCheck").style.display = "block";
      }
      var dataEnd = (document.getElementById("BalancePrice").value -=
        PriceMoney);
      document.getElementById("moneyCheck").style.display = "none";
    }
  }
}
const exit = document.getElementById("exit");
if (exit) {
  exit.addEventListener("click", GoHome);

  function GoHome() {
    window.location.href = "http://127.0.0.1:5500";
  }
}
