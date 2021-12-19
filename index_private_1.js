var exec = "https://script.google.com/macros/s/AKfycbwzww1tzfUSoP2YSz26SCRa2malnbQQrFx_ckUq/exec"; //EXPRESS3NHAT_v1

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
		alert(slag[0][0]);
		//alert(str);
		//var ifr = document.getElementById("myFrame");
		//ifr.contentWindow.location.replace(slag[0][0] + str);
    	});
	
	
	//var ifr = document.getElementById("myFrame");

	//ifr.contentWindow.location.replace("https://script.google.com/macros/s/AKfycbwzww1tzfUSoP2YSz26SCRa2malnbQQrFx_ckUq/exec" + str); //EXPRESS3NHAT_v1
	//ifr.contentWindow.location.replace("https://script.google.com/macros/s/AKfycbwzww1tzfUSoP2YSz26SCRa2malnbQQrFx_ckUq/exec" + "?token=qwndjkgvbkdfvb");
});


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
