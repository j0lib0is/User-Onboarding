// write tests here
describe('List of Users', () => {
	// RESET PAGE
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	})

	// HELPERS
	const nameInput = () => cy.get('input[name=name]');
	const emailInput = () => cy.get('input[name=email]');
	const passwordInput = () => cy.get('input[name=password]');
	const tosCheckbox = () => cy.get('input[name=tos]');
	const submitButton = () => cy.contains('Submit');
	
	// STATUS
	it('Hello? Is this thing on?', () => {
		expect(1 + 2).to.equal(3);
	})
	
	// ELEMENTS
	it('Elements exist', () => {
		nameInput().should('exist');
		emailInput().should('exist');
		passwordInput().should('exist');
		tosCheckbox().should('exist');
		submitButton().should('exist');
	})

	// TESTS
	describe('Fills out the "Add New User" form', () => {
		it('Visits the correct url', () => {
			cy.url().should('include', 'localhost');
		})

		it('Fields start out empty', () => {
			nameInput().should('have.value', '');
			emailInput().should('have.value', '');
			passwordInput().should('have.value', '');
		})

		it('Terms of Service checkbox starts out unchecked', () => {
			tosCheckbox().should('not.be.checked');
		})

		it('Submit button starts out disabled', () => {
			submitButton().should('be.disabled');
		})

		it('Fill out form', () => {
			nameInput()
				.type('Jason Bourne')
				.should('have.value', 'Jason Bourne');
			emailInput()
				.type('bourne@ultimatum.com')
				.should('have.value', 'bourne@ultimatum.com');
			passwordInput()
				.type('Password123')
				.should('have.value', 'Password123');
			tosCheckbox()
				.check()
				.should('be.checked');
			submitButton()
				.should('not.be.disabled');
		})

		it('Add a new user and delete it', () => {
			nameInput().type('Jason Bourne');
			emailInput().type('bourne@ultimatum.com');
			passwordInput().type('Password123');
			tosCheckbox().check();
			submitButton().click();
			cy.contains('Jason Bourne').should('exist');
			cy.contains('Jason Bourne').parents().siblings('button:nth-of-type(1)').click();
		})
	}) // CLOSE INNER DESCRIBE
}) // CLOSE OUTER DESCRIBE