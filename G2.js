function loopy() { 
    var sWord = "LostX1"; 
    var credentials = prompt(" ≫  𝐄𝐧𝐭𝐞𝐫 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 و 𝐂𝐨𝐝𝐞 𝐒𝐞𝐜𝐫𝐞𝐭 "); // طلب اسم المستخدم وكلمة السر
    var parts = credentials.split(" "); // تقسيم المدخلات إلى جزئين

    if (parts.length === 2) {
        var username = parts[0]; // اسم المستخدم
        var password = parts[1]; // كلمة السر

        while (sWord != "1") {
            sWord = prompt(" ≫  𝐄𝐧𝐭𝐞𝐫 𝐓𝐡𝐞 𝐊𝐞𝐲 ");  
        } 

        window.alert(" ⪼  𝐖𝐚𝐥𝐜𝐨𝐦 𝐓𝐨 𝐏𝐚𝐧𝐞𝐥 𝐋𝐨𝐬𝐭𝐗  " + username);
    } else {
        window.alert(" ⪼  𝐌𝐨𝐝𝐞 𝐄𝐫𝐫𝐨𝐫: 𝐏𝐥𝐞𝐚𝐬𝐞 𝐄𝐧𝐭𝐞𝐫 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 𝐚𝐧𝐝 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐟𝐨𝐫𝐦: 'username password'");
    }
}
