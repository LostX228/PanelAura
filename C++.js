


 function aim180() {
        h5gg.clearResults();
        h5gg.searchNumber('1057048494','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1054951342','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1053273620','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
				
				vant.showNotify({
        type: 'success',
        message: 'Aim 180 | On'
			});
    }
h5gg.clearResults();
h5gg.searchNumber('-20000','I32','0x100000000', '0x160000000');
h5gg.editAll('1053273620', 'I32');
h5gg.clearResults();
h5gg.searchNumber('-20000','I32','0x100000000', '0x160000000');
h5gg.editAll('1054951342', 'I32');
h5gg.clearResults();
h5gg.searchNumber('-20000','I32','0x100000000', '0x160000000');
h5gg.editAll('1053273620', 'I32');
h5gg.clearResults();
		vant.showNotify({
        type: 'success',
        message: 'Aim 180 | Off'
			});
 }




function aimscope() {
        h5gg.clearResults();
        h5gg.searchNumber('0.09','F32','0x0', '0x20000000000');
        h5gg.editAll('180', 'F32'); 
        h5gg.clearResults();
				vant.showNotify({
        type: 'success',
        message: 'Aim Scope | On'
			});
    }

h5gg.searchNumber('180', 'F32', '0x100000000', '0x160000000');
h5gg.editAll('0.09', "F32");
h5gg.clearResults();
h5gg.searchNumber('-5', 'F32', '0x100000000', '0x160000000');
h5gg.editAll('1075000115', "F32");
			vant.showNotify({
        type: 'success',
        message: 'Aim Scope | Off'
			});
    }


function lockscope() {
        h5gg.clearResults();
        h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
		h5gg.searchNearby('3', 'I32', '0x100');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
    	h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
  
				vant.showNotify({
        type: 'success',
        message: 'Lock Scope | On'
          codeStatus = true;
			});
		
	}
			vant.showNotify({
        type: 'success',
        message: 'Lock Scope | Off'
          codeStatus = false;
			});
		
	}
	


	
	
function buffdame() {
        h5gg.clearResults();
        h5gg.searchNumber('5.5','F32','0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'I64'); 
        h5gg.clearResults();
        h5gg.searchNumber('0.75','F32','0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'I64'); 
        h5gg.clearResults();
				
				vant.showNotify({
        type: 'success',
        message: 'Buff Dame | On'
			});
			
    }
h5gg.clearResults();
h5gg.searchNumber('10000000','I64','0x100000000', '0x160000000');
h5gg.editAll('5.5', 'F32');
h5gg.clearResults();
h5gg.searchNumber('10000000','I64','0x100000000', '0x160000000');
h5gg.editAll('0.75', 'F32');
h5gg.clearResults();

			vant.showNotify({
        type: 'success',
        message: 'Buff Dame | Off'
			});

        
    }
}

	function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
        }}); if (modifiedCount > 0) {
        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}
var Nhayman = 15;
var nhayngam = 10;

function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
              if (searchValue === Nhayman) Nhayman = replaceValue;
            if (searchValue === nhayngam) nhayngam = replaceValue;
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}


		

function cao() {
    modifyValue1(-0.05, Number(prompt("𝐂𝐚𝐦 𝐂𝐚𝐨 - 𝟎.𝟎𝟓 -> ...  :", "")), 'F00', null,);
		
		vant.showNotify({
        type: 'success',
        message: 'Cam Cao | On'
      codeStatus = true;
			});		
}
		vant.showNotify({
        type: 'success',
        message: 'Cam Cao | Off'
      codeStatus = false;
			});		
}
function xa() {
    modifyValue1(2.5, Number(prompt(" 𝐂𝐚𝐦 𝐗𝐚 - 𝟐.𝟓 -> ... :", "")), 'F04', null,);
		
		vant.showNotify({
        type: 'success',
        message: 'Cam Xa | On '
      codeStatus = true;
			});		
	}
		vant.showNotify({
        type: 'success',
        message: 'Cam Xa | Off '
      codeStatus = false;
			});		
	}
	
function Norecoil() {
     h5gg.clearResults();
h5gg.searchNumber('1016018816','I32','0x100000000', '0x160000000');
h5gg.editAll('0016018816', 'I32');
  
		vant.showNotify({
        type: 'success',
        message: 'No Recoli | On'
			});		
			
			}
h5gg.clearResults();
h5gg.searchNumber('0016018816','I32','0x100000000', '0x160000000');
h5gg.editAll('1016018816', 'I32');

		vant.showNotify({
        type: 'success',
        message: 'No Recoli | Off'
			});		
			
			}


function so88() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    vant.showNotify({
        type: 'success',
        message: 'Magec Bullet V1 | On '
           type: 'success',
        message: 'Click Agean Active Magec Bullet V10 '
    });
}

    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('10.875', "F32");

    vant.showNotify({
        type: 'success',
        message: 'Magec Bullet V10| On '
    });
}


function AimFor() {
    modifyValue(1077936128, -20000, 'A04'); 
    modifyValue(1069547520, 1148829696, 'A10')
		vant.showNotify({
        type: 'success',
        message: 'Aim Fov | On'
			});
	
	}

h5gg.clearResults();
modifyValue(-20001, 1077936128, 'A04');
modifyValue(1148829696, 1069547520, 'A10');
		vant.showNotify({
        type: 'success',
        message: 'Aim Fov | Off'
			});

function Aimlock() {
    modifyValue(1077936128, -20000, 'A04'); 
    modifyValue(1069547520, 1148829696, 'A10')
		vant.showNotify({
        type: 'success',
        message: 'Aim Lock | On'
			});
	
	}

h5gg.clearResults();
modifyValue(-20001, 1077936128, 'A04');
modifyValue(1148829696, 1069547520, 'A10');
		vant.showNotify({
        type: 'success',
        message: 'Aim Lock | Off'
			});

function s100s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        var dizhi2 = (Number(addr1) + -308);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");
            h5gg.setValue(dizhi2, 0, "I32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'Awm Aim | On'
       codeStatus = true;
    });


	}

    vant.showNotify({
        type: 'success',
        message: 'Awm Aim | Off'
       codeStatus = false;
    });


	}
	

function s105s() {
h5gg.clearResults();
h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for(var i=0; i<count; i++) {
    var addr1 = r[i].address;

var dizhi0 = (Number(addr1) + 8);

   


{
h5gg.setValue(dizhi0, 2139095040, "I32");

   }
}
    vant.showNotify({
        type: 'success',
        message: 'Awm Scop | On'
       codeStatus = true;
    });


	}

    vant.showNotify({
        type: 'success',
        message: 'Awm Scop | Off'
       codeStatus = false;
    });


	}





function s101s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
  vant.showNotify({
        type: 'success',
        message: 'Awm Switch | On'
       codeStatus = true;
    });


	}

    vant.showNotify({
        type: 'success',
        message: 'Awm Switch | Off'
       codeStatus = false;
    });


	}
	
function so89() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Arm Switch | On'
    });


	}

    h5gg.clearResults();
    h5gg.searchNumber('72340172821233664', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340173878198272', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Arm Switch | Off'
    });


	}


function sk() {
    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);
        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);




        {
            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");

        }
    }
  vant.showNotify({
        type: 'success',
        message: 'Buff Sensi | On'
       codeStatus = true;
    });


	}

    vant.showNotify({
        type: 'success',
        message: 'Buff Sensi | Off'
       codeStatus = false;
    });


	}





function so90() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Antenna X1 | On'
    });


}

    h5gg.clearResults();
    h5gg.searchNumber('4848124999925814228', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4575657222469899220', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4848124999925251973', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4575657222469336965', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Antenna X1 | Off'
    });


}




function so91() {
    h5gg.clearResults();
    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 20);




        {
            h5gg.setValue(dizhi0, 200, "F32");
        }
    }
    h5gg.clearResults();
    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848125002066881600', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Antenna X2 | On'
    });


}

    h5gg.clearResults();
    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 20);




        {
            h5gg.setValue(dizhi0, 200, "F32");
        }
    }
    h5gg.clearResults();
    h5gg.searchNumber('4848125002066881600', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4575657224610966592', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Antenna X2 | Off'
    });


}

function so92() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848124999899886606', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848125002034454477', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Antenna X3 | On'
    });


		}

 h5gg.clearResults();
    h5gg.searchNumber('4848124999899886606', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4575657222443971598', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4848125002034454477', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4575657224578539469', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Antenna X3 | Off'
    });


		}

		function s08() {
    h5gg.clearResults();
    h5gg.searchNumber('4728779608739021057', 'I64', '0x100000000', '0x150000000');

    alert('Active(' + h5gg.getResultsCount() + ')');

    var count = h5gg.getResultsCount(); //获取总共搜索结果个数

    var r = h5gg.getResults(count); //获取总共搜索结果个数的数组

    //开始循环遍历

    for (var i = 0; i < count; i++) {

        var addr1 = r[i].address; //获取每个搜索结果的地址 address弟子 value值 type类型

        var weishu = /18$/; //设置置顶结尾

        var pd = weishu.test(addr1); //判断地址是否包含指定结尾



        var dizhi1 = (Number(addr1) + 4);




        if (pd) {
            h5gg.setValue(dizhi1, 100, "F32");


        }
    }
    vant.showNotify({
        type: 'success',
        message: 'Buff Jump'
    });


	}
	
			
			
			function ZomCamxa() {
    modifyValue7(
        60, // Giá trị tìm kiếm ban đầu là 60
        Number(prompt("𝐂𝐚𝐦 𝐏𝐜 -> ... :", "")), // Giá trị thay thế do người dùng nhập vào
        '68', // Phần cuối của địa chỉ bộ nhớ cần khớp
        null, // Không cần địa chỉ kết thúc thứ hai
        "Giá trị đã được thay đổi và khóa." // Thông báo khi thay đổi thành công và khóa giá trị
    );
}

function modifyValue7(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    // Tạo một danh sách để lưu trữ các địa chỉ cần khóa
    const lockAddresses = [];

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
            lockAddresses.push(result.address); // Lưu địa chỉ cần khóa
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);

        // Khóa giá trị sau khi thay đổi
        const locker = setInterval(function() {
            console.log("Kiểm tra và khóa giá trị...");
            lockAddresses.forEach(address => {
                const currentValue = h5gg.getValue(address, 'F32');
                if (currentValue !== replaceValue) { // Chỉ cập nhật nếu giá trị đã thay đổi
                    h5gg.setValue(address, replaceValue.toString(), 'F32');
                }
            });
        }, 2000); // Kiểm tra và cập nhật mỗi 2 giây (giảm tần suất lặp)

        // Hủy bỏ khóa: clearInterval(locker); có thể gọi khi cần thiết
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
				
				vant.showNotify({
        type: 'success',
        message: 'Cam Pc | On'
          codeStatus = true;
			});		
    }
	}
			vant.showNotify({
        type: 'success',
        message: 'Cam Pc | On'
          codeStatus = false;
			});		
    }
	}


function fs0{//anti
                  vant.showNotify({
        type: 'success',
        message: 'Anti Cheat'
    });
}

function fs1{//anti
                  vant.showNotify({
        type: 'success',
        message: 'Bypass Cheat'
    });
}


      



      function Search() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('Acitve(' + h5gg.getResultsCount() + '/1)');
              vant.showNotify({
        type: 'success',
        message: 'Search'
    });
}

      function V2() {
    h5gg.editAll('4397530849758414897', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'X2'
    });

}
            function V5() {
    h5gg.editAll('4397530849758414896', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'X5'
    })

}

              function V7() {
    h5gg.editAll('4397530849758414895', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'X7'
    });

}

        function Restore() {
    h5gg.editAll('4397530849764387586', 'I64');
    vant.showNotify({
        type: 'success',
        message: 'Restore'
    });

}

        function D1() {
    location.href = "https://dns.nextdns.io/316c26";
    vant.showNotify({
        type: 'success',
        message: 'DNS Done(6ebec7)'
    });
}


var codeStatus = false;
function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x10000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;
    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32');
            modifiedCount++;
            
           

        }
    });
    if (modifiedCount > 0) {
        if (alertMessage) alert(alertMessage);
    } else if (alertMessage) {
        alert("Lỗi");
    }
}
