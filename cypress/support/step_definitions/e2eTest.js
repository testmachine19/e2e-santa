import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const users = require("../../fixtures/users.json");
const boxPage = require("../../fixtures/pages/boxPage.json");
const generalElements = require("../../fixtures/pages/general.json");
const inviteeBoxPage = require("../../fixtures/pages/inviteeBoxPage.json");
import { faker } from "@faker-js/faker";

beforeEach(() => {
  newBoxName = faker.word.noun({ length: { min: 5, max: 10 } });
  wishes = faker.word.noun() + faker.word.adverb() + faker.word.adjective();
  maxAmount = 50;
  currency = "Евро";
});

let newBoxName, maxAmount, currency;

Given("the user is logged in", function () {
  cy.visit("/login");
  cy.login(users.userAutor.email, users.userAutor.password);
  cy.contains("Создать коробку").click();
});

Given("the user enters a new box name", function () {
  cy.get(boxPage.boxNameField).type(newBoxName);
  cy.get(generalElements.arrowRight).click({ multiple: true });
});

Given("the user selects the sixth icon", function () {
  cy.get(boxPage.sixthIcon).click({ force: true });
  cy.get(generalElements.arrowRight).click({ force: true });
});

Given("the user sets the gift price toggle", function () {
  cy.get(boxPage.giftPriceToggle).click();
});

Given("the user enters the max amount", function () {
  cy.get(boxPage.maxAnount).type(maxAmount);
});

Given("the user selects the currency", function () {
  cy.get(boxPage.currency).select(currency);
});

Given("the user proceeds to the next step", function () {
  cy.get(generalElements.arrowRight).click({ force: true });
  cy.get(generalElements.arrowRight).click({ force: true });
  cy.get(generalElements.arrowRight).click({ force: true });
  cy.get(generalElements.arrowRight).click({ force: true });
});

Given("the user click on box", function () {
  cy.get(
    '[href="/account/boxes"] > .header-item > .header-item__text > .txt--med'
  ).click({ force: true });
  cy.get(".btn-main").click({ force: true });
});

Given("invite other people", function () {
  cy.get(inviteeBoxPage.firstField).type(users.user1.name);
  cy.get(inviteeBoxPage.secondField).type(users.user1.email);
  cy.get(inviteeBoxPage.thirdField).type(users.user2.name);
  cy.get(inviteeBoxPage.fourthField).type(users.user2.email);
  cy.get(inviteeBoxPage.fifthField).type(users.user3.name);
  cy.get(inviteeBoxPage.sixthField).type(users.user3.email);
  cy.get(inviteeBoxPage.submitInvitation).click();
});

Given("click on the run button", function () {
  cy.get(".btn-secondary").click({ force: true });
  cy.get("a > .txt-secondary--med").click({ force: true });
});

Given("run the box", function () {
  cy.get(".btn-main").click({ multiple: true });
  cy.get(".santa-modal_content_buttons > .btn-main").click({ force: true });
});
