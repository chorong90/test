function validate() {

    const idtext = document.getElementById("user_id");
    const pwtext = document.getElementById("user_pw");
    const pwctext = document.getElementById("user_pw2");
    const nametext = document.getElementById("user_name");
    const emailtext = document.getElementById("user_email");
    const phonetext = document.getElementById("user_phone");
    const birthtext = document.getElementById("user_birth");
    const cbox = document.getElementById("cbox");
    const join = document.getElementById('join');

    const user_id = idtext.value;
    const user_pw = pwtext.value;
    const user_pw2 = pwctext.value;
    const user_name = nametext.value;
    const user_email = emailtext.value;
    const user_phone = phonetext.value;
    const user_birth = birthtext.value;

    // 모든 공백 정규식
    const empJ = /\s/g;
    // 아이디 정규식
    const idJ = /^[a-z0-9]{4,12}$/;
    // 패스워드 정규식
    const pwJ = /^[A-Za-z0-9]{4,12}$/;
    // 이메일 유효성 체크 정규식
    const emailJ = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 이름 유효성 체크 정규식
    const nameJ = /^[가-힣]{2,6}$/;
    // 휴대폰 번호 정규식
    const phoneJ = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/;

    const birthJ = /^[0-9]{8}$/;

    if (idtext.value == "") {
        alert("아이디는 필수 정보입니다.");
        return false;
    }

    if (!idJ.test(idtext.value)) {
        alert("4~12자의 영문 대, 소문자, 숫자를 사용해주세요");
        idtext.value = "";
        idtext.focus();
        return false;
    }

    if (pwtext.value == "") {
        alert("비밀번호는 필수 정보입니다.");
        return false;
    }

    if (!pwJ.test(pwtext.value)) {
        alert("4~12자의 영문 대소문자와 숫자로만 입력해주세요");
        pwtext.value = "";
        pwtext.focus();
        return false;
    }
    if ((user_pw.slice(0, user_pw.length) === user_id.slice(0, user_id.length))) {
        alert("비밀번호가 아이디와 같습니다.");
        pwtext.value = "";
        pwtext.focus();
        return false;
    }

    if (pwctext.value == "") {
        alert("비밀번호 재확인은 필수 정보입니다.");
        return false;
    }
    if (!(user_pw2.slice(0, user_pw2.length) === user_pw.slice(0, user_pw.length))) {
        alert("비밀번호가 일치하지 않습니다.");
        pwctext.value = "";
        pwctext.focus();
        return false;
    }
    if (nametext.value == "") {
        alert("이름은 필수 정보입니다.");
        return false;
    }
    if (!nameJ.test(nametext.value)) {
        alert("이름을 정확히 입력해 주세요.");
        nametext.value = "";
        nametext.focus();
        return false;
    }
    if (emailtext.value == "") {
        alert("이메일은 필수 정보입니다.");
        return false;
    }
    if (!emailJ.test(emailtext.value)) {
        alert("이메일 형식을 다시 확인해주세요.");
        emailtext.value = "";
        emailtext.focus();
        return false;
    }

    if (phonetext.value == "") {
        alert("휴대폰 번호는 필수 정보입니다.");
        return false;
    }
    if (!phoneJ.test(phonetext.value)) {
        alert("휴대폰 번호를 형식에 맞게 입력해 주세요");
        phonetext.value = "";
        phonetext.focus();
        return false;
    }
    if (birthtext.value == "") {
        alert("생년월일은 필수 정보입니다.");
        return false;
    }
    if (!birthJ.test(birthtext.value)){
        alert("생년월일을 8자리로 입력해주세요.");
        birthtext.focus();
        return false;
    }

    alert("회원가입이 완료되었습니다.");
    return false;
}

function check(idJ, what, message) {
    if (idJ.test(what.value)) {
        return true;
    }
    alert(message);
    what.value = "";
    what.focus();
    //return false;
}
