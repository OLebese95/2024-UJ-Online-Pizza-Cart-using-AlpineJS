function pizzaCart() {
  return {
      cart: {
          small: 1,
          medium: 0,
          large: 0
      },
      totalCost: 0,
      paymentAmount: 0,
      message: '',
      addToCart(size, price) {
          this.cart[size]++;
          this.totalCost += price;
      },
      removeFromCart(size, price) {
          if (this.cart[size] > 0) {
              this.cart[size]--;
              this.totalCost -= price;
          }
      },
      checkout() {
          if (this.paymentAmount >= this.totalCost) {
              this.message = 'Enjoy!';
              this.clearCart();
          } else {
              this.message = 'Sorry - that is not enough money!';
          }
          setTimeout(() => this.message = '', 3000);
      },
      clearCart() {
          this.cart.small = 0;
          this.cart.medium = 0;
          this.cart.large = 0;
          this.totalCost = 0;
          this.paymentAmount = 0;
      }
  }
}