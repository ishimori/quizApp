Login = {
    init: function (page, nav) {
        
        // ログイン済か
        Auth.checkLogined(
            function () {
                // ログイン画面のID/PASSWORDを表示
                //page.querySelector('#login_username').value = localStorage.getItem('account');
                //page.querySelector('#login_password').value = localStorage.getItem('password');
                
                // ログイン後画面に自動遷移
                nav.pushPage('tab.html', {animation: 'none'});
                //nav.pushPage('index.html', {animation: 'none'});
            },function () {
                console.log("認証情報がLocalStorageにないのでログインページ表示します。");
                //nav.pushPage('login.html', {animation: 'none'});
            });

/*
        // ログイン済か
        Auth.checkLogined(
            function (response) {
                // 認証済ならホームに遷移する
                if (response && !response.error) {
                    nav.pushPage('tab.html');
                }
            },function () {
                console.log("認証情報がLocalStorageにないのでログインページ表示します。");
            });

*/

        // ログイン処理
        page.querySelector('#login_btn').onclick = function () {
            var account = page.querySelector('#login_username');
            var password = page.querySelector('#login_password');

            Auth.login(account.value, password.value,
                function (response) {
                    if (response.status == 1) {
                        nav.pushPage('tab.html');
                    } else {
                        alert('ログインできません。\nユーザー名・パスワードを確認してください。');
                    }
                }, function () {
                    alert('ログイン処理に失敗しました。');
                });
        }
    }
}