describe('Authentication', () => {

  beforeEach(() => {
    cy.visit('/user/login')
  })

  it('Sing in with valid credentials L-001', () => {
    cy.get('#normal_login_email')
      .type('business@owner.com')
    cy.get('#normal_login_password')
      .type('123123')
    cy.get('.ant-btn-primary')
      .click()

    cy.get('[data-qa="userInfoName"]')
      .should('be.visible')
    cy.location('pathname')
      .should('include','client')
  })

  it('Sing in with invalid  credentials L-002', () => {
    cy.get('#normal_login_email')
      .type('business@owner.com')
    cy.get('#normal_login_password')
      .type('12312')
    cy.get('.ant-btn-primary')
      .click()

    cy.get('.ant-notification-notice-message')
      .should('have.text', 'Auth failed')
  })

  it('Credentials validation L-003', () => {

    cy.get('#normal_login_email')
      .type('test')

    cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
      .should('have.text', 'Email is not valid email')

    cy.get('#normal_login_email')
      .clear()

    cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
      .should('have.text', 'Required')

    cy.get('#normal_login_password')
      .type('text')
      .clear()

    cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]')
      .should('have.text', 'Required')
  })
})