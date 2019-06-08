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

if (localStorage.getItem("summary")==null){
    localStorage.setItem("summary",)
}

// console.log(localStorage.getItem("balance"))
var msg;
var entry;
document.getElementById("sendButton").onclick = function() {
    msg = document.getElementById("composer").value
    console.log('sending message to chatbot')
    chatbot(localStorage.getItem("balance"),msg)
}

var entry;

function chatbot(balance,msg){
    msg = msg.split(" ");
    var x = msg[1];
    var elem = document.getElementById("chat-area");
    var para = document.createElement('div');
    balance = parseInt(balance);
    
    if(msg[0]=="Receive")
    {
        balance = balance+parseInt(x);
        var text = document.createTextNode("Your balance amount is updated: "+balance);
        entry = [{"amount":balance,"type":"Credit"}];
    }
    
    if(msg[0]=="Spent")
    {
        balance = balance-parseInt(x);
        var text = document.createTextNode("Your spent some money, your updated balance is: "+balance);
        entry  = [{"amount":balance,"type":"Debit"}];
    }
    
    var summary = localStorage.getItem("summary");
    //summary.push(entry)
    //setTimeout(2000);

    para.appendChild(text);
    elem.appendChild(para);
    
    localStorage.setItem('balance',balance);
    localStorage.setItem('summary',summary);
    
}