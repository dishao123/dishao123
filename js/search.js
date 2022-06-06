var str = "";
       $(".nav ul li").click(function (){
          $(".nav ul li").removeClass("active");
          $(this).addClass("active");
          str = $(this).text() + " ";    
       });
       $("#btns").click(function (){                   
          str += $("#searchs").val();          
          var vals = str.split(/\s+/);                  
          if (vals[0] == "bd" || vals[0] == "百度"){
            location.href = "https://www.baidu.com/s?wd=" + vals[1];
          }
          if (vals[0] == "sg" || vals[0] == "搜狗") {
            location.href = "http://www.sogou.com/web?query=" + vals[1];
          }
           if (vals[0] == "gg" || vals[0] == "谷歌") {
            location.href = "https://g.vovososo.com/search?q=" + vals[1];
          }
          if (vals[0] == "sm" || vals[0] == "神马") {
            location.href = "https://m.sm.cn/s?q=" + vals[1];
          }
          if (vals[0] == "tt" || vals[0] == "头条") {
            location.href = "https://so.toutiao.com/search/?keyword=" + vals[1];
          }
          
          if (vals[0] == "gh" || vals[0] == "Github"){
            location.href = "https://github.com/search?q=" + vals[1];
          }if(vals.length == 1) {
            location.href = "https://www.baidu.com/s?wd=" + vals;
          }
          
       });
