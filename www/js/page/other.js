Other = {
    init: function (page, nav) {
        
        page.querySelector('#logout_btn').onclick = function () {
            Auth.logout(function () {
                nav.pushPage('login.html');
            }, function () {
                alert('ログアウト処理に失敗しました。');
            });
        }
        
/*
        page.querySelector('#logout_btn').onclick = function () {
            Auth.logout(function (response) {
                nav.pushPage('login.html');
            }, function () {
                alert('ログアウト処理に失敗しました。');
            });
        }
*/
        
    }
}