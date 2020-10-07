<template>
  <div>
    <article class="article">
      <!-- <h1 class="article__title">
        Top 6 tips you should know as a Javascript developer
      </h1> -->
      <!-- <div class="author__card">
        <img src="../assets/img/code.jpg" alt="author" />
        <div class="author__bio">
          <h3>Judith Ifeoma Nwokike</h3>
          <p><cite>Front End Developer</cite></p>
          <p><cite>Nov. 30, 2019</cite></p>
        </div>
      </div> -->
      <figure>
        <img
          src="../assets/img/angular.png"
          class="article__image"
          alt="angular__image"
        />
      </figure>

      <div class="book">
        <div class="event__description">
          <h2>About this event</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <b>Lorem ipsum dolor sit amet, incididunt ut</b> labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore

            <span class="underline"
              >dolor sit amet, incididunt ut labore Lorem ipsum dolor sit amet,
              Lorem ipsum dolor sit amet, incididunt ut labore</span
            >
          </p>
        </div>

        <div class="pay__div">
          <h5 class="article__title">
            Top 6 tips you should
          </h5>
          <!-- <p>
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. qui officia deserunt mollit anim id est laborum Lorem ipsum
            dolor sit amet, Lorem ipsum dolor sit amet, incididunt ut labore
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, incididunt
            ut labore Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            incididunt ut labore Lorem ipsum dolor sit amet, Lorem ipsum
          </p> -->
          <button class="book__event" @click="payWithRave">Book Event</button>
        </div>
      </div>

      <div class="social__share">
        <ul>
          <li class="social__icon">
            <a href="#"
              ><img
                src="../assets/img/linkedin-square.png"
                alt="linkedin"
                class="social__icon__design"
            /></a>
          </li>
          <li class="social__icon">
            <a href="#"
              ><img
                src="../assets/img/twitter-square.png"
                alt="twitter"
                class="social__icon__design"
            /></a>
          </li>
          <li class="social__icon">
            <a href="#"
              ><img
                src="../assets/img/facebook-sqaure.png"
                alt="facebook"
                class="social__icon__design"
            /></a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      API_publicKey: "FLWPUBK_TEST-11a8d0aa19dfbe93e9935230997e57ad-X",
    };
  },
  //   mounted() {
  //     this.viewEvent();
  //   },

  methods: {
    payWithRave() {
      var x = getpaidSetup({
        PBFPubKey: this.API_publicKey,
        customer_email: "judithcynthia1@gmail.com",
        customer_name: "Judith",
        amount: 1000,
        // customer_phone: "234099940409",
        currency: "NGN",
        txref: "rave-123456",
        payment_plan: 5178,
        // subaccounts: [
        // {
        //   id: "RS_B324291E4892B64A9CE1B1DE77DFE84B",
        //   id: "RS_51A6BCC4D3B924A6B6C241D0A15D615A"
        // }
        // ],
        meta: [
          {
            metaname: "flightID",
            metavalue: "AP1234",
          },
        ],
        onclose: function() {},
        callback: function(response) {
          var txref = response.tx.txRef; // collect flwRef returned and pass to a server page to complete status check.
          console.log("This is the response returned after a charge", response);
          if (
            response.tx.chargeResponseCode == "00" ||
            response.tx.chargeResponseCode == "0"
          ) {
            // redirect to a success page
          } else {
            // redirect to a failure page.
          }

          x.close(); // use this to close the modal immediately after payment.
        },
      });
    },
  },
};
</script>

<style>
.book {
  display: flex;
  /* justify-content: space-around; */
  margin-top: 30px;
}

.event__description {
  width: 60%;
}
.pay__div {
  margin-left: 20px;
  width: 40%;
}

.book__event {
  padding: 15px 60px;
  color: #ffffff;
  background-color: green;
  border: none;
  border-radius: 4px;
  font-size: 18px;
}
</style>
