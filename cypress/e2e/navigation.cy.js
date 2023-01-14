import MainPage from '../pages/app/main.page'

describe('Navigation', () => {
  before(() => {
    cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
    /*cy.reload()*/
  })
  it('Clients page opens', () => {
    MainPage.navbar.linkClients.click()
    cy.location('pathname')
      .should( 'include', 'client')
  })

  it('Orders page opens', () => {
    MainPage.navbar.linkOrders.click()
    cy.location('pathname')
      .should( 'include', 'order')
  })

  it('Vendors page opens', () => {
    MainPage.navbar.linkVendors.click()
    cy.location('pathname')
      .should( 'include', 'vendor')
  })

  it('Services page opens', () => {
    MainPage.navbar.linkServices.click()
    cy.location('pathname')
      .should( 'include', 'service')
  })
})