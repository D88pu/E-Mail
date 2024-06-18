console.log("deepu");

let result = {
  "tag": "",
  "free":true,
  "role":false,
  "user":"deepupeajapati26",
  "email": "deepupeajapati26@gmail.com",
  "score": 0.48,
  "state": "undeliverable",
  "domain": "gmail.com",
  "reason": "invalid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "",
  "format_valid": true,
}
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");
    resultCont.innerHTML ='<img src="https://media.tenor.com/XK37GfbV0g8AAAAj/loading-cargando.gif" width="70px">';
    let key = "ema_live_bZGwdsB99R7bcvqq1ak2qHf157rc65PvFZocBWNy";
    let email = document.getElementById("username").value;
    let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();
    let str ='';
    for (key of Object.keys(result)){
      if(result[key] !=="" && result[key]!==null){
       str = str + `<div>${key}:${result[key]}</div>`;
     }
   }
   console.log(str);
    resultCont.innerHTML = str; // result ke liye ues karte hai
  })



  