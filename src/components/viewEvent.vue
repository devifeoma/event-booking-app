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
          <p>
            {{ singleEvent.info }}. {{singleEvent.pleaseNote}}
          </p>
          <button class="book__event" @click="showModal">Register</button>
          <modal
            v-show="isModalVisible"
            @close="closeModal"
            v-bind:event="singleEvent"
          />
        </article>
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
    start() {
      this.$Progress.start();
    },
    finish() {
      this.$Progress.finish();
    },
    fail() {
      this.$Progress.fail();
    },
    fetchSingleEvent(id) {
      this.$Progress.start();
      axios
        .get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${this.apikey}`
        )
        .then((res) => {
          this.$Progress.finish();
          console.log(res);
          this.singleEvent = res.data;
        })
        .catch((error) => {
          this.$Progress.fail();
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
  margin-top: 100px;
}

.left-half {
  /* background-color: #ff9e2c; */
  flex: 1;
  /* padding: 1rem; */
}

.right-half {
  /* background-color: #b6701e; */
  flex: 1;
  padding: 30px 0 0 30px;
}

.single__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

article h1 {
  margin-bottom: 40px;
}

article p {
  margin-bottom: 40px;
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
</style>
