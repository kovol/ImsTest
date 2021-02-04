$(document).ready(function () {


    $("#authorization").click(function () {
        $(".sign-in.front").css({
            "transform": "translateX(0)",
            "opacity": "1",
            "z-index": "5"
        });
        $(".sign-in.back").css({
            "transform": "translateX(0)",
            "opacity": "1",
            "z-index": "5"
        });
        $(".sign-up.front").css({
            "transform": "translateX(100%)",
            "opacity": "0",
            "z-index": "0"
        });
        $(".sign-up.back").css({
            "transform": "translateX(-100%)",
            "opacity": "0",
            "z-index": "0"
        });

    });

    $("#createAccount").click(function () {
        $(".sign-in.front").css({

            "transform": "translateX(-100%)",
            "opacity": "0",
            "z-index": "0"
        });
        $(".sign-in.back").css({

            "transform": "translateX(100%)",
            "opacity": "0",
            "z-index": "0"
        });
        $(".sign-up.front").css({

            "transform": "translateX(0)",
            "opacity": "1",
            "z-index": "5"
        });
        $(".sign-up.back").css({

            "transform": "translateX(0)",
            "opacity": "1",
            "z-index": "5"
        });

    });

    // Validate Username 
    $('#usercheck').hide();
    let usernameError = true;
    $('#name').blur(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $('#name').val();
        if (usernameValue.length == 0) {
            $('#usercheck').show();
            usernameError = false;
            return false;
        } else if ((usernameValue.length < 3) ||
            (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html("Длина имени должна быть от 3 до 10 символов");
            usernameError = false;
            return false;
        } else {
            $('#usercheck').hide();
        }
    }
    // Validate Password 
    $('#passcheck').hide();
    let passError = true;
    $('#password').blur(function () {
        validatePassword();
    });

    function validatePassword() {
        let usernamePassword = $('#password').val();
        if (usernamePassword.length == 0) {
            $('#passcheck').show();
            passError = false;
            return false;
        } else if ((usernamePassword.length < 3) ||
            (usernamePassword.length > 10)) {
            $('#passcheck').show();
            $('#passcheck').html("Длина пароля должна быть от 3 до 10 символов");
            passError = false;
            return false;
        } else {
            $('#passcheck').hide();
        }
    }



    // Validate Email 
    $('#emailcheck').hide();
    let emailError = true;
    $('#email').keyup(function () {
        validateEmail();
    });

    function validateEmail() {

        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        let emailValue = $('#email').val();

        if (regex.test(emailValue)) {
            $('#emailcheck').hide();
            emailError = true;
            return true;
        } else {
            $('#emailcheck').show();
            emailError = false;
            return false;
        }
    };
    // Validate Login 
    $('#emailLogin').hide();
    let emailLoginError = true;
    $('#login').keyup(function () {
        validateLoginEmail();
    });

    function validateLoginEmail() {

        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        let emailValue = $('#login').val();

        if (regex.test(emailValue)) {
            $('#emailLogin').hide();
            emailLoginError = true;
            return true;
        } else {
            $('#emailLogin').show();
            emailLoginError = false;
            return false;
        }
    };

    // Validate Phone 
    $('#phonecheck').hide();
    let phoneError = true;
    $('#phone').keyup(function () {
        validatePhone();
    });

    function validatePhone() {
        let phoneNum = $('#phone').val();
        if (phoneNum.length == 0) {
            $('#phonecheck').show();
            phoneError = false;
            return false;
        } else if (isNaN(phoneNum) || phoneNum.length != 7) {
            $('#phonecheck').show();
            $('#phonecheck').html("Введите 7 цифр");
            phoneError = false;
            return false;
        } else {
            $('#phonecheck').hide();
        }
    }

    //Validate checkbox


    $('#checkboxcheck').hide();

    function validateCheckbox() {
        if (!$("#checkbox").is(":checked")) {
            $('#checkboxcheck').show();
            checkErr = true;
            return false;
        }
        checkErr = true;
        return true;

    }




    // Submitt button 
    $('#registration').click(function () {
        validateUsername();
        validateEmail();
        validatePhone();
        validateCheckbox();
        if ((usernameError == true) &&
            (phoneError == true) &&
            (emailError == true) &&
            (checkErr == true)) {
            return true;
        } else {
            return false;
        }
    });
    $('#enter').click(function () {
        validateLoginEmail();
        validatePassword();

        if ((emailLoginError == true) &&
            (passError == true)) {
            return true;
        } else {
            return false;
        }
    });




});