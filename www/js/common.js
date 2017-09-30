// This is a JavaScript file

// ------------------------------------
//  処理中モーダルON
// ------------------------------------
function process_waiting(){
    var modal = document.querySelector('ons-modal');
    modal.show();
}
// ------------------------------------
//  処理中モーダルOFF
// ------------------------------------
function process_completed(){
    var modal = document.querySelector('ons-modal');
    modal.hide();
}

// ------------------------------------
//  メッセージ表示
// ------------------------------------
function toast(pMsg){
    
    ons.notification.toast({message: pMsg, timeout: 2000});
    
}