<template>
  <!-- Header -->
  <header class="header">
    <a href="javascript:void(0);" class="icon" onclick="myHamburger()">
      <img src="../assets/img/hamburg__menu.png" />
    </a>
    <h1>
      <a href="index.html"
        ><span class="logo__design">E</span>vent<span class="logo__design"
          >B</span
        >eat</a
      >
    </h1>
    <div class="header__link">
      <ul>
        <li>
          <a href="index.html" class="button">Home</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    myHamburger() {
      const hamburger = document.getElementById("side__bar");
      if (hamburger.style.display === "block") {
        hamburger.style.display = "none";
      } else {
        hamburger.style.display = "block";
      }
    },
  },
};
</script>
