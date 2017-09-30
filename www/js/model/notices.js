Notices = {
    loaded_at: null,
    list: function (success, error, limit, page) {
        var page = page || 1;
        var limit = limit || 20;
        var loaded_at = page != 1 ? Notices.loaded_at : Util.dateFormat();

        var loading_modal = document.querySelector('#loading-modal');

        loading_modal.show();
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
    }
}