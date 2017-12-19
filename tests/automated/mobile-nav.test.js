/* eslint-env mocha */
const webdriver = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const By = webdriver.By;
const until = webdriver.until;
const testUrl = 'http://172.28.1.245:8080/index.html';
let driver;

describe('Restaurant Week', () => {
	describe('Mobile Nav', () => {
		before(() => {
			driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
		});

		beforeEach(() => {
			driver.manage().window().setSize(1200, 1000);
			driver.get(testUrl);
		});

		it('should NOT SHOW the mobile nav icon on screens above 968px pixels', (done) => {
			
		});

		it('should SHOW the mobile nav icon on screens below 968px pixels', (done) => {
			
		});

		it('should show an "X" icon when the mobile nav is expanded', (done) => {
			
		});

		it('should show a "hamburger" icon when the mobile nav is expanded', (done) => {
			
		});

		it('should expand the navigation when the mobile nav button is clicked', (done) => {
			
		});

		it('should collapse the navigation when the mobile nav button is clicked', (done) => {
			
		});

		after(() => {
			driver.quit();
		});
	});
});
