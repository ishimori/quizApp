Home = {
    init: function (page, nav) {
        var notice_list = page.querySelector('#notice-list');
        var $list = $(notice_list);

        $list.empty();

        Notices.list(function (pRec) {
            if (pRec) {
                var fd = document.createDocumentFragment();
                var items = [];
                for (var i=0;i<pRec.length;i++){
                    var wRec = pRec[i];
                    var item = $('<ons-list-item />');
console.log(wRec["添付ファイル"]["value"][0].fileKey);

                    item.attr('modifier', 'chevron')
                        .data('id', wRec["$id"]["value"])
                        .text(wRec["タイトル"]["value"])
                        .on('click', function (e) {
                            //console.log(record.id);
                            nav.pushPage('notice_detail1.html', { 'animation': 'slide',data:{ title:wRec["タイトル"]["value"],content:wRec["お知らせ内容"]["value"],fileKey:wRec["添付ファイル"]["value"][0].fileKey} });
                            
                        });
                    items.push(item);

            
/*            
            console.log(wRec);
            alert(wRec["タイトル"]["value"]);
            alert(wRec["添付ファイル"]["value"][0].filekey);
                    //console.log(JSON.stringify(wRec));
                    var wFileKey = wRec["添付ファイル"]["value"][0].fileKey;
            
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
                    
                    col2.innerHTML = wRec["タイトル"]["value"] + " [id=" + wRec["$id"]["value"] +"]" ;
                    
                    // パラメータを増やす時はindex.html のscriptを修正
                    var wOpt = "{id:"+wRec['$id']['value']+",title:'"+wRec['タイトル']['value']+"',filekey:'" + wFileKey + "'}";
                    col2.setAttribute("onclick","nav.pushPage('score_detail.html',{data:"+ wOpt +"});");
                    
                    row.appendChild(col1);
                    row.appendChild(col2);
                    
                    fd.appendChild(row);
*/                    
                }    
                $list.append(items);
                //$list.appendChild(fd);
                
/*                
                
                var items = [];
                response.data.forEach(function (record) {
                    var item = $('<ons-list-item />');

                    item.attr('modifier', 'chevron')
                        .data('id', record.id)
                        .text(record.title)
                        .on('click', function (e) {
                            console.log(record.id);
                            nav.pushPage('ranking_detail1.html', { 'animation': 'slide' });
                        });
                    items.push(item);
                });

                if (!items.length) {
                    var no_item = $('<ons-list-item />')
                        .text('お知らせはありません。');
                    items.push(no_item);
                }
                $list.append(items);
*/
            }
        }, function () {
            alert('お知らせの取得に失敗しました。');
        }, 5);
        

/*
        Notices.list(function (response) {
            if (response.data) {
                var items = [];
                response.data.forEach(function (record) {
                    var item = $('<ons-list-item />');

                    item.attr('modifier', 'chevron')
                        .data('id', record.id)
                        .text(record.title)
                        .on('click', function (e) {
                            console.log(record.id);
                            nav.pushPage('ranking_detail1.html', { 'animation': 'slide' });
                        });
                    items.push(item);
                });

                if (!items.length) {
                    var no_item = $('<ons-list-item />')
                        .text('お知らせはありません。');
                    items.push(no_item);
                }
                $list.append(items);
            }
        }, function () {
            alert('お知らせの取得に失敗しました。');
        }, 5);
 */       
        
    }
}