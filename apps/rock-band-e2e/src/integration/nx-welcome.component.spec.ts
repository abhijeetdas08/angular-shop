describe('rock-band', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('rock-band-nx-welcome').should('exist');
  });
});
