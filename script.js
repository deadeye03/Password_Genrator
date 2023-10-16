let box1pass = document.getElementById('GenBox1');
let box2pass = document.getElementById('GenBox2');
let box3pass = document.getElementById('GenBox3');
let box4pass = document.getElementById('GenBox4');

class Password {
    constructor(small, greater, number,char) {
        this.small = small;
        this.greater = greater;
        this.number = number;
        this.char=char
    }
    superstrong() {
        let pass = `${this.greater.slice(0, 1)}${this.small[1]}${this.greater.slice(1, 3)}${this.small[0]}${this.char.slice(0,2)}${this.number}${this.small[2]}${this.char[2]}`
        box1pass.innerHTML = pass
    }
    strong(){
        let pass1 = `${this.greater.slice(0, 1)}${this.small[1]}${this.greater.slice(1, 3)}${this.small[0]}${this.number[2]}${this.small[2]}${this.number[0]}`
        box2pass.innerHTML = pass1
    }
    weak(){
        let pass2 = `${this.number}${this.number[0]}${this.number}`
        box3pass.innerHTML = pass2
    }


}
class funnypass extends Password{
    constructor(small,greater,number,char,message){
        super(small,greater,number,char)
        this.message=message;
    }
    funny(){
        let pass=`${this.message}`
        box4pass.innerHTML=pass;
    }
}
const SmallRandomAlphabet = () => {
    let alphabet = 'abcdfghijklmnpqrstuvwxyz';
    let element = '';
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * alphabet.length)
        element += alphabet[index];

    }
    return element;
}
const BigRandomAphabet=()=>{
    let alphabet='ABCDFGHIGKLMNOPQRSTUVWXYZ';
    let element = '';
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * alphabet.length)
        element += alphabet[index];

    }
    return element;
}
const NumberRandomAphabet=()=>{
    let alphabet='1234567890';
    let element = '';
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * alphabet.length)
        element += alphabet[index];

    }
    return element;
}
const SpecialRandomChar=()=>{
    let alphabet='!@#$%^&*?';
    let element = '';
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * alphabet.length)
        element += alphabet[index];

    }
    return element;
}
const FunnyRandomMess=()=>{
    let message=['Aaosalo','Achhaa','ThikHai','Samjhgaya','MainNahiBataunga','TuJaRe','Password','Incorrect','PaiseNikal','AbTuGaya','Copied','HasReHalkat','HEHEHEHE','undefined','null','error','BetterLuck','NextTime']
    let index=Math.floor(Math.random()*message.length);
    return message[index]
}

let superPass = document.getElementById('pass1');
let GenrateSuperPass = () => {
    let GenratePass = new Password(SmallRandomAlphabet(), BigRandomAphabet(),NumberRandomAphabet() ,SpecialRandomChar())
    GenratePass.superstrong();
   
}
superPass.addEventListener('click', GenrateSuperPass);

let strongPass = document.getElementById('pass2');
let GenratestrongPass = () => {
    console.log('hii')
    let GenratePass1 = new Password(SmallRandomAlphabet(), BigRandomAphabet(),NumberRandomAphabet() ,SpecialRandomChar())
    GenratePass1.strong();
   
}
strongPass.addEventListener('click', GenratestrongPass);

let weakPass = document.getElementById('pass3');
let GenrateweakPass = () => {
    
    let GenratePass1 = new Password(SmallRandomAlphabet(), BigRandomAphabet(),NumberRandomAphabet() ,SpecialRandomChar())
    GenratePass1.weak();
   
}
weakPass.addEventListener('click', GenrateweakPass);

let funnypass1=document.getElementById('pass4');
let Genratefunnypass=()=>{
    let GenratePass=new funnypass(SmallRandomAlphabet(), BigRandomAphabet(),NumberRandomAphabet() ,SpecialRandomChar(),FunnyRandomMess());
    GenratePass.funny()
}

funnypass1.addEventListener('click',Genratefunnypass);

// Copy password to clipboard 
const SuperStrongCopyPass=()=>{
    let textToCopy=box1pass.innerHTML ;
    
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = textToCopy;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    
}
let CopyBtn1=document.getElementById('copy1');
CopyBtn1.addEventListener('click',SuperStrongCopyPass);

const strongCopyPass=()=>{
    let textToCopy=box2pass.innerHTML ;
    
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = textToCopy;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    
}
let CopyBtn2=document.getElementById('copy2');
CopyBtn2.addEventListener('click',strongCopyPass);

const weakCopyPass=()=>{
    let textToCopy=box3pass.innerHTML ;
    
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = textToCopy;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    
}
let CopyBtn3=document.getElementById('copy3');
CopyBtn3.addEventListener('click',weakCopyPass);

const funnpyCopyPass=()=>{
    let textToCopy=box4pass.innerHTML ;
    
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = textToCopy;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    
}
let CopyBtn4=document.getElementById('copy4');
CopyBtn4.addEventListener('click',funnpyCopyPass);