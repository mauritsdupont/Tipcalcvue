new Vue({
  el: '#app',
  data() {
    return {
      billAmount: '',
      numberOfPeople: 1,
      customTipPercentage: '',
      tipAmount: 0.00,
      totalPerPerson: 0.00
    };
  },
  methods: {
    calculateTip() {
      if (this.billAmount === "" || this.numberOfPeople === "") return;

      let tipPercentage = this.customTipPercentage || this.selectedTip;
      let tipAmount = (this.billAmount * (tipPercentage / 100)) / this.numberOfPeople;
      tipAmount = Math.floor(tipAmount * 100) / 100;

      let totalAmount = (tipAmount * this.numberOfPeople + parseFloat(this.billAmount)) / this.numberOfPeople;

      this.tipAmount = tipAmount.toFixed(2);
      this.totalPerPerson = totalAmount.toFixed(2);
    },
    resetEverything() {
      this.billAmount = '';
      this.numberOfPeople = 1;
      this.customTipPercentage = '';
      this.tipAmount = 0.00;
      this.totalPerPerson = 0.00;
    },
    selectTip(tip) {
      this.selectedTip = tip;
      this.calculateTip();
    }
  }
});
