const mainScreen = require("../ScreenObjects/MainScreenObject");

describe("Fer share Test suite", () => {
  // Set global variables
  let totalKmInput,
    averageConsumeInput,
    pricePerLiterInput,
    personNumberInput,
    otherCostsInput,
    calculateBtn,
    totalPrice,
    pricePerPerson;

  beforeEach(async () => {
    await browser.activateApp("com.FerShare.fershare");

    totalKmInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextTotalkm"]`
    );
    averageConsumeInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextFuelConsume"]`
    );
    pricePerLiterInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextPricePerLiter"]`
    );
    personNumberInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextNumPerson"]`
    );
    otherCostsInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editOtherCosts"]`
    );
    calculateBtn = await $(
      `//*[@resource-id="com.FerShare.fershare:id/btnCalculate"]`
    );
    totalPrice = await $(
      "//*[@resource-id='com.FerShare.fershare:id/resultPriceValue']"
    );
    pricePerPerson = await $(
      "//*[@resource-id='com.FerShare.fershare:id/resultPricePerPersonValue']"
    );
  });

  afterEach(async () => {
    // Close the app after each test
    await browser.closeApp();
  });

  it("Calculate fuel consume", async () => {
    await totalKmInput.setValue(420);
    await averageConsumeInput.setValue(5.8);
    await pricePerLiterInput.setValue(39.9);
    await personNumberInput.setValue(3);
    await otherCostsInput.setValue(720);
    await calculateBtn.click();

    expect(await totalPrice.getText()).toEqual("1691.96");
    expect(await pricePerPerson.getText()).toEqual("563.99");
  });

  it("Calculate fuel consume with ScreenObjectModel", async () => {
    await mainScreen.totalKmInput.setValue(420);
    await mainScreen.averageConsumeInput.setValue(5.8);
    await mainScreen.pricePerLiterInput.setValue(39.9);
    await mainScreen.personNumberInput.setValue(3);
    await otherCostsInput.setValue(720);

    await mainScreen.calculateBtn.click();

    await mainScreen.checkTotalPriceValue("1691.96");
    await mainScreen.checkpricePerPerson("563.99");
  });
});
