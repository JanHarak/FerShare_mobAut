class MainScreenObject {
  getElementByResourceId(resourceId) {
    return $(`android=new UiSelector().resourceId("${resourceId}")`);
  }

  get totalKmInput() {
    return this.getElementByResourceId(
      "com.FerShare.fershare:id/editTextTotalkm"
    );
  }

  get averageConsumeInput() {
    return this.getElementByResourceId(
      "com.FerShare.fershare:id/editTextFuelConsume"
    );
  }

  get pricePerLiterInput() {
    return this.getElementByResourceId(
      "com.FerShare.fershare:id/editTextPricePerLiter"
    );
  }

  get personNumberInput() {
    return this.getElementByResourceId(
      "com.FerShare.fershare:id/editTextNumPerson"
    );
  }

  get otherCostsInput() {
    return this.getElementByResourceId(
      "com.FerShare.fershare:id/editOtherCosts"
    );
  }

  get calculateBtn() {
    return this.getElementByResourceId("com.FerShare.fershare:id/btnCalculate");
  }

  get totalPrice() {
    return this.getElementByResourceId(
      "com.FerShare.fershare:id/resultPriceValue"
    );
  }

  get pricePerPerson() {
    return this.getElementByResourceId(
      "com.FerShare.fershare:id/resultPricePerPersonValue"
    );
  }

  async checkTotalPriceValue(value) {
    await expect(this.totalPrice).toHaveText(value);
    return this;
  }
  async checkpricePerPerson(value) {
    await expect(this.pricePerPerson).toHaveText(value);
    return this;
  }
}

module.exports = new MainScreenObject();
