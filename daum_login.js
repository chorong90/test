describe('daum_login', ()=> {

    it('daum_login', () => {
        cy.viewport(1280, 660)

        // 소보로 홈페이지 열기
        cy.visit('http://www.daum.net')
        // 로그인 버튼 선택
        cy.get('.link_login').eq(0).click();
        // ID 인풋박스에 이메일 입력
        cy.get('.box_inp').eq(0).type('crkim927')
        // Password 인풋박스에 패스워드 입력
        cy.get('.box_inp').eq(1).type('thwjd417!{enter}', {delay: 200})

    })
})
