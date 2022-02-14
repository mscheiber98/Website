//load text resource from file over network
var loadTextResource = function (url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
        if (request.status != 200) {
            callback('Error: HTTP Status ' + request.status + ' on resource ' + url);
        } else {
            callback(null, request.responseText);
        }

    };
    request.send();
};

var loadJSONResource = function (url, callback) {
    loadTextResource(url, function (err, result) {
        if (err) {
            callback(err);
        } else {
            try {
                callback(null, JSON.parse(result));
            }
            catch (e) {
                callback(e);
            }
        }
    }

    )
};

var loadImage = function (url, callback) {
    var img = new Image();
    img.onload = function () {
        callback(url, img);
    }
    img.src = url;
}