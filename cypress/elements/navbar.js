class Navbar {
  get linkClients () { return cy.get('#top-menu > :nth-child(1) > a') }
  get linkOrders () { return cy.get(':nth-child(2) > a') }
  get linkVendors () { return cy.get('#top-menu > :nth-child(3)') }
  get linkServices () { return cy.get(':nth-child(4) > a') }
}

export default new Navbar()