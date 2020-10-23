<template>
  <div>
    <top-bar></top-bar>

    <section class="container">
      <div class="left-half">
        <figure>
          <img
            :src="singleEvent.images[0].url"
            :alt="singleEvent.name"
            class="single__img"
          />
        </figure>
      </div>

      <div class="right-half">
        <article>
          <h1>{{ singleEvent.name }}</h1>
          <p>{{ singleEvent.info }}. {{ singleEvent.pleaseNote }}</p>
          <div
            style="margin-bottom: 30px; font-family: FLW-bold-italic; font-size: 23px; color: #333333;"
          >
            <span>
              $
              {{
                singleEvent.priceRanges && singleEvent.priceRanges.length >= 0
                  ? singleEvent.priceRanges[0].min
                  : ""
              }}
              - $
              {{
                singleEvent.priceRanges && singleEvent.priceRanges.length >= 0
                  ? singleEvent.priceRanges[0].max
                  : "Free"
              }}</span
            >
          </div>
          <button class="book__event" @click="showModal">Buy Tickets</button>
          <modal
            v-show="isModalVisible"
            @close="closeModal"
            v-bind:event="singleEvent"
          />
        </article>
      </div>
    </section>
    <section class="second__container">
      <div class="left-half">
        <h1
          style=" margin-bottom: 20px; font-family: FLW-regular; font-size: 16px; color: #333333;"
        >
          Venue
        </h1>
        <p
          style=" margin-bottom: 15px; font-family: FLW-bold-italic; font-size: 22px; color: #333333;"
        >
          Online
        </p>
      </div>
      <div class="right-half">
        <h1
          style=" margin-bottom: 20px; font-family: FLW-regular; font-size: 15px; color: #333333;"
        >
          Date and Time
        </h1>
        <span
          style=" margin-bottom: 15px; font-family: FLW-bold-italic; font-size: 22px; color: #333333;"
          ><cite>{{
            singleEvent.dates.start.dateTime
              | moment("dddd, MMMM Do YYYY, h:mm:ss a")
          }}</cite></span
        >
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
      </div>
    </section>
    <!-- <event-footer></event-footer> -->
  </div>
</template>

<script>
import topBar from "../components/topBar";
// import eventFooter from "../components/eventFooter";
import modal from "../components/modal.vue";
import axios from "axios";
export default {
  components: {
    topBar,
    // eventFooter,
    modal,
  },
  data() {
    return {
      apikey: "i20KpdOahHdtS7UAxtXvnETRKnkAyfgj",
      singleEvent: [],
      isModalVisible: false,
    };
  },

  mounted() {
    this.fetchSingleEvent(this.$route.params.id);
  },

  methods: {
    // start() {
    //   this.$Progress.start();
    // },
    // finish() {
    //   this.$Progress.finish();
    // },
    // fail() {
    //   this.$Progress.fail();
    // },
    fetchSingleEvent(id) {
      // this.$Progress.start();
      axios
        .get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${this.apikey}`
        )
        .then((res) => {
          // this.$Progress.finish();
          console.log(res);
          this.singleEvent = res.data;
        })
        .catch((error) => {
          // this.$Progress.fail();
          console.log(error);
        });
    },

    truncateString(str, num) {
      if (!str) {
        return false;
      }

      if (str.length <= num) {
        return str;
      }

      return str.slice(0, num) + "...";
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
/* div {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */

.container {
  display: flex;
  padding-left: 10rem;
  padding-right: 10rem;
  margin-top: 120px;
}

.second__container {
  display: flex;
  padding-left: 10rem;
  padding-right: 10rem;
  margin-top: 50px;
}

.left-half {
  /* background-color: #ff9e2c; */
  flex: 1;
  /* padding: 1rem; */
}

.right-half {
  /* background-color: #b6701e; */
  flex: 1;
  padding: 0 0 0 30px;
}

.single__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

article h1 {
  margin-bottom: 40px;
  font-family: FLW-bold-italic;
  font-size: 23px;
  color: #333333;
}

article p {
  margin-bottom: 40px;
  font-family: FLW-Regular;
  /* font-size: 16px;
  line-height: 21px; */
  font-size: 18px;
  line-height: 28px;
  color: #4a4a4a;
}

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
  background-color: #f5a623;
  border: none;
  border-radius: 4px;
  font-size: 18px;
}

.social__share {
  margin-top: 15px;
}

.social__share ul li {
  display: inline-block;
  list-style: none;
  padding-left: 1px;
  padding: 10px;
}
.social__icon a img {
  margin-bottom: 10px;
  height: 35px;
  width: 35px;
}

.social__icon__design {
  height: 30px;
  width: 30px;
}
</style>
