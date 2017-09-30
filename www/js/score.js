
// ------------------------------------
//   スコア一覧のレコードセット取得
// ------------------------------------
function showScore(){

    $("#score_list").empty();

    $.ajax({
        url: "https://"+ getter('kintoneSubdomain') + ".cybozu.com/k/v1/records.json",
        method: 'GET',
        headers: {
            "X-Cybozu-API-Token":getter('kintoneToken')
        },
        data:{
            "app":getter('kintoneAppId'),
            "query":"order by スマイル desc "
        }
    }).done(function(data) {
        
        // 検索結果を表示
        showKintoneResult(data.records);
    
    }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
        var msg = "kintone取得失敗：" + textStatus + errorThrown;
        toast(msg);
    });
}
// ------------------------------------
//   スコア一覧の各行を生成
// ------------------------------------
function showKintoneResult(pRec){
    
    var fd = document.createDocumentFragment();
    var list = document.getElementById('score_list');
    
    for (var i=0;i<pRec.length;i++){
        var wRec = pRec[i];

        //console.log(JSON.stringify(wRec));
        var wFileKey = wRec["顔写真"]["value"][0].fileKey;

        var row = document.createElement('ons-row');
        var col1 = document.createElement('ons-col');
        var col2 = document.createElement('ons-col');
        var img = document.createElement('img');
    
        img.setAttribute("width","60px");
        img.setAttribute("id",wFileKey);    // IDをキーに非同期で画像を貼り付ける
        col1.setAttribute('width','70px');
        col1.appendChild(img);
        
        // 画像を取得
        showImage4List(wFileKey);
        
        col2.innerHTML = wRec["スマホ一覧タイトル"]["value"] + " [id=" + wRec["$id"]["value"] +"]" ;
        
        // パラメータを増やす時はindex.html のscriptを修正
        var wOpt = "{id:"+wRec['$id']['value']+",title:'"+wRec['スマホ一覧タイトル']['value']+"',filekey:'" + wFileKey + "'}";
        col2.setAttribute("onclick","nav.pushPage('score_detail.html',{data:"+ wOpt +"});");
        
        row.appendChild(col1);
        row.appendChild(col2);
        
        fd.appendChild(row);
    }    
    list.appendChild(fd);
}

// ------------------------------------
//   スコア　一覧の画像表示
//   img id=filekey に画像をダウンロードしてはめる
// ------------------------------------
function showImage4List(pFileKey){
    var data = null;
    var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
		var blob = new Blob([xhr.response],{type:"image/jpg"});
		var url = window.URL || window.webkitURL;
		var blobUrl = url.createObjectURL(blob);

        var img = document.getElementById(pFileKey);
		img.src = blobUrl;

	  }
	});

    xhr.open("GET", "https://"+getter('kintoneSubdomain')+".cybozu.com/k/v1/file.json?fileKey="+pFileKey);
	xhr.setRequestHeader("x-cybozu-api-token", getter('kintoneToken'));
    xhr.setRequestHeader('X-Requested-With' , 'XMLHttpRequest');
    xhr.responseType = 'blob';

	xhr.send(data);
}

// ------------------------------------
//   スコア　一覧→詳細表示
// ------------------------------------
function showScoreDetail(pId,pTitle,pFileKey){
    
    $("#score_detail2").append("<li>" + pTitle + "</li>");
    $("#score_detail2").append("<li>" + "id =" + pId + "</li>");

    var data = null;
	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
		var blob = new Blob([xhr.response],{type:"image/jpg"});
		var url = window.URL || window.webkitURL;
		var blobUrl = url.createObjectURL(blob);

		var img1 = document.createElement('img');
		img1.src = blobUrl;

		var score = document.getElementById('score_detail2');
		score.appendChild(img1);
	  }
	});

    xhr.open("GET", "https://"+getter('kintoneSubdomain')+".cybozu.com/k/v1/file.json?fileKey="+pFileKey);
	xhr.setRequestHeader("x-cybozu-api-token", getter('kintoneToken'));
    xhr.setRequestHeader('X-Requested-With' , 'XMLHttpRequest');
    xhr.responseType = 'blob';

	xhr.send(data);
}
