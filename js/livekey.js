function getLiveKey(url) {
    if (url.indexOf("kds1://") > -1 || url.indexOf("kds2://") > -1) {
        if (url.indexOf("kds1://") > -1) {
            url = url.replace("kds1://", "http://mlive.91kds.cn/b9/")
        } else if (url.indexOf("kds2://") > -1) {
            url = url.replace("kds2://", "http://mlive.91kds.cn/c9/")
        }
        url = url.replace("@@", ".m3u8?");
        $.post('fuck.php?t=' + Math.random(),
        function(obj) {
            if (obj != null) {
                startPlay(url, obj.livekey)
            }
        },
        "json")
    } else {
        startPlay(url, "", "")
    }
}
function startPlay(url, k) {
    var media = document.getElementById("ikdsPlayer");
    if (url.indexOf(".91kds.com") > -1||url.indexOf(".91kds.cn") > -1) {
        media.src = url + "&" + k
    } else {
        media.src = url
    }
    media.play()
}
function getLiveBack(id, st, et) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myLiveBack").innerHTML = xmlhttp.responseText
        }
    }
    xmlhttp.open("GET", "get_liveback.php?id=" + id + "&st=" + st + "&et=" + et, true);
    xmlhttp.send()
}
function getEpg(id, day, ishk) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myEpg").innerHTML = xmlhttp.responseText
        }
    }
    xmlhttp.open("GET", "get_epg.php?id=" + id + "&day=" + day + "&ishk=" + ishk, true);
    xmlhttp.send()
}