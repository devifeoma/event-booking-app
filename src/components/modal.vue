<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <!-- This is the default tile! -->
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <h1>Tickets</h1>

            <div
              style="display: flex; flow-direction: row; justify-content: space-between; margin-bottom: 5rem;"
            >
              <p>Free</p>
              <select
                class="select__number"
                v-model="quantity"
                @change="totalPrice()"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <input type="email" v-model="email" />
            </div>

            <p>
              Sales end on Oct 22, 2020 A link to the virtual event will be
              included in your confirmation email and also re-sent on 8/24.
            </p>

            <!-- <button type="button" class="checkout">Checkout</button> -->
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <!-- I'm the default footer!

            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button> -->
            <button type="button" class="checkout" @click="pay()">
              Checkout
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: ["event"],
  data() {
    return {
      quantity: 0,
      email: "",
      price: "",
      API_publicKey: "FLWPUBK_TEST-11a8d0aa19dfbe93e9935230997e57ad-X",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    pay() {
      var x = window.getpaidSetup({
        PBFPubKey: this.API_publicKey,
        txref: "rave-123456",
        customer_email: this.email,
        amount: this.price,
        customer_phone: "234099940409",
        currency: "NGN",

        meta: [
          {
            metaname: "flightID",
            metavalue: "AP1234",
          },
        ],
        onclose: function() {},
        callback: function(response) {
          //   var tx_ref = response.data.txRef; // collect txRef returned and pass to a                    server page to complete status check.
          console.log("This is the response returned after a charge", response);
          if (
            response.data.chargeResponseCode == "00" ||
            response.data.chargeResponseCode == "0"
          ) {
            // redirect to a success page
          } else {
            // redirect to a failure page.
          }

          x.close(); // use this to close the modal immediately after payment.
        },
      });
    },
    totalPrice() {
      console.log("Event data", this.event);

      this.price = parseInt(this.quantity) * this.event.priceRanges[0].max;
      console.log("hiiiiiiiii");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.3); */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #f2f2f2;
  box-shadow: 1px 1px 20px 1px;
  padding: 2rem;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  /* border-bottom: 1px solid #eeeeee; */
  color: #4aae9b;
  justify-content: flex-end;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: brown;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.checkout {
  background: brown;
  color: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  border: transparent;
}

.select__number {
  width: 10%;
  display: block;
  font-size: 16px;
  color: #444;
  line-height: 1.3;
}
</style>
