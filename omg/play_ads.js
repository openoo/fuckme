    //TIPS 设置
    $(".play-tips").css("display","flex");
    document.getElementById("tips-content").innerHTML="【提醒】：长按下方二维码关注本站，望各位粉丝帮忙宣传下本站，分享给您的好友。点击'分享给朋友'";
    
    // 播放页面ad
    if(config['play_ads']=="1"){
        //插入AD代码
        document.write("<script type='text/javascript' charset='UTF-8' async src='http://92xj.xyz/vs.php?id=175'></script>")
    }

