/**
 * /$$      /$$ /$$$$$$$           /$$$$$$  /$$   /$$
 * | $$$    /$$$| $$__  $$         /$$__  $$| $$$ | $$
 * | $$$$  /$$$$| $$  \ $$        | $$  \__/| $$$$| $$
 * | $$ $$/$$ $$| $$$$$$$/ /$$$$$$| $$      | $$ $$ $$
 * | $$  $$$| $$| $$__  $$|______/| $$      | $$  $$$$
 * | $$\  $ | $$| $$  \ $$        | $$    $$| $$\  $$$
 * | $$ \/  | $$| $$  | $$        |  $$$$$$/| $$ \  $$
 * |__/     |__/|__/  |__/         \______/ |__/  \__/
 */

//chrome f12执行于种子列表页

(function () {

    function loadJquery(css, contextNode) {
        document.getElementsByTagName('head')[0].innerHTML += '<script src="http://upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js"></script>';
    }

    function Thanks() {
        var links = jQuery('table.torrents tbody tr.sticky_blank td.rowfollow table.torrentname td.embedded:first-child > a[href]');
        //获得所有的种子详情页的链接    Ourbits专属数据，需自定义
        for (var key in links) {
            var torrentId = links[key].href;
            if (torrentId != undefined) {
                torrentId = torrentId.substr(35,torrentId.length - 35);//删除ID前的URL    Ourbits专属数据，需自定义
                torrentId = torrentId.substr(0,torrentId.length - 6);//删除ID后的“&hit=1”
                //通过种子详情页链接获取种子ID
                jQuery.post("/thanks.php",
                    {
                        id: torrentId
                    },
                    function (data, status) {
                        console.log("ID:" + torrentId + "      数据: " + data + "        状态: " + status + "\n");
                    }
                );
            }
        }
    }

    loadJquery();
    Thanks();
})();
