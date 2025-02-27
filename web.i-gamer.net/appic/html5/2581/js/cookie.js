var _hmt = _hmt || [];
(function() {
  
})();

//取得cookie  
function getCookie(name) {  
    var nameEQ = name + "=";  
    var ca = document.cookie.split(';');    //把cookie分割成组 
    for(var i=0;i < ca.length;i++) {  
        var c = ca[i];                      //取得字符串  
        while (c.charAt(0)==' ') {          //判断一下字符串有没有前导空格  
            c = c.substring(1,c.length);      //有的话，从第二位开始取  
        }  
        if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name  
            return unescape(c.substring(nameEQ.length,c.length));    //解码并截取我们要值  
        }  
    }  
    return false;  
}  
  
//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
}  
  
//设置cookie  
function setCookie(name, value, seconds){
    seconds = seconds || 0;   //conds有值就直接赋值，没有为0，这个根php不一样。  
    var expires = "";  
    if (seconds != 0 ) {      //设置cookie生存时间  
        var date = new Date();  
        date.setTime(date.getTime()+(seconds*1000));  
        expires = "; expires="+date.toGMTString();  
    }  
    document.cookie = name+"="+escape(value)+expires+"; path=/";   //转码并赋值
}

//uuid
var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

var uuid = getCookie("uuid");
if(!uuid){
    uuid = guid();
    setCookie("uuid", uuid);
}

//随机数
function GetRandomNum(Min,Max)
{   
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));   
}


function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function isiPhone(){
    var ua=navigator.userAgent;
    if(ua.indexOf('iPhone')>0||ua.indexOf('iPad')>0){
        return true;
    }else{
        return false;
    }
}

function isWX(){
    var ua=navigator.userAgent;
    if(ua.indexOf('MicroMessenger')>0){
        return true;
    }else{
        return false;
    }
}

function checkMobile(tel) {
    var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    return telReg;
}

function checkEmail(email) {
    var re = /\w@\w*\.\w/;
    return re.test(email);
}
var channelURL = new Array(6);
channelURL[0]   = "https://itunes.apple.com/cn/app/zhi-wu-da-zhan-jiang-shi2/id639516529?mt=8";
