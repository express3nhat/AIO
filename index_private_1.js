var _0x7536=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x78\x51\x4D\x75\x5F\x46\x4A\x43\x47\x6D\x4A\x47\x63\x4B\x49\x6A\x79\x42\x4F\x73\x2D\x55\x6C\x38\x66\x33\x74\x78\x76\x39\x4C\x5F\x53\x62\x52\x71\x72\x55\x6D\x54\x66\x61\x45\x67\x79\x53\x71\x6B\x77\x2F\x65\x78\x65\x63","\x6C\x6F\x61\x64","\x2E\x6E\x61\x76\x62\x61\x72\x20\x61\x3A\x68\x6F\x76\x65\x72","\x7B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x64\x64\x64\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x62\x6C\x61\x63\x6B\x3B\x7D","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x69\x6E\x64\x65\x78\x5F\x67\x65\x6E\x65\x72\x61\x6C\x2E\x6A\x73","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x3F","\x73\x70\x6C\x69\x74","\x3F\x61\x63\x74\x69\x6F\x6E\x3D","","\x3F\x68\x6F\x73\x74\x3D","\x76\x61\x6C\x75\x65\x73","\x6D\x61\x70","\x72\x65\x63\x6F\x72\x64\x73","\x6D\x79\x46\x72\x61\x6D\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x72\x65\x70\x6C\x61\x63\x65","\x63\x6F\x6E\x74\x65\x6E\x74\x57\x69\x6E\x64\x6F\x77","\x67\x65\x74\x4A\x53\x4F\x4E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];var script_url=_0x7536[0];window[_0x7536[26]](_0x7536[1],function(){AddNewStyleRule(_0x7536[2],_0x7536[3]);var _0xbf22x2=document[_0x7536[5]](_0x7536[4]);_0xbf22x2[_0x7536[8]](_0x7536[6],_0x7536[7]);document[_0x7536[10]][_0x7536[9]](_0xbf22x2);var _0xbf22x3=window[_0x7536[12]][_0x7536[11]];var _0xbf22x4=_0xbf22x3[_0x7536[14]](_0x7536[13])[1];if(_0xbf22x4){_0xbf22x3= _0x7536[15]+ _0xbf22x4}else {_0xbf22x3= _0x7536[16]};var _0xbf22x5=script_url+ _0x7536[17]+ window[_0x7536[12]][_0x7536[11]];var _0xbf22x6;$[_0x7536[25]](_0xbf22x5,function(_0xbf22x7){_0xbf22x6= _0xbf22x7[_0x7536[20]][_0x7536[19]]((_0xbf22x8)=>{return Object[_0x7536[18]](_0xbf22x8)});var _0xbf22x9=document[_0x7536[22]](_0x7536[21]);_0xbf22x9[_0x7536[24]][_0x7536[12]][_0x7536[23]](_0xbf22x6[0][0]+ _0xbf22x3)})})


/*
var script_url = "https://script.google.com/macros/s/AKfycbxQMu_FJCGmJGcKIjyBOs-Ul8f3txv9L_SbRqrUmTfaEgySqkw/exec"; //EXPRESS3NHAT_AUTH

window.addEventListener("load",function() {
	//document.getElementById("container_loader").style.visibility = "visible"; 
	    
	AddNewStyleRule (".navbar a:hover", "{background: #ddd; color: black;}");
	var script_tag = document.createElement('script');
	script_tag.setAttribute('src','index_general.js');
	document.head.appendChild(script_tag);
	    
	var str = window.location.href;
	var action = str.split("?")[1];
	if (action) {
	   str = "?action=" + action;
	} else {
	   //str = "?embedIframe";
	   str = "";	
	}	

	var url = script_url+"?host=" + window.location.href;
	var slag;
	$.getJSON(url, function (json) {
		slag = json.records.map(doc => Object.values(doc));
		var ifr = document.getElementById("myFrame");
		ifr.contentWindow.location.replace(slag[0][0] + str);
    	});

});
*/

//setTimeout(function(){ if (document.getElementById("container_loader").style.visibility == "visible") { location.reload(); } }, 3000);
        

//lắng nghe thông tin màn hình xoay
window.addEventListener("orientationchange", function(event) {
  	//alert("the orientation of the device is now " + event.target.screen.orientation.angle);
	var QC = document.getElementById("QuangCao");
	var HD = document.getElementById("HuongDan");
	if (event.target.screen.orientation.angle==90) {
		//alert("the orientation of the device is now " + event.target.screen.orientation.angle);
		QC.style.visibility = "visible";
		HD.style.visibility = "hidden";
		document.getElementById("myFrame").style.display = "none";
		//document.getElementById("myFrame").style.transform = "rotate(90deg)";
	} 
	
	if (event.target.screen.orientation.angle==270) {
		//alert("the orientation of the device is now " + event.target.screen.orientation.angle);
		HD.style.visibility = "visible";
		QC.style.visibility = "hidden";
		document.getElementById("myFrame").style.display = "none";
		//document.getElementById("myFrame").style.transform = "rotate(270deg)";
	}
	if (event.target.screen.orientation.angle==0) {
		QC.style.visibility = "hidden";
		HD.style.visibility = "hidden";
		
		//setTimeout(function(){ document.getElementById("myFrame").style.display = "block"; }, 500);
		
		//document.getElementById("myFrame").style.transform = "rotate(0deg)";
	}
});

//lắng nghe thông tin từ nội dung trong iframe để xử lý url của iframe hay thao tác khác
window.addEventListener("storage", myFunction);

function myFunction(event) {
	var str = localStorage.getItem("mytime");
  	localStorage.removeItem("mytime");
  
	//alert("3-1: " + str);

  	if (str!=null) {	
  		var arr = str.split("|");
		//alert(window.location.href + "    ---   " + arr[5]);
		if (arr[2] == "2") {
    			//document.getElementById("myFrame").src = arr[2];
    			if (arr[5] != window.location.href) {
    				document.getElementById("myFrame").contentWindow.location.replace("https://24h.com.vn");
    			} else {
    				//set thông báo thành công về lại cho google page biết
				//if (arr[3] == "1") {
				document.getElementById("container_loader").style.visibility = "hidden";
	    			localStorage.setItem('mytime', '1' + '|' + '2' + '|' + '2' + '|' + '2' + '|' + Date.now() + '|' + 'Check OK');
	    			//alert("1 đã gửi 3");
				//} else {
				//	localStorage.removeItem("mytime");
				//}
    			}
  		}
	  
		if (arr[2] == "1") { document.getElementById("myFrame").contentWindow.location.replace(arr[5]);	}  
  	}
}

function changeValue() { localStorage.setItem("mytime", Date.now() + "|" + "p" + "|" + "giatri truyen tai day"); }

function PlayVideo() {
  	var video = document.getElementById("myVideo");
  	var btn = document.getElementById("myBtn");
  	if (video.paused) {
    		video.play();
    		btn.innerHTML = "Pause";
  	} else {
    		video.pause();
    		btn.innerHTML = "Play";
  	}
}


function AddNewStyleRule (rule,content) {
     	var styleTag = document.getElementById ("myStyle");
	// the empty style sheet
        var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
            
       	if (sheet.insertRule) {   // all browsers, except IE before version 9
             	sheet.insertRule (rule + " " + content, 0);
        }
        else {  // Internet Explorer before version 9
            	if (sheet.addRule) { sheet.addRule (rule, content, 0); }
        }
}
