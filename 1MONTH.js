function getUserCredentials() {
    var correctUsername = "123321123"; // اسم المستخدم الصحيح
    var correctPassword = "1"; // كلمة المرور الصحيحة

    while (true) {
        var username = prompt("𝘌𝘯𝘵𝘦𝘳 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 :");
        var password = prompt("𝘌𝘯𝘵𝘦𝘳 𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥 :");

        if (username && password) {
            if (username === correctUsername && password === correctPassword) {
                alert("Walcom To Panel LostX  Angel ⇰ (1 Month ) ");
                break; // الخروج من الحلقة إذا كانت المدخلات صحيحة
            } else {
                alert("KEY THE PANEL 1MONTH IS END / BUY NEW KEY : @TheLostX");
            }
        } else {
            alert("You Didn't Enter Passwoord Or Username ");
        }
    }
}

getUserCredentials();
