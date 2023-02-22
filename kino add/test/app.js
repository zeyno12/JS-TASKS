// const InputName = document.getElementById("name");
// const InputTitle = document.getElementById("title");
// const InputImgSrc = document.getElementById("imgSrc");

// const SubmitBtn = document.querySelector(".btn");

// function addItem(e) {
//   e.preventDefault();
//   const nameValue = InputName.value;
//   const titleValue = InputTitle.value;
//   const ImgValue = InputImgSrc.value;
//   const data = document.querySelector(".col-lg-9");

//   if (
//     nameValue.trim() === "" ||
//     titleValue.trim() === "" ||
//     ImgValue.trim() === ""
//   ) {
//     const sms = "Melumat duzgun deyl";
//     data.innerText = sms;
//   } else {
//     data.innerHTML += `
//             <div class="data">

//             <div class="title">
//             <img
//             src="${ImgValue}"
//             alt="${nameValue}">
//             </div>
//             <h1>${nameValue}</h1>
//             <h4>${titleValue}</h4>
//             <button class="btn btn-danger delete">Delete</button>
//             </div>
//             `;
//   }
//   const btns = document.querySelector(".delete");
//   btns.addEventListener("click", function (e) {
//     e.preventDefault();
//     data.parentElement.remove();
//   });
//   btns.removeEventListener("click", function (e) {
//     e.preventDefault();
//     data.parentElement.remove();
//   });
//   ClearInput();
// }

// SubmitBtn.addEventListener("click", addItem);

// function ClearInput() {
//   InputName.value = " ";
//   InputTitle.value = " ";
//   InputImgSrc.value = " ";
// }

// const btn = document.getElementById("added");
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const data = document.getElementById("outdata");
//   const input = document.getElementById("datas").value;
//   const row = `
// <li>${input}</li>
// `;
//   data.innerHTML += row;
//   localStorage.setItem("name", row);
//   localStorage.getItem("name", row);
// });



// const arr=[1,2,3,4,5]
// arr.push("adada")
// arr.push("shjjvdbvkdbvb d")
// localStorage.setItem("ulvi",arr)
// localStorage.getItem("ulvi",JSON.stringify(arr))
// localStorage.clear("ulvi",arr)

// // const arry2=["salam","ok"]
// // sessionStorage.setItem("nigu",arry2)
let data=[
    {name:"Ulvi",
    score:98,
    prf:"dev",
    group:222,
    test:true,
    data:"bosdur"
    
    },
    {
        name:"zeyno",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
    {
        name:"NIGU",
        score:98,
        prf:"dev",
        group:222,
        test:true,
        data:"bosdur"
    },
]
localStorage.setItem("data",JSON.stringify(data))

const gelendata=localStorage.getItem("data",JSON.stringify(data));
