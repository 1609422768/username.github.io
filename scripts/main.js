let myImage = document.querySelector('img')

myImage.onclick = function(){                                   /* */
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){                         /*更改标题的弹窗*/
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){             /*判断有没有输入*/
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'mozilla sixsixsix，' + myName;
}}

if (!localStorage.getItem('name')){         /*判断name是否有数据*/
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla sixsixsix，' + storedName;
}

myButton.onclick = function() {             /*按钮调用更改标题弹窗*/
    setUserName();
}

