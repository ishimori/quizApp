Notices = {
    loaded_at: null,
    
    list: function (success, error, limit, page) {
        var page = page || 1;
        var limit = limit || 20;
        var loaded_at = page != 1 ? Notices.loaded_at : Util.dateFormat();

        var loading_modal = document.querySelector('#loading-modal');

        loading_modal.show();
        $.ajax({
            url: "https://"+ getter('kintoneSubdomain') + ".cybozu.com/k/v1/records.json",
            method: 'GET',
            headers: {
                "X-Cybozu-API-Token":getter('kintoneToken')
            },
            data:{
                "app":getter('kintoneAppId'),
                //"query":"order by スマイル desc "
            }
        }).done(function(data) {
            
            // 検索結果を表示
            //showKintoneResult(data.records);
            //alert(data.records);
            success(data.records);
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
            alert('failure');
            var msg = "kintone取得失敗：" + textStatus + errorThrown;
            toast(msg);
            error();
        }).always(function(){
            loading_modal.hide();
            Notices.loaded_at = loaded_at;
        });
    

        
/*        
        $.ajax({
            type: 'GET',
            url: Config.BASE_URL + 'notices/list',
            cache: false,
            data: {
                'limit': limit,
                'page': page,
                'loaded_at': loaded_at
            },
            dataType: 'json'
        })
            .done(success)
            .fail(error)
            .always(function () {
                loading_modal.hide();
                Notices.loaded_at = loaded_at;
            });
            */
    },
    
    detail: function(success, error, pId){
        
    }
    
    
}