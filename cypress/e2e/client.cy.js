describe('Client', ()=> {

  beforeEach(() => {
    cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
    cy.visit('/client')
  })

  it('Creation client', () => {
    const timestamp = new Date().getTime()
    const description = `${timestamp} 1234567890`

    cy.get('[class="ant-btn ant-btn-primary"]')
      .click()
    cy.get('.ant-drawer-body > .ant-form > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #name')
      .type('Avocado')
    cy.get('[id="phone"][class="ant-input"]')
      .type('2587896352')
    cy.get('[id="email"][class="ant-input"]')
      .type('avocado@gmail.com')
    cy.get('#description')
      .type(description)
    cy.get('[class="ant-form-item-control-input-content"]>[class="ant-btn ant-btn-primary"]')
      .click()

    cy.contains('Avocado')
      .should('be.visible')
    /*cy.xpath('//*[@class="ant-table-cell"][contains(text(), "Avocado")]')
      .should('be.visible')*/
  })
})