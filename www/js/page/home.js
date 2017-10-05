Home = {
    init: function (page, nav) {
        var notice_list = page.querySelector('#notice-list');
        var $list = $(notice_list);

        $list.empty();

        Notices.list(function (pRec) {
            if (pRec) {
                var items = [];
                for (var i=0;i<pRec.length;i++){
                    var wRec = pRec[i];
                    var item = $('<ons-list-item />');

                    // var ではダメ。letで。
                    let wTitle = wRec["タイトル"]["value"];
                    let wContents = wRec["お知らせ内容"]["value"];
                    let wFileKey = wRec["添付ファイル"]["value"][0].fileKey;

                    item.attr('modifier', 'chevron')
                        .data('id', wRec["$id"]["value"])
                        .text(wRec["タイトル"]["value"])
                        .on('click', function (e) {
                            //console.log(record.id);
                            //nav.pushPage('notice_detail1.html', { 'animation': 'slide',data:{ title:wRec["タイトル"]["value"],content:wRec["お知らせ内容"]["value"],fileKey:wRec["添付ファイル"]["value"][0].fileKey} });
                            nav.pushPage('notice_detail.html',
                            {'animation':'slide',data:{title:wTitle,content:wContents,fileKey:wFileKey}});
                            
                        });
                    items.push(item);

                }    
                $list.append(items);
            }
        }, function () {
            //alert('お知らせの取得に失敗しました。');
        }, 5);
    },
    
    notice_detail:function(page, nav){
        
        //alert(page.data.title + page.data.content + page.data.fileKey);
        page.querySelector('.title').innerHTML=page.data.title;
        page.querySelector('.content').innerHTML=page.data.content;
        page.querySelector('.fileKey').innerHTML=page.data.fileKey;

        let img = document.createElement('img');
        //img.setAttribute("width","60px");
        img.setAttribute("width","100%");
        //style="width: 100%"
        img.setAttribute("id",page.data.fileKey);    // IDをキーに非同期で画像を貼り付ける

        page.querySelector('.fileKey').appendChild(img);

        Notices.setImage(page.data.fileKey, img);
 
    }
}