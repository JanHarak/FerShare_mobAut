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

  before(async () => {
    // Set values for global variables
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
    await totalKmInput.setValue(420);
    await averageConsumeInput.setValue(5.8);
    await pricePerLiterInput.setValue(39.9);
    await personNumberInput.setValue(3);
    await otherCostsInput.setValue(720);

    await calculateBtn.click();

    await expect(totalPrice).toHaveText("1691.96");
    await expect(pricePerPerson).toHaveText("563.99");
  });
});
