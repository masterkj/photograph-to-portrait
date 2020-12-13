<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-brand to="/">LOGO</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-md-4">
          <b-nav-item
            class="mr-1"
            to="/portrait-design"
          >Portrait desing</b-nav-item>
          <b-nav-item
            class="mr-1"
            to="/watercolor-design"
          >Watercolor Portrait Design</b-nav-item>
          <b-nav-item
            class="mr-1"
            to="/cuddly-design"
          >Designing a cuddly blanket</b-nav-item>
          <b-nav-item
            class="mr-1"
            to="/customer-opinions"
          >Customer feedbacks</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item
            class="mr-1"
            to="/shopping-cart"
          >
            <font-awesome-icon
              icon="shopping-cart"
              size="lg"
            />
            <span class="badge rounded-pill bg-primary text-white">1</span>
          </b-nav-item>

          <!-- <b-nav-item-dropdown
            text="Lang"
            right
          >
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <font-awesome-icon
                icon="user"
                size="lg"
              />
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>