/* eslint-env mocha */
const webdriver = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const By = webdriver.By;
const until = webdriver.until;
const testUrl = 'http://172.28.1.245:8080/contact.html';
let driver;

describe('Restaurant Week', () => {
	describe('Contact Form', () => {
		before(() => {
			driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
		});

		beforeEach(() => {
			driver.manage().window().setSize(1200, 1000);
			driver.get(testUrl);
		});

		it('should show a contact form on page load', (done) => {
			
		});

		it('should not allow the user to submit the form, if required information is missing', (done) => {
			
		});

		it('should not accept an invalid email address, in the email field', (done) => {
			
		});

		it('should not accept over a 500 character respone in the comments field', (done) => {
			
		});

		it('should not accept invalid phone number', (done) => {
			
		});

		it('should thank the user after sending the message', (done) => {
			
		});

		after(() => {
			driver.quit();
		});
	});
});
