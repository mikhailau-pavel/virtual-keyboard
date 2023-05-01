const keyarr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Up','Control', 'Alt', 'Space', 'Alt', 'Control', 'Left', 'Down', 'Right'];
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
console.log(keyarr[0]);
/*for (let {a= key[i]} of keyobj) {
    console.log("Key:", a);
}*/
function drawKeyboard () {
    let out = '';
    for (let i = 0; i < keyarr.length; i++) {
        if (i === 15 || i === 29 || i === 42 || i === 55) {
            out += '<div class="new-row"></div>';
        }
    out = out + `<div class="key-btn id${keyarr[i]}">${keyarr[i]}</div>`;
}
    document.querySelector('body').innerHTML = out;

}
drawKeyboard();