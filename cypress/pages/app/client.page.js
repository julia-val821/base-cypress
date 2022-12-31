import AppPage from '../app.page'

class ClientPage extends AppPage {
  get nameDropdown() { return cy.get('[data-qa="userInfoName"]') }
}

export  default  new ClientPage()