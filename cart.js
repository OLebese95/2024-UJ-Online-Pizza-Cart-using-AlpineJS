function cart() {
    return {
      sizes: {
        small: 49.0,
        medium: 89.0,
        large: 129.0,
      },
      totalPrice: 0,
      checkoutAmount: 0,
      smallPizza: 0,
      mediumPizza: 0,
      largePizza: 0,
      paymentEntered: false,
      showCheckout: false,
      showReceipt: false,
      change: 0,
      addPizza(size) {
        this.totalPrice += this.sizes[size];
        if (size == "small") {
          this.smallPizza++;
        }
        if (size == "medium") {
          this.mediumPizza++;
        }
        if (size == "large") {
          this.largePizza++;
        }
      },
      removePizza(size) {
        if (this.totalPrice >= this.sizes[size]) {
          this.totalPrice -= this.sizes[size];
        }
        if (size == "small" && this.smallPizza > 0) {
          this.smallPizza--;
        }
        if (size == "medium" && this.mediumPizza > 0) {
          this.mediumPizza--;
        }
        if (size == "large" && this.largePizza > 0) {
          this.largePizza--;
        }
      },
      processPayment() {
        if (this.checkoutAmount >= this.totalPrice) {
          this.paymentEntered = true;
          this.change = this.checkoutAmount - this.totalPrice;
          this.showReceipt = true;
          this.showCheckout = false;
        } else {
          alert("Sorry - that is not enough money!");
        }
      },
      cancelPayment() {
        this.showCheckout = false;
        this.checkoutAmount = 0;
      },
      clearCart() {
        this.paymentEntered = false;
        this.showCheckout = false;
        this.showReceipt = false;
        this.totalPrice = 0;
        this.checkoutAmount = 0;
        this.smallPizza = 0;
        this.mediumPizza = 0;
        this.largePizza = 0;
        this.change = 0;
      },
      getReceipt() {
        const items = [];
        if (this.smallPizza > 0) items.push(`Small Pizza x ${this.smallPizza} - R${(this.sizes.small * this.smallPizza).toFixed(2)}`);
        if (this.mediumPizza > 0) items.push(`Medium Pizza x ${this.mediumPizza} - R${(this.sizes.medium * this.mediumPizza).toFixed(2)}`);
        if (this.largePizza > 0) items.push(`Large Pizza x ${this.largePizza} - R${(this.sizes.large * this.largePizza).toFixed(2)}`);
        return items;
      }
    };
  }
  