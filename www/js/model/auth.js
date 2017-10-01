Auth = {
    login: function (account, password, success, error) {
        var loading_modal = document.querySelector('#loading-modal');

        loading_modal.show();
        
        var application_key = "e8d2fce8b54dadcb64c24a8532e93f566936740792508a3c57d6218723c16360";
        var client_key = "04d1d7975459977d3c0fd947b969290e121c28dd083e3c34911f29e6c38deb7f";
        var ncmb = null;
        ncmb = new NCMB(application_key, client_key);
        
        ncmb.User.login(account,password)
            .then(function(user){
                // ログイン後処理
                localStorage.setItem('account', user.userName);
                localStorage.setItem('password', user.password);
                
                nav.pushPage('tab.html');
            })
            .catch(function(err){
                // エラー処理
                alert('ログイン失敗');
            });
        
        loading_modal.hide();

    },

    checkLogined: function (success, error) {

        var loading_modal = document.querySelector('#loading-modal');

        // TODO ローカルストレージを参照し、ログイン情報の有無をチェックする
        if (localStorage.getItem('account')){
            // ログイン情報有り
            success();
        }else{
            // ログイン情報無し
            error();
        }
    
    },

    logout: function (success, error) {
        
        localStorage.clear();

        success();

    }
}