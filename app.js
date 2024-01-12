new Vue({
  el: '#app',
  data() {
    return {
      billAmount: '',
      numberOfPeople: 1,
      customTipPercentage: '',
      tipAmount: 0.00,
      totalPerPerson: 0.00,
      selectedTip: 0 
    };
  },
  methods: {
    calculateTip() {
      if (this.billAmount === "" || this.numberOfPeople === "") return;

      const tipPercentage = this.customTipPercentage || this.selectedTip;
      const tipAmount = (this.billAmount * (tipPercentage / 100)) / this.numberOfPeople;
      tipAmount = Number(tipAmount.toFixed(2)); 

      const totalAmount = (tipAmount * this.numberOfPeople + parseFloat(this.billAmount)) / this.numberOfPeople;

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
