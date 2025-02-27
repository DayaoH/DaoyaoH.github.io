/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
//Edge symbol: 'stage'
   (function(symbolName) {


      

      

      

      
      

      

      Symbol.bindElementAction(compId, symbolName, "${rBtn}", "touchstart", function(sym, e) {
         sym.getSymbol("rBtn").stop(250);
         var y = sym.getVariable("snum");
         var x = sym.getSymbol("s"+y).getPosition();
         if (x == 1000){
         sym.$("rBtn").hide();
         } else {
         sym.getSymbol("s"+y).play();
         sym.$("lBtn").show();
		 	
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rBtn}", "touchend", function(sym, e) {
         sym.getSymbol("rBtn").stop(0);
         var y = sym.getVariable("snum");
         sym.getSymbol("s"+y).stop();
         var x = sym.getSymbol("s"+y).getPosition();
         if (x == 1000){
         	sym.$("rBtn").hide();
         	}
		
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lBtn}", "touchstart", function(sym, e) {
         sym.getSymbol("lBtn").stop(250);
         var y = sym.getVariable("snum");
         var x = sym.getSymbol("s"+y).getPosition();
         if (x == 0){
         sym.$("lBtn").hide();
         } else {
         sym.getSymbol("s"+y).playReverse();
         sym.$("rBtn").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lBtn}", "touchend", function(sym, e) {
         sym.getSymbol("lBtn").stop(0);
         var y = sym.getVariable("snum");
         sym.getSymbol("s"+y).stop();
         var x = sym.getSymbol("s"+y).getPosition();
         if (x == 0){
         	sym.$("lBtn").hide();
         	}
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         //sym.$("safePop").show();
         //sym.getSymbol("safePop").play("in");
         sym.$("rulePop").show();
         sym.getSymbol("rulePop").play("first");
         sym.stop();
         // 开始游戏设置snum:
         sym.setVariable("snum",1);
         // 设置拼图变量pnum:
         sym.setVariable("pnum",1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("puzzlesPreload").hide();
         
         sym.getSymbol("s1").stop(500);
         sym.getSymbol("rulePop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_1.png)");// 指定第一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_1").css("background-image","url(images/ui/puzzles/puzzle_1.png)"); // 指定已获得拼图里显示拼图1
         sym.getSymbol("box").$("prevBtn").hide();

         sym.getSymbol("safePop").$("num1").html(0);
         sym.getSymbol("safePop").$("num2").html(0);
         sym.getSymbol("safePop").$("num3").html(0);
         sym.getSymbol("safePop").$("num4").html(0);

         sym.getSymbol("timer").$("Text").html("04:59");
         sym.getSymbol("puz").$("Text").html("1 / 9");
         
         sym.getSymbol("musicBtn").stop("on");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // 如果是场景1则隐藏上一场景按钮：
         sym.getSymbol("box").$("prevBtn").hide();
         // 重新使左右按钮显示出来，避免出错
         sym.$("lBtn").show();
         sym.$("rBtn").show();
         // 场景1设置snum:
         sym.setVariable("snum",1);
         // 让当前场景居中
         sym.getSymbol("s1").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${musicBtn}", "touchstart", function(sym, e) {
         if (sym.$("bg")[0].paused) {
         	sym.$("bg")[0].play();
         	sym.getSymbol("musicBtn").stop("on");
         } else {
         	sym.$("bg")[0].pause();
         	sym.getSymbol("musicBtn").stop("off");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({load:"css/b.css"});
         // 调试：
         //sym.play("end");
         //setTimeout(function(){sym.play("win")},7000);  

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // 显示上一场景按钮：
         sym.getSymbol("box").$("prevBtn").show();
         // 重新使左右按钮显示出来，避免出错
         sym.$("lBtn").show();
         sym.$("rBtn").show();
         // 场景1设置snum:
         sym.setVariable("snum",2);
         // 让当前场景居中
         sym.getSymbol("s2").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // 重新使左右按钮显示出来，避免出错
         sym.$("lBtn").show();
         sym.$("rBtn").show();
         // 场景3设置snum:
         sym.setVariable("snum",3);
         // 让当前场景居中
         sym.getSymbol("s3").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // 显示下一场景按钮：
         sym.getSymbol("box").$("nextBtn").show();
         // 重新使左右按钮显示出来，避免出错
         sym.$("lBtn").show();
         sym.$("rBtn").show();
         // 场景3设置snum:
         sym.setVariable("snum",4);
         // 让当前场景居中
         sym.getSymbol("s4").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // 如果是场景5则隐藏下一场景按钮：
         sym.getSymbol("box").$("nextBtn").hide();
         // 重新使左右按钮显示出来，避免出错
         sym.$("lBtn").show();
         sym.$("rBtn").show();
         // 场景3设置snum:
         sym.setVariable("snum",5);
         // 让当前场景居中
         sym.getSymbol("s5").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         sym.getSymbol("winPop").play();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
        console.dir("stop")
         sym.getSymbol("losePop").play(250);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.getSymbol("End").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchmove", function(sym, e) {
         e.preventDefault()

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bg'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bg");
   //Edge symbol end:'bg'

   //=========================================================
   
   //Edge symbol: 'rBtn'
   (function(symbolName) {   
   
   })("rBtn");
   //Edge symbol end:'rBtn'

   //=========================================================
   
   //Edge symbol: 'lBtn'
   (function(symbolName) {   
   
   })("lBtn");
   //Edge symbol end:'lBtn'

   //=========================================================
   
   //Edge symbol: 's1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wcanBtn}", "touchstart", function(sym, e) {
         sym.getSymbol("wcan").play(250);
         sym.$("wcanBtn").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${diagBtn}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("quesPop").show();
         sym.getComposition().getStage().getSymbol("quesPop").play("in");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ruleBtn}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("rulePop").show();
         sym.getComposition().getStage().getSymbol("rulePop").play("in");

      });
      //Edge binding end

   })("s1");
   //Edge symbol end:'s1'

   //=========================================================
   
   //Edge symbol: 'wcan'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s1").$("wcanBtn").show();

      });
      //Edge binding end

   })("wcan");
   //Edge symbol end:'wcan'

   //=========================================================
   
   //Edge symbol: 'pting'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${painting}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("pting");
   //Edge symbol end:'pting'

   //=========================================================
   
   //Edge symbol: 'so'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("so");
   //Edge symbol end:'so'

   //=========================================================
   
   //Edge symbol: 'pilow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pillow}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${puzzle}", "touchstart", function(sym, e) {
         sym.$("puzzle").hide();
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_2.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_2").css("background-image","url(images/ui/puzzles/puzzle_2.png)"); // 指定已获得拼图里显示拼图2
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         sym.play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.play("out");

      });
      //Edge binding end

   })("pilow");
   //Edge symbol end:'pilow'

   //=========================================================
   
   //Edge symbol: 'di'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("di");
   //Edge symbol end:'di'

   //=========================================================
   
   //Edge symbol: 'wfinger'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wallhole}", "touchstart", function(sym, e) {
         sym.play("out");

      });
      //Edge binding end

   })("wfinger");
   //Edge symbol end:'wfinger'

   //=========================================================
   
   //Edge symbol: 'puz'
   (function(symbolName) {   
   
   })("puz");
   //Edge symbol end:'puz'

   //=========================================================
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         var x = sym.getVariable("sec");
         var y = sym.getVariable("min");
         // 结局的数字：
         var xa = sym.getVariable("resultSec");
         var ya = sym.getVariable("resultMin");
         
         // 结局成绩计算：
         if ( xa == 59) {
         		xa = 0;
         		ya = ya + 1;
         	} else {
         		xa = xa + 1;
         	};
         sym.setVariable("resultSec",xa);
         sym.setVariable("resultMin",ya);
         
         if (( y == 0 )&&( x== 0 )){
              // 游戏结束
              sym.getComposition().getStage().play("lose");
              y = 9999999999;
              x = 0;
         } else {
         	if ( x == 0) {
         		x = 59;
         		y = y - 1;
         	} else {
         		x = x - 1;
         	};
         };
         sym.setVariable("sec",x);
         sym.setVariable("min",y);
         
         // 让数字变红：
         if ( y == 0 ){
         sym.$("Text").css("color","#ff0000");
         };
         
         // 当为个位数的数字
         if ( x < 10 ) {
         sym.$("Text").html("0"+y+":0"+x);
         } else {
         sym.$("Text").html("0"+y+":"+x);
         };

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.setVariable("sec",59);
         sym.setVariable("min",4);
         
         sym.setVariable("resultSec",0);
         sym.setVariable("resultMin",0);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'box'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bboxTouch}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("boxPop").show();
         sym.getComposition().getStage().getSymbol("boxPop").play("in");
         sym.getComposition().getStage().$("box").hide();

      });
      //Edge binding end

   })("box");
   //Edge symbol end:'box'

   //=========================================================
   
   //Edge symbol: 'bbox'
   (function(symbolName) {   
   
   })("bbox");
   //Edge symbol end:'bbox'

   //=========================================================
   
   //Edge symbol: 'prevBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         // 上一场景
         var x = sym.getComposition().getStage().getVariable("snum");// 当前场景snum
         var y = x - 1;// 上一场景snum
         sym.getComposition().getStage().play("s"+x+"_out");// 当前场景播放退出
         setTimeout(function(){sym.getComposition().getStage().play("s"+y)},750); // 上一场景播放进入

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${prev}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("prevBtn");
   //Edge symbol end:'prevBtn'

   //=========================================================
   
   //Edge symbol: 'nextBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         // 下一场景
         var x = sym.getComposition().getStage().getVariable("snum");// 当前场景snum
         var y = x + 1;// 下一场景snum
         sym.getComposition().getStage().play("s"+x+"_out");// 当前场景播放退出
         setTimeout(function(){sym.getComposition().getStage().play("s"+y)},750); // 下一场景播放进入

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("nextBtn");
   //Edge symbol end:'nextBtn'

   //=========================================================
   
   //Edge symbol: 'boxPop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("boxPop").hide();
         sym.getComposition().getStage().$("box").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowBtn}", "touchstart", function(sym, e) {
         sym.play("out");

      });
      //Edge binding end

   })("boxPop");
   //Edge symbol end:'boxPop'

   //=========================================================
   
   //Edge symbol: 'quesPop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("quesPop").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${q1}", "touchstart", function(sym, e) {
         sym.$("wrAn").show();
         sym.$("wrAn").css("top","390px");
         sym.getSymbol("wrAn").play(250);
         sym.$("block").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${q3}", "touchstart", function(sym, e) {
         sym.$("wrAn").show();
         sym.$("wrAn").css("top","572px");
         sym.getSymbol("wrAn").play(250);
         sym.$("block").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${q4}", "touchstart", function(sym, e) {
         sym.$("wrAn").show();
         sym.$("wrAn").css("top","676px");
         sym.getSymbol("wrAn").play(250);
         sym.$("block").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${q2}", "touchstart", function(sym, e) {
         sym.$("riAn").show();
         sym.getSymbol("riAn").play(250);
         sym.$("block").show();
         

      });
      //Edge binding end

   })("quesPop");
   //Edge symbol end:'quesPop'

   //=========================================================
   
   //Edge symbol: 'wrAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         // 回答错误
         sym.getComposition().getStage().getSymbol("quesPop").play("out");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 115, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("wrAn");
   //Edge symbol end:'wrAn'

   //=========================================================
   
   //Edge symbol: 'riAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 115, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         // 回答正确
         sym.getComposition().getStage().getSymbol("quesPop").play("out");
         // 播放获得拼图弹层：
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_3.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_3").css("background-image","url(images/ui/puzzles/puzzle_3.png)"); // 指定已获得拼图里显示拼图3
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         // 回答正确后隐藏对话框及按钮
         sym.getComposition().getStage().getSymbol("s1").$("di").hide();
         sym.getComposition().getStage().getSymbol("s1").$("diagBtn").hide();

      });
      //Edge binding end

   })("riAn");
   //Edge symbol end:'riAn'

   //=========================================================
   
   //Edge symbol: 'puzPop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("box").play("puzzle");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("puzPop").hide();
         var x = sym.getComposition().getStage().getVariable("pnum");
         x = x + 1;
         if ( x == 9 ){
         // 游戏胜利
         sym.getComposition().getStage().getSymbol("puz").$("Text").html(x+" / 9");
         sym.getComposition().getStage().setVariable("pnum",x);
         setTimeout(function(){sym.getComposition().getStage().play("win")},250);  
         } else {
         sym.getComposition().getStage().getSymbol("puz").$("Text").html(x+" / 9");
         sym.getComposition().getStage().setVariable("pnum",x);
         };

      });
      //Edge binding end

   })("puzPop");
   //Edge symbol end:'puzPop'

   //=========================================================
   
   //Edge symbol: 'splineAn'
   (function(symbolName) {   
   
   })("splineAn");
   //Edge symbol end:'splineAn'

   //=========================================================
   
   //Edge symbol: 'rulePop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("rulePop").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.play("out");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.getComposition().getStage().getSymbol("box").play("puzzle");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4667, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("rulePop").hide();
         sym.getComposition().getStage().getSymbol("timer").play();
         var x = sym.getComposition().getStage().getVariable("pnum");
         sym.getComposition().getStage().getSymbol("puz").$("Text").html(x+" / 9");

      });
      //Edge binding end

   })("rulePop");
   //Edge symbol end:'rulePop'

   //=========================================================
   
   //Edge symbol: 'startBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
       

         sym.stop();
         // 开始游戏
         sym.getComposition().getStage().getSymbol("rulePop").play("first_out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${start}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("startBtn");
   //Edge symbol end:'startBtn'

   //=========================================================
   
   //Edge symbol: 's1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${safeTouch}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("safePop").show();
         sym.getComposition().getStage().getSymbol("safePop").play("in");

      });
      //Edge binding end

      })("s2");
   //Edge symbol end:'s2'

   //=========================================================
   
   //Edge symbol: 'musicBtn'
   (function(symbolName) {   
   
   })("musicBtn");
   //Edge symbol end:'musicBtn'

   //=========================================================
   
   //Edge symbol: 'puzzlesPreload'
   (function(symbolName) {   
   
   })("puzzlesPreload");
   //Edge symbol end:'puzzlesPreload'

   //=========================================================
   
   //Edge symbol: 'safePop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("safePop").hide();
         // 检验保险箱密码是否正确：
         var a1 = sym.getVariable("num_1");
         var a2 = sym.getVariable("num_2");
         var a3 = sym.getVariable("num_3");
         var a4 = sym.getVariable("num_4");
         
         var myArr = new Array(a1,a2,a3,a4);
         myArr = myArr.toString();
         var str = "0,9,3,0";
         if ( myArr == str ){
         sym.getComposition().getStage().getSymbol("s2").getSymbol("valveAn").play("open");
         sym.getComposition().getStage().getSymbol("s2").$("safeTouch").hide();
         } else {
         sym.getComposition().getStage().getSymbol("s2").getSymbol("valveAn").play("fail");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num1}", "touchstart", function(sym, e) {
         var x = sym.getVariable("num_1");
         if ( x == 9 ){
            sym.setVariable("num_1",0);
            sym.$("num1").html(0); 
         } else {
           x = x+1;
           sym.setVariable("num_1",x);
           sym.$("num1").html(x);   
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.setVariable("num_1",0);
         sym.setVariable("num_2",0);
         sym.setVariable("num_3",0);
         sym.setVariable("num_4",0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num2}", "touchstart", function(sym, e) {
         var x = sym.getVariable("num_2");
         if ( x == 9 ){
            sym.setVariable("num_2",0);
            sym.$("num2").html(0);   
         } else {
           x = x+1;
           sym.setVariable("num_2",x);
           sym.$("num2").html(x);   
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num3}", "touchstart", function(sym, e) {
         var x = sym.getVariable("num_3");
         if ( x == 9 ){
            sym.setVariable("num_3",0);
            sym.$("num3").html(0);   
         } else {
           x = x+1;
           sym.setVariable("num_3",x);
           sym.$("num3").html(x);   
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${num4}", "touchstart", function(sym, e) {
         var x = sym.getVariable("num_4");
         if ( x == 9 ){
            sym.setVariable("num_4",0);
            sym.$("num4").html(0);    
         } else {
           x = x+1;
           sym.setVariable("num_4",x);
           sym.$("num4").html(x);   
         }

      });
      //Edge binding end

   })("safePop");
   //Edge symbol end:'safePop'

   //=========================================================
   
   //Edge symbol: 'yesBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("safePop").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${yes}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("yesBtn");
   //Edge symbol end:'yesBtn'

   //=========================================================
   
   //Edge symbol: 'shoeAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s1").$("wcanBtn").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shoe}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("shoeAn");
   //Edge symbol end:'shoeAn'

   //=========================================================
   
   //Edge symbol: 'clzAn1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("clzAn1").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cloz_1}", "touchstart", function(sym, e) {
         sym.play(250);
         

      });
      //Edge binding end

   })("clzAn1");
   //Edge symbol end:'clzAn1'

   //=========================================================
   
   //Edge symbol: 'clzAn2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("clzAn2").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cloz_2}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("clzAn2");
   //Edge symbol end:'clzAn2'

   //=========================================================
   
   //Edge symbol: 'clzAn3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("clzAn3").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cloz_3}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("clzAn3");
   //Edge symbol end:'clzAn3'

   //=========================================================
   
   //Edge symbol: 'clzAn4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("clzAn4").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cloz_4}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("clzAn4");
   //Edge symbol end:'clzAn4'

   //=========================================================
   
   //Edge symbol: 'clzAn5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("clzAn5").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cloz_5}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("clzAn5");
   //Edge symbol end:'clzAn5'

   //=========================================================
   
   //Edge symbol: 'clzAn6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("clzAn6").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cloz_6}", "touchstart", function(sym, e) {
         sym.play(250);
         sym.getComposition().getStage().getSymbol("s2").getSymbol("puzzle4").play(250);

      });
      //Edge binding end

   })("clzAn6");
   //Edge symbol end:'clzAn6'

   //=========================================================
   
   //Edge symbol: 'puzzle4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${puzzle_4}", "touchstart", function(sym, e) {
         // 播放获得拼图弹层：
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_4.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_4").css("background-image","url(images/ui/puzzles/puzzle_4.png)"); // 指定已获得拼图里显示拼图4
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         // 删除拼图：
         sym.getComposition().getStage().getSymbol("s2").getSymbol("puzzle4").deleteSymbol();

      });
      //Edge binding end

   })("puzzle4");
   //Edge symbol end:'puzzle4'

   //=========================================================
   
   //Edge symbol: 'bWiper'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2246, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 74, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${butter}", "touchend", function(sym, e) {
         var x = sym.getPosition();
         if (x >= 1313) {
         sym.play();
         } else { 
         sym.stop();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${butter}", "touchstart", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("bWiper");
   //Edge symbol end:'bWiper'

   //=========================================================
   
   //Edge symbol: 'valveAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         setTimeout(function(){sym.getComposition().getStage().getSymbol("s2").getSymbol("safeopen").play("open")},250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("valveAn");
   //Edge symbol end:'valveAn'

   //=========================================================
   
   //Edge symbol: 'safeopen'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 882, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("valveAn").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${puzzle5An}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_5.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_5").css("background-image","url(images/ui/puzzles/puzzle_5.png)"); // 指定已获得拼图里显示拼图5
         sym.getSymbol("puzzle5An").deleteSymbol();

      });
      //Edge binding end

   })("safeopen");
   //Edge symbol end:'safeopen'

   //=========================================================
   
   //Edge symbol: 'puzzle5An'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("puzzle5An");
   //Edge symbol end:'puzzle5An'

   //=========================================================
   
   //Edge symbol: 'zombie_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4958, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s2").getSymbol("zombie").deleteSymbol();

      });
      //Edge binding end

   })("zombie");
   //Edge symbol end:'zombie'

   //=========================================================
   
   //Edge symbol: 'peashooter_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1416, function(sym, e) {
         sym.getComposition().getStage().getSymbol("s2").getSymbol("zombie").play("die");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${peashooter}", "touchstart", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 180, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("peashooter");
   //Edge symbol end:'peashooter'

   //=========================================================
   
   //Edge symbol: 's2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("s3");
   //Edge symbol end:'s3'

   //=========================================================
   
   //Edge symbol: 'lamp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("lamp");
   //Edge symbol end:'lamp'

   //=========================================================
   
   //Edge symbol: 'p8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${photo8}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("p8");
   //Edge symbol end:'p8'

   //=========================================================
   
   //Edge symbol: 'p7'
   (function(symbolName) {   
   
   })("p7");
   //Edge symbol end:'p7'

   //=========================================================
   
   //Edge symbol: 'p6'
   (function(symbolName) {   
   
   })("p6");
   //Edge symbol end:'p6'

   //=========================================================
   
   //Edge symbol: 'p5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s3").getSymbol("p5").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${photo5}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("p5");
   //Edge symbol end:'p5'

   //=========================================================
   
   //Edge symbol: 'p4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${keyAn}", "touchstart", function(sym, e) {
         sym.getSymbol("keyAn").play();
         setTimeout(function(){sym.play(1250)},2000);  

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${photo4}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s3").getSymbol("p4").deleteSymbol();

      });
      //Edge binding end

   })("p4");
   //Edge symbol end:'p4'

   //=========================================================
   
   //Edge symbol: 'p3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${photo3}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1553, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 137, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

   })("p3");
   //Edge symbol end:'p3'

   //=========================================================
   
   //Edge symbol: 'p2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s3").getSymbol("p2").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${photo2}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("p2");
   //Edge symbol end:'p2'

   //=========================================================
   
   //Edge symbol: 'p1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${photo1}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("p1");
   //Edge symbol end:'p1'

   //=========================================================
   
   //Edge symbol: 'keyAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s3").getSymbol("p4").getSymbol("keyAn").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2067, function(sym, e) {
         sym.getComposition().getStage().getSymbol("s3").getSymbol("deskAn").stop(500);

      });
      //Edge binding end

   })("keyAn");
   //Edge symbol end:'keyAn'

   //=========================================================
   
   //Edge symbol: 'deskAn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_6.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_6").css("background-image","url(images/ui/puzzles/puzzle_6.png)"); // 指定已获得拼图里显示拼图6
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         sym.getComposition().getStage().getSymbol("s3").getSymbol("deskAn").deleteSymbol();

      });
      //Edge binding end

   })("deskAn");
   //Edge symbol end:'deskAn'

   //=========================================================
   
   //Edge symbol: 's3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("s4");
   //Edge symbol end:'s4'

   //=========================================================
   
   //Edge symbol: 'peashooter_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 180, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1375, function(sym, e) {
         sym.getComposition().getStage().getSymbol("s4").getSymbol("zombieAn").play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      })("peashooter_s4");
   //Edge symbol end:'peashooter_s4'

   //=========================================================
   
   //Edge symbol: 'touchPea'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("s4").getSymbol("peashooter_s4").play(250);
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("touchPea");
   //Edge symbol end:'touchPea'

   //=========================================================
   
   //Edge symbol: 'zombieAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1307, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2614, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s4").getSymbol("touchPea").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // 掉出拼图
         sym.getComposition().getStage().getSymbol("s4").getSymbol("mugAn").play("puzzle_in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("zombieAn");
   //Edge symbol end:'zombieAn'

   //=========================================================
   
   //Edge symbol: 'puzzle7'
   (function(symbolName) {   
   
   })("puzzle7");
   //Edge symbol end:'puzzle7'

   //=========================================================
   
   //Edge symbol: 'mugAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch1}", "touchstart", function(sym, e) {
         sym.play("swing_mug");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch2}", "touchstart", function(sym, e) {
         sym.play("puzzle_out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch3}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_7.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_7").css("background-image","url(images/ui/puzzles/puzzle_7.png)"); // 指定已获得拼图里显示拼图7
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         
         sym.stop("end");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 126, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("mugAn");
   //Edge symbol end:'mugAn'

   //=========================================================
   
   //Edge symbol: 'photoS4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("photoS4");
   //Edge symbol end:'photoS4'

   //=========================================================
   
   //Edge symbol: 'friOpen'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${puzzle_8}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_8.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_8").css("background-image","url(images/ui/puzzles/puzzle_8.png)"); // 指定已获得拼图里显示拼图8
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         
         sym.stop("end");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.stop(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("friOpen");
   //Edge symbol end:'friOpen'

   //=========================================================
   
   //Edge symbol: 'caAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("caAn");
   //Edge symbol end:'caAn'

   //=========================================================
   
   //Edge symbol: 's4_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch}", "touchstart", function(sym, e) {
         sym.getSymbol("bigBox").play();
         sym.$("touch").hide();

      });
      //Edge binding end

               })("s5");
   //Edge symbol end:'s5'

   //=========================================================
   
   //Edge symbol: 'bigBox'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);
         sym.getComposition().getStage().getSymbol("s5").$("touch").show();

      });
      //Edge binding end

   })("bigBox");
   //Edge symbol end:'bigBox'

   //=========================================================
   
   //Edge symbol: 'capAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("s5").getSymbol("capAn").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${touch1}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("capAn");
   //Edge symbol end:'capAn'

   //=========================================================
   
   //Edge symbol: 'doorAn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${block}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 73, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("doorAn");
   //Edge symbol end:'doorAn'

   //=========================================================
   
   //Edge symbol: 'pizzaBox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Touch}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 81, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("pizzaBox");
   //Edge symbol end:'pizzaBox'

   //=========================================================
   
   //Edge symbol: 'paperAn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Touch}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Touch2}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().$("puzPop").show();
         sym.getComposition().getStage().getSymbol("puzPop").$("puzzle").css("background-image","url(images/ui/puzzles/puzzle_9.png)"); // 选定一个拼图
         sym.getComposition().getStage().getSymbol("boxPop").$("puzzle_9").css("background-image","url(images/ui/puzzles/puzzle_9.png)"); // 指定已获得拼图里显示拼图6
         sym.getComposition().getStage().getSymbol("puzPop").play("in");
         
         sym.getComposition().getStage().getSymbol("s5").getSymbol("paperAn").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 325, function(sym, e) {
         sym.getComposition().getStage().getSymbol("s5").getSymbol("roadBlock").play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperAn");
   //Edge symbol end:'paperAn'

   //=========================================================
   
   //Edge symbol: 'roadBlock'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${roadblock}", "touchstart", function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

   })("roadBlock");
   //Edge symbol end:'roadBlock'

   //=========================================================
   
   //Edge symbol: 'winPop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {       
         aym.stop();
         // 跳转至游戏胜利画面：
         sym.getComposition().getStage().getSymbol("winPop").deleteSymbol();
		

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         game_state = true;

         var x = sym.getComposition().getStage().getSymbol("timer").getVariable("resultSec");// 获取通关用时秒数，分享可读取这个值
         var y = sym.getComposition().getStage().getSymbol("timer").getVariable("resultMin");// 获取通关用时分钟数，分享可读取这个值
         sym.getComposition().getStage().getSymbol("timer").setVariable("min",999999);// 使计时器显示时间分钟数溢出，防止用户迟迟不操作后触发失败结局
         // 当为个位数的数字
         if ( x < 10 ) {
         sym.getComposition().getStage().getSymbol("End").$("timeText").html("0"+y+":0"+x);
         } else {
         sym.getComposition().getStage().getSymbol("End").$("timeText").html("0"+y+":"+x);
         }

        console.dir({"time":"0"+y+":0"+x});
		dp_submitScore(y*60+x)
	
		 
      });
      //Edge binding end

   })("winPop");
   //Edge symbol end:'winPop'

   //=========================================================
   
   //Edge symbol: 'lockBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         // 跳转至游戏结束画面
         sym.getComposition().getStage().getSymbol("winPop").play(750);
         setTimeout(function(){sym.getComposition().getStage().play("end");document.getElementById("toolbar").style.display="block";},250);  
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lock}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("lockBtn");
   //Edge symbol end:'lockBtn'

   //=========================================================
   
   //Edge symbol: 'rulePop_1'
   (function(symbolName) {     

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         window.location.reload();//重启游戏

      });
         //Edge binding end

      })("losePop");
   //Edge symbol end:'losePop'

   //=========================================================
   
   //Edge symbol: 'startBtn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {

         sym.stop();
         // 重新开始游戏
         sym.getComposition().getStage().getSymbol("losePop").play("out");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${start}", "touchstart", function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      })("loseBtn");
   //Edge symbol end:'loseBtn'

   //=========================================================
   
   //Edge symbol: 'End'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shPop}", "touchstart", function(sym, e) {
         sym.getSymbol("shPop").play("out");

      });
      //Edge binding end
	
   })("End");
   //Edge symbol end:'End'

   //=========================================================
   
   

   //=========================================================
   
   //Edge symbol: 'giBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
        
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gift}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("giBtn");
   //Edge symbol end:'giBtn'

   //=========================================================

   //=========================================================
  
   //Edge symbol end:'shareall'

   //=========================================================

   //=========================================================
  
   //Edge symbol end:'shPop'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

      //=========================================================
   
   //Edge symbol: 'loseBtn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         // 去抽奖页面：
         //window.open("index2.php?channel="+channel, "_self");
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${start}", "touchstart", function(sym, e) {
         sym.play(0);

      });
            //Edge binding end

         })("chouBtn");
   //Edge symbol end:'chouBtn'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-809030275");