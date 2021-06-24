function check() {

    var idCheck = document.getElementById("id");


    var pwCheck = document.getElementById("pw");
    var pwcCheck = document.getElementById("pwc");
    var birthCheck = document.getElementById("birth");
    var agreeCheck = document.getElementById("agree");

    // 정규식
    var idJ = RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var pwJ = RegExp(/^[a-zA-Z0-9]{4,12}$/);

    if(idCheck.value == ""){
        alert("아이디를 입력해주세요.");
        idCheck.focus();
        return false;
    }

    if(!idJ.test(idCheck.value)){
        alert("4~12자 사이로 입력해주세요.")
        idCheck.focus();
        return false;
    }

    if(pwCheck.value == ""){
        alert("비밀번호를 입력해주세요.");
        pwCheck.focus();
        return false;
    }

    if(!pwJ.test(pwCheck.value)){
        alert("4~12자 사이로 입력해주세요.")
        pwCheck.focus();
        return false;
    }

    if(pwcCheck.value == ""){
        alert("비밀번호를 재확인해주세요.");
        pwcCheck.focus();
        return false;
    }

    if(pwCheck.value != pwcCheck.value) {
        alert("비밀번호를 같게 입력해주세요");
        pwcCheck.focus();
        return false;
    }

    if(birthCheck.value == ""){
        alert("생년월일을 입력해주세요.");
        birthCheck.focus();
        return false;
    }

    if((birthCheck.value.length)<8) {
        alert("생년월일을 8자로 입력해주세요.")
        birthCheck.focus();
         return false;
    }

    if((birthCheck.value.length) >= 9) {
        alert("생년월일을 8자로 입력해주세요.")
        birthCheck.focus();
        return false;
    }

    if(!agreeCheck.checked) {
        alert("약관 동의에 체크해주세요.")
        agreeCheck.focus();
        return false;
    }
    document.join_form.submit();

}

