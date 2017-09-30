function showMap(){

console.log(g_lat + " " + g_lon);

    var mapOptions = {
        //center: new google.maps.LatLng(35.658892, 139.755286),    //地図上で表示させる緯度経度
        center: new google.maps.LatLng(g_lat, g_lon),    //地図上で表示させる緯度経度
        zoom: 14,                                                 //地図の倍率
        mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

    //ons.compile(document.getElementById('map_canvas'));
}
