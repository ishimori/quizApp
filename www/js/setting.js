// This is a JavaScript file

function getter(pKey){

    switch (pKey) {
        case "cvWidth":
            return 400;
            break;
        case "cvQuality":
            return 0.75;
            break;
        case "ssKey":
            return "632a8686d6c44408a915533fc4c331c7";
            break;
        case "uriBase":
            return "https://southeastasia.api.cognitive.microsoft.com/face/v1.0/detect";
            break;
        case "ssKeyVis":
            return "c7e8b9725017481292d55d2d0207f85c";
            break;
        case "uriBaseVis":
            return "https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/describe";
            break;
        case "kintoneToken":
            return "c2xekErUxLIYjyJE9Z9U1l6WsUR56lvicnRiJtP2";
            break;
        case "kintoneSubdomain":
            return "1cx5k";
            break;
        case "kintoneAppId":
            return 53;
            break;
        case "kintoneUserName":
            return "いしもり";
            break;

    }
    return 0
}

