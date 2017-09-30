Home = {
    init: function (page, nav) {
        var notice_list = page.querySelector('#notice-list');
        var $list = $(notice_list);

        $list.empty();

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
    }
}