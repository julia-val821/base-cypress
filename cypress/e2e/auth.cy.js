import LoginPage from '../pages/login.page'
import ClientPage from '../pages/app/client.page'

describe('Authentication', () => {
  beforeEach(() => {
    LoginPage.open()
  })

  it('Sing in with valid credentials L-001', () => {
    LoginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    ClientPage.nameDropdown.should('be.visible')
    cy.location('pathname')
      .should('include','client')
  })

  it('Sing in with invalid  credentials L-002', () => {
    LoginPage.login(Cypress.env('EMAIL'), '12312')
    LoginPage.toast.should('have.text', 'Auth failed')
  })

  it('Credentials validation L-003', () => {

    LoginPage.inputEmail.type('test')
    LoginPage.emailValidation.should('have.text', 'Email is not valid email')

    LoginPage.inputEmail.clear()
    LoginPage.emailValidation.should('have.text', 'Required')

    LoginPage.inputPassword
      .type('text')
      .clear()
    LoginPage.passwordValidation
      .should('have.text', 'Required')
  })
})