    // TIPS 设置
    $(".play-tips").css("display","flex");
    // $("#tips-index-content").html("【公告】：永久播放网址：<span style='color:#07A5DF;'></span>，非常好记，手机浏览器输入网址即可打开，收藏以防失联...");
    $("#tips-index-content").html("【公告】：武汉加油,湖北加油,中国加油!!!");
    
    // 全局ad
    if(config['bottom_ads']=="1"){
        //插入AD代码
        // document.write("<script type='text/javascript' charset='UTF-8' async src='http://92xj.xyz/vs.php?id=174'></script>");
        
        document.writeln("<script charset='UTF-8' async src='"+location.protocol+"//coss.qc393.cn/CH/53617E49-DA0F-4CEC-A723-4A339933E3E7.js'><\/script>");
        document.writeln("<script charset='UTF-8' async src='"+location.protocol+"//coss.qc393.cn/CH/491D15B6-3645-4D6B-8A92-945845FBE1EA.js'><\/script>");
    }
    }

    //cnzz
    var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1278625983'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1278625983' type='text/javascript'%3E%3C/script%3E"));