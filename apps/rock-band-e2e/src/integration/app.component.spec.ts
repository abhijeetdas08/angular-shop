describe('rock-band', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('rock-band-root').should('exist');
  });
});
