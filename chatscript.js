document.getElementById("start-screen").onclick = function() {
    document.getElementById("start-screen").style.display="none"
    document.getElementById("compose-area").style.display="block"
}
document.onkeyup = function() {
    if (event.keyCode==13){
        document.getElementById("start-screen").style.display="none"
        document.getElementById("compose-area").style.display="block"
    }
}

if (localStorage.getItem("balance")==null){
    localStorage.setItem("balance",prompt("Hi there! Please enter the initial balance"))
}

if (localStorage.getItem("history")==null){
    localStorage.setItem("history",[])
}

// console.log(localStorage.getItem("balance"))
var msg;
document.getElementById("compose-area").onkeyup = function() {
    msg = document.getElementById("composer").value
    chatbot(msg)
}

function chatbot(msg) {
    div = document.getElementById("chat-area").createElement('div')
    
}

function receiveMoney(balance,msg,history){
    msg = msg.split(" ")
    if(msg[0]=="Receive")
    {
        var x=msg[1];
        balance=balance+x;
        setTimeout(2000);
        document.getElementById()("Your updated amount is:"+balance);
        history=[{"amount":balance,"type":"Credit"}];
    }
}

function spendMoney(balance,msg,history){
    if(msg[0]=="Spent")
    {
        var x=msg[1];
        balance=balance-x;
        setTimeout(2000);
        console.log("Your updated amount is:"+balance);
        history=[{"amount":balance,"type":"Debit"}];
    }
}