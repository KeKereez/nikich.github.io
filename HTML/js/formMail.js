$("#sendMail").on("click", function() { 
	var email = $("#email").val().trim();
	var login = $("#login").val().trim();
	var date = $("#date").val().trim();
	var password = $("#password").val().trim();
	var repassword = $("#repassword").val().trim();

	if(email == "") {
		$("#errorMess").text("Введите email!");
		return false;
	} else if(!validateEmail(email)|| email.length > 40) {
		$("#errorMess").text("Введите email КОРРЕКТНО!");
		return false;
	} else if(login =="") {
		$("#errorMess").text("Введите логин!");
		return false;
	} else if(date =="") {
		$("#errorMess").text("Введите дату вашего Рождения!");
		return false;
	} else if(password == "") {
		$("#errorMess").text("Введите пароль!");
		return false;
	} else if(!validatePassword(password)) {
		$("#errorMess").text("Пароль не подходит критериям!");
		return false;
	} else if(repassword == "") {
		$("#errorMess").text("Введите пароль еще раз!");
		return false;
	} else if(repassword != password )  {
		$("#errorMess").text("Ваши пароли не совпадают!");
		return false;
	}
	$("#errorMess").text("");
    
    $.ajax({
        url:'ajax/mail.php',
        type: 'POST',
        cache: false,
        data:{'email': email,'login': login,'date': date,'password': password},
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data){
            if(!data) 
                alert("Были ошибки. сообщение не отправлено!");
            else {                
                $("mailForm").trigger("reset");
                alert("Сообщение было отправлено");
             }
            $("#sendMail").prop("disabled", false);
        }
    });
});

function validateEmail(email) {
  var pattern  = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return pattern.test(email);
}

function validatePassword(input) { 
var passw = /^[A-Za-z]\w{7,14}$/;
	return passw.test(input);
}
