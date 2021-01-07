function displayMessage(msgText, msgType) {
  
    const html = document.querySelector('html');
    const panel = document.createElement('div');

    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function () {
        panel.parentNode.removeChild(panel)
       
    }

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(warning.png)';
        panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(chat.png)';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px';
    }
}

function msgpro1() {
   return prompt('leave a msg :')
}  

function msgpro2() {
   let a = prompt('warning or Chat :')
   return a.toLowerCase().toString();
}  

const btn = document.querySelector('button');
btn.onclick =  function () {
    displayMessage(msgpro1(),msgpro2());
} 
/*
You might be wondering why we haven't included the parentheses after the function name. 
This is because we don't want to call the function immediately — only after the button has been clicked. 
If you try changing the line to and saving and reloading, you'll see that the message box appears without the button being clicked! 
The parentheses in this context are sometimes called the "function invocation operator". 
You only use them when you want to run the function immediately in the current scope. 
In the same respect, the code inside the anonymous function is not run immediately, as it is inside the function scope.

btn.onclick = displayMessage();
*/

// btn.addEventListener('click', displayMessage);  // 2.way of calling function


function bas() {
    let searchName = input.value.toLowerCase();
    /*
     We store the value entered into the text input in a variable called searchName, 
     before then emptying the text input and focusing it again, ready for the next search.  
     */
    input.value = '';
    input.focus();
    for (let i = 0; i < contact.length; i++) {
        let splitContact = contact[i].split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}. ID number is ${i+1}`;
            console.log(i);
            break;
        } else {
            para.textContent = 'Contact not found.'
        }
        
    }
   
}