const keyarr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'ShiftL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftR', 'Up','ControlL', 'AltL', 'Space', 'AltR', 'ControlR', 'Left', 'Down', 'Right'];
/*const keyobj = {key1
    , key2
    , key3
    , key4
    , key5
    , key6
    , key7
    , key8
    , key9
    , key10
    , key11
    , key12
    , key13
    , key14
    , key15
    , key16
    , key17
    , key18
    , key19
    , key20
    , key21
    , key22
    , key23
    , key24
    , key25
    , key26
    , key27
    , key28
    , key29
    , key30
    , key31
    , key32
    , key33
    , key34
    , key35
    , key36
    , key37
    , key38
    , key39
    , key40
    , key41
    , key42
    , key43
    , key44
    , key45
    , key46
    , key47
    , key48
    , key49
    , key50
    , key51
    , key52
    , key53
    , key54
    , key55
    , key56
    , key57
    , key58
    , key59
    , key60
    , key61
    , key62
    , key63
    , key64
    , key65
    , key66};

/*document.addEventListener (onkeydown = function (event) {
    keyarr.push(event.key);
    console.log(keyarr);
});*/
//console.log(keyarr[0]);
/*for (let {a= key[i]} of keyobj) {
    console.log("Key:", a);
}*/
const TXTAREA = document.createElement ('textarea');
document.body.append (TXTAREA)
const KEYBOARD = document.createElement ('div');
document.body.append (KEYBOARD);
KEYBOARD.className = 'keyboard';
function drawKeyboard () {
    let out = '';
    for (let i = 0; i < keyarr.length; i++) {
        if (i === 15 || i === 29 || i === 42 || i === 55) {
            out += '<div class="new-row"></div>';
        }
    out = out + `<div class="key-btn id${keyarr[i]}">${keyarr[i]}</div>`;
}
    KEYBOARD.innerHTML += out;

}
drawKeyboard();

addEventListener('keydown',(k) => {
    k.preventDefault();
   console.log(k.code)
   // console.log(document.querySelector('.ido').classList[1])
    if (k.code === 'ControlLeft') {
        document.querySelector (`.idControlL`).classList.add("active")
    } else if (k.code === 'ControlRight'){
        document.querySelector (`.idControlR`).classList.add("active")
    } else if (k.code === 'ShiftLeft') {
        document.querySelector (`.idShiftL`).classList.add("active")
    } else if (k.code === 'ShiftRight'){
        document.querySelector (`.idShiftR`).classList.add("active")
    } else if (k.code === 'AltLeft') {
        document.querySelector (`.idAltL`).classList.add("active")
    } else if (k.code === 'AltRight'){
        document.querySelector (`.idAltR`).classList.add("active")
    } else if (k.code === 'Space') {
        document.querySelector (`.id${k.code}`).classList.add("active")
    } else {

        document.querySelector (`.id${k.key}`).classList.add("active")
        
    }


})
addEventListener('keyup',(k) => {
    console.log(k.code)
    // console.log(document.querySelector('.ido').classList[1])
     if (k.code === 'ControlLeft') {
         document.querySelector (`.idControlL`).classList.remove("active")
     } else if (k.code === 'ControlRight'){
         document.querySelector (`.idControlR`).classList.remove("active")
     } else if (k.code === 'ShiftLeft') {
         document.querySelector (`.idShiftL`).classList.remove("active")
     } else if (k.code === 'ShiftRight'){
         document.querySelector (`.idShiftR`).classList.remove("active")
     } else if (k.code === 'AltLeft') {
         document.querySelector (`.idAltL`).classList.remove("active")
     } else if (k.code === 'AltRight'){
         document.querySelector (`.idAltR`).classList.remove("active")
     } else if (k.code === 'Space') {
        document.querySelector (`.id${k.code}`).classList.remove("active")
     } else {
         document.querySelector (`.id${k.key}`).classList.remove("active")
         if (k.key === 'Enter') {
             TXTAREA.value += '\r\n';
         } else {
             TXTAREA.value += k.key;
         }
     }
 
 
 })
/*addEventListener('keyup',(k) => {
    // console.log(`id${k.key}`)
    // console.log(document.querySelector('.ido').classList[1])
    document.querySelector (`.id${k.key}`).classList.remove("active")})
/*function textInput () {
    let textout = '';
    textout += '<div class="textarea"><textarea rows="5" ></textarea></div>';
    textout.addEventListener("input", (e) => {
        console.log(`Key "${e.data}" input [event: input]`);}
    )
    document.querySelector('body').innerHTML = textout;
}
textInput();*/