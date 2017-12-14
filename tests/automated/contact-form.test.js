/* eslint-env mocha */
const webdriver = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const By = webdriver.By;
const until = webdriver.until;
const constants = require('./utils/constants');
const devValues = constants.devValues;
const testUrl = constants.testUrl;
const Reporter = require('./utils/reporter');
let driver;
let reporter;

describe('Restaurant Week', () => {
	describe('Contact Form', () => {
		before(() => {
			driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
			reporter = new Reporter(driver);
		});

		beforeEach(() => {
			driver.manage().window().setSize(1200, 1000);
			driver.get(testUrl);
		});

		it('should show a contact form on page load', (done) => {
			expect(false).to.be.eql(true);
		});

		it('should not allow the user to submit the form, if required information is missing', (done) => {
			expect(false).to.be.eql(true);
		});

		it('should not accept an invalid email address, in the email field', (done) => {
			expect(false).to.be.eql(true);
		});

		it('should not accept over a 500 character respone in the comments field', (done) => {
			expect(false).to.be.eql(true);
		});

		it('should not accept invalid phone number', (done) => {
			expect(false).to.be.eql(true);
		});

		it('should thank the user after sending the message', (done) => {
			expect(false).to.be.eql(true);
		});

		after(() => {
			driver.quit();
		});
	});
});
