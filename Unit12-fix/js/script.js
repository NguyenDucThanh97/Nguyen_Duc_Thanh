$(function () {
    $('#frm-account').show();
    accountTab();
    // account tab
    function accountTab() {
        $("#frm-account").show();
        $("#frm-warning").hide();

        var name = $("#username");
        var pass = $("#password");
        var cfm_pass = $("#cfm-password");

        $("#previous").css({
            background: '#b3b3b3',
        });

        $('#profile').css({
            background: '#b3b3b3',
        });
        $('#warning').css({
            background: '#b3b3b3',
        });
        $('#finish').css({
            background: '#b3b3b3',
        });

        $('#account').css({
            background: '#2184be',
        });
        // kiểm tra nhập pass
        $("#cfm-password").blur(function () {
            if ($("#cfm-password").val() != $("#password").val()) {
                $("#cfm-password").css({
                    background: '##fbe3e4',
                    border: '1px solid red',
                });
            }
        });

        $("#cfm-password").focus(function () {
            $("#cfm-password").css({
                background: '',
                border: '',
            });
        });

        $("password").blur(function () {
            if ($("#cfm-password").val() != $("#password").val()) {
                $("#cfm-password").css({
                    background: '#fbe3e4',
                    border: '1px solid red',
                });
            }
        });

        pass.focus(function () {
            pass.css({
                background: '',
                border: '',
            });
        });
        // kết thúc kiểm tra nhập pass
        $('#username').focus(function () {
            $('#username').css({
                background: '',
                border: '',
            });
        });
        // lắng nghe nút next
        $('#next').click(function () {
            var name = $("#username").val();
            if (name.trim() != "" && pass.val().trim() == cfm_pass.val().trim() && cfm_pass.val().trim() != "" && pass.val().trim() != "") {
                $("#frm-account").hide();
                profileTab();
            } else {

                $('#account').css({
                    background: 'tomato',
                });

                $('#username').css({
                    background: '#fbe3e4',
                    border: '1px solid red',
                });

                pass.css({
                    background: '#fbe3e4',
                    border: '1px solid red',
                });

                cfm_pass.css({
                    background: '#fbe3e4',
                    border: '1px solid red',
                });
            }
        });
    }
    // end account tab

    // profile tab
    function profileTab() {
        $("#frm-account").hide();
        $("#frm-profile").show();

        var firstname = $('#firstname');
        var lastname = $("#lastname");
        var email = $("#email");
        var address = $("#address");
        var age = $("#age");

        $("#previous").css({
            background: '#2184be',
        });

        $('#profile').css({
            background: '#2184be',
        });
        $('#warning').css({
            background: '#b3b3b3',
        });
        $('#finish').css({
            background: '#b3b3b3',
        });
        $('#account').css({
            background: '#b3b3b3',
        });

        age.blur(function () {
            if (isNaN(age.val()) || age.val() == "") {
                age.css({
                    background: '#fbe3e4',
                    border: '1px solid red',
                });
            }
        });

        age.focus(function () {
            age.css({
                background: '',
                border: '',
            });
        });

        firstname.focus(function () {
            firstname.css({
                background: '',
                border: '',
            });
        });

        lastname.focus(function () {
            lastname.css({
                background: '',
                border: '',
            });
        });

        email.focus(function () {
            email.css({
                background: '',
                border: '',
            });
        });

        email.blur(function () {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(email.val())) {
                email.css({
                    background: '#fbe3e4',
                    border: '1px solid red',
                });
            }
        });
        // next action
        $("#next").click(function () {
            if (firstname.val() != "" && lastname.val() != "" && email.val() != "" && age.val() != "" && !isNaN(age.val())) {
                $("#frm-profile").hide();
                warningTab(age.val());
            } else {
                $('#profile').css({
                    background: 'tomato',
                });

                if (firstname.val().trim() == "") {
                    firstname.css({
                        background: '#fbe3e4',
                        border: '1px solid red',
                    });
                }

                if (lastname.val().trim() == "") {
                    lastname.css({
                        background: '#fbe3e4',
                        border: '1px solid red',
                    });
                }

                if (email.val() == "") {
                    email.css({
                        background: '#fbe3e4',
                        border: '1px solid red',
                    });
                }

                if (age.val().trim() == "") {
                    age.css({
                        background: '#fbe3e4',
                        border: '1px solid red',
                    });
                }
            }
        });

        $("#previous").click(function () {

            $("#frm-profile").hide();
            accountTab();
        });
    }
    // end profile tab

    // warning tab
    function warningTab(tuoi) {
        $("#frm-profile").hide();
        $("#frm-warning").show();

        $('#profile').css({
            background: '#b3b3b3',
        });
        $('#warning').css({
            background: '#2184be',
        });
        $('#finish').css({
            background: '#b3b3b3',
        });
        $('#account').css({
            background: '#b3b3b3',
        });

        if (parseInt(tuoi) >= 18) {
            $("#warning-c").hide();
            $("#continue-c").show();

            $("#next").click(function () {
                if ($("#check").is(':checked')) {
                    alert("Thành công !");

                    $('#profile').css({
                        background: '#2184be',
                        opacity: '0.5',
                    });
                    $('#finish').css({
                        background: '#2184be',
                        opacity: '0.5',
                    });
                    $('#warning').css({
                        background: '#2184be',
                        opacity: '0.5',
                    });
                    $('#account').css({
                        background: '#2184be',
                        opacity: '0.5',
                    });
                } else {
                    finishTab();
                }
            });

        } else {
            $("#continue-c").hide();
            $("#warning-c").show();
        }

        $("#previous").click(function () {
            $("#frm-warning").hide();
            profileTab();
        });
    }
    // end warning

    // finish tab
    function finishTab() {

        $('#profile').css({
            background: '#b3b3b3',
        });
        $('#finish').css({
            background: '#2184be',
        });
        $('#warning').css({
            background: '#b3b3b3',
        });
        $('#account').css({
            background: '#b3b3b3',
        });

        $("#previous").click(function () {
            $("#frm-finish").hide();
            warningTab();
        });
    }
    // end finish tab
})