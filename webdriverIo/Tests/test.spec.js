const MainScreenObject = require("../ScreenObjects/MainScreenObject");

describe("Fer share Test suite", () => {
  it("Calculate fuel consume", async () => {
    // ------ Using simple object data without ScreenObject ------

    const totalKmInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextTotalkm"]`
    );
    const averageConsumeInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextFuelConsume"]`
    );
    const pricePerLiterInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextPricePerLiter"]`
    );
    const personNumberInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editTextNumPerson"]`
    );
    const otherCostsInput = await $(
      `//*[@resource-id="com.FerShare.fershare:id/editOtherCosts"]`
    );
    const calculateBtn = await $(
      `//*[@resource-id="com.FerShare.fershare:id/btnCalculate"]`
    );

    const totalPrice = await $(
      "//*[@resource-id='com.FerShare.fershare:id/resultPriceValue']"
    );

    const pricePerPerson = await $(
      "//*[@resource-id='com.FerShare.fershare:id/resultPricePerPersonValue']"
    );

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
    await MainScreenObject.totalKmInput.setValue(420);
    await MainScreenObject.averageConsumeInput.setValue(5.8);
    await MainScreenObject.pricePerLiterInput.setValue(39.9);
    await MainScreenObject.personNumberInput.setValue(3);
    await MainScreenObject.otherCostsInput.setValue(720);

    await MainScreenObject.calculateBtn.click();

    await MainScreenObject.checkTotalPriceValue("1691.96");
    await MainScreenObject.checkpricePerPerson("563.99");
  });
});
