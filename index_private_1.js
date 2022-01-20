function _0x4782b9(_0x1ef4ac,_0x334bba){return _0x569f(_0x334bba-0x327,_0x1ef4ac);}function _0x569f(_0xcfd111,_0x454798){var _0x54f389=_0x54f3();return _0x569f=function(_0x569f96,_0x3eb02b){_0x569f96=_0x569f96-0x17b;var _0x58f298=_0x54f389[_0x569f96];return _0x58f298;},_0x569f(_0xcfd111,_0x454798);}(function(_0x41c010,_0xe9d8be){var _0x37bb4f=_0x41c010();function _0x3e12cc(_0x3bc690,_0x5039b8){return _0x569f(_0x5039b8- -0x1bc,_0x3bc690);}while(!![]){try{var _0x38f8c7=-parseInt(_0x3e12cc(-0x4e,-0x41))/0x1+parseInt(_0x3e12cc(-0x3a,-0x40))/0x2+parseInt(_0x3e12cc(-0x2b,-0x36))/0x3*(-parseInt(_0x3e12cc(-0x26,-0x2b))/0x4)+parseInt(_0x3e12cc(-0x31,-0x26))/0x5+-parseInt(_0x3e12cc(-0x22,-0x31))/0x6*(parseInt(_0x3e12cc(-0x44,-0x3d))/0x7)+-parseInt(_0x3e12cc(-0x32,-0x24))/0x8+-parseInt(_0x3e12cc(-0x44,-0x39))/0x9*(-parseInt(_0x3e12cc(-0x27,-0x33))/0xa);if(_0x38f8c7===_0xe9d8be)break;else _0x37bb4f['push'](_0x37bb4f['shift']());}catch(_0x59bed9){_0x37bb4f['push'](_0x37bb4f['shift']());}}}(_0x54f3,0x58463));var script_url=_0x4782b9(0x49a,0x4a7);window['addEventListener'](_0x4782b9(0x4c7,0x4be),function(){function _0x4e89a9(_0x659a9c,_0x5673ae){return _0x4782b9(_0x659a9c,_0x5673ae- -0x104);}AddNewStyleRule(_0x4e89a9(0x3b5,0x3a8),_0x4e89a9(0x3b6,0x3b8));var _0x535ff2=document['createElement'](_0x4e89a9(0x3a4,0x3a1));_0x535ff2['setAttribute']('src',_0x4e89a9(0x3b0,0x3ad)),document[_0x4e89a9(0x3bd,0x3b1)][_0x4e89a9(0x3a0,0x3a5)](_0x535ff2);var _0x5b880a=window[_0x4e89a9(0x3b5,0x3aa)]['href'],_0x304f51=_0x5b880a[_0x4e89a9(0x3aa,0x3ab)]('?')[0x1];_0x304f51?_0x5b880a=_0x4e89a9(0x3aa,0x3b5)+_0x304f51:_0x5b880a='';var _0x2e3e56=script_url+_0x4e89a9(0x3b1,0x3b6)+window[_0x4e89a9(0x3b2,0x3aa)][_0x4e89a9(0x3a6,0x3af)],_0x492bd3;$[_0x4e89a9(0x3bf,0x3b2)](_0x2e3e56,function(_0x53441b){function _0x39eefd(_0x58af5b,_0x13609e){return _0x4e89a9(_0x13609e,_0x58af5b- -0x426);}_0x492bd3=_0x53441b[_0x39eefd(-0x76,-0x68)][_0x39eefd(-0x7f,-0x7d)](_0x25f8bd=>Object[_0x39eefd(-0x86,-0x87)](_0x25f8bd));var _0x34efc7=document['getElementById'](_0x39eefd(-0x82,-0x91));_0x34efc7[_0x39eefd(-0x6f,-0x6a)]['location'][_0x39eefd(-0x73,-0x75)](_0x492bd3[0x0][0x0]+_0x5b880a);});});function _0x54f3(){var _0x1f63ea=['records','head','getJSON','replace','4vVlECs','?action=','?host=','contentWindow','{background:\x20#ddd;\x20color:\x20black;}','1454125TFidQq','load','4858632xRUOHF','203396oOMScc','59950KoKJDo','values','script','160727AQTBZG','https://script.google.com/macros/s/AKfycbxQMu_FJCGmJGcKIjyBOs-Ul8f3txv9L_SbRqrUmTfaEgySqkw/exec','myFrame','appendChild','1494tjOBeC','map','.navbar\x20a:hover','1413777clvExE','location','split','86600IZZaIS','index_general.js','30zAdiyV','href'];_0x54f3=function(){return _0x1f63ea;};return _0x54f3();}

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
