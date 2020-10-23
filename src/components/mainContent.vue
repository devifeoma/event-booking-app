<template>
  <!-- Main Content -->
  <main class="main__content">
    <div class="main__post">
      <div class="card" v-for="event in events" :key="event.id">
        <div class="event__image">
          <img :src="event.images[0].url" :alt="event.name" />
        </div>
        <div class="event__description">
          <span style="color: red; margin-bottom: 10px;"
            ><cite>{{
              event.dates.start.dateTime | moment("dddd, MMMM Do YYYY")
            }}</cite></span
          >
          <h3>
            <router-link :to="{ name: 'viewEvent', params: { id: event.id } }"
              >{{ event.name }}
            </router-link>
          </h3>
          <p>
            {{
              truncateString(event.info, 70) ||
                "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, incididu ut labore et"
            }}
          </p>
          <div class="main__content__price">
            <!-- {{getmax(array) ? array.priceRanges[0].max : ""}} -->
            <span>
              $
              {{
                event.priceRanges && event.priceRanges.length >= 0
                  ? event.priceRanges[0].max
                  : ""
              }}
              - $
              {{
                event.priceRanges && event.priceRanges.length >= 0
                  ? event.priceRanges[0].min
                  : "Free"
              }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Fixed Post -->
    <div class="fixed__post">
      <div class="fixed__post__title">
        <h3>Popular Event</h3>
      </div>
      <div class="post__content">
        <!-- <div>
                        <a href="#" class="post__content__image">
                            <img src="assets/img/code.jpg" alt="image">
                        </a>
                    </div> -->
        <div class="post__content__herder">
          <!-- <a href="#" class="post__title"
            >Top 6 tips you should know as a Javascript developer</a
          > -->
          <!-- {{event.products.name}} -->
        </div>
      </div>

      <div class="post__content">
        <!-- <div>
          <a href="#" class="post__content__image">
            <img src="assets/img/angular.png" alt="image" />
               <img :src="event.images[0].url" :alt="event.name" />
          </a>
        </div> -->
        <div class="post__content__herder">
          <a href="#" class="post__title">Creating your app with Angular</a>
        </div>
      </div>

      <div class="post__content">
        <!-- <div>
          <a href="#" class="post__content__image">
            <img src="assets/img/javascript.png" alt="image" />
          </a>
        </div> -->
        <div class="post__content__herder">
          <a href="#" class="post__title">JavaScript for Newbie</a>
        </div>
      </div>

      <div class="subscribe__us">
        <h3>SUBSCRIBE US</h3>
        <video width="100%" controls>
          <source src="https://www.youtube.com" type="video/mp4" />
        </video>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "mainContent",
  data() {
    return {
      events: [],
    };
  },

  mounted() {
    this.fetchEvents();
  },

  methods: {
    getMax(array) {
      return array.priceRanges && array.priceRanges.length;
    },
    fetchEvents() {
      axios
        .get(
          "https://app.ticketmaster.com/discovery/v2/events?apikey=j3NtHIoBfApjHU0wjFnjENfU3VNu9K3i&keyword=Tech&locale=en&size=50&countryCode=US"
        )
        .then((res) => {
          this.events = res.data._embedded.events;
          console.log(res.data._embedded);
        })
        .catch((error) => {
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
  },
};
</script>
