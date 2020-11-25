<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <h2>LOGO</h2>
            <payment-list />
          </div>
          <div class="col-md-3">
            Shipping <br />
            GENERAL TERMS AND CONDITIONS<br />
            Revocation<br />
            Imprint<br />
            Data protection<br />
            terms of service<br />
            refund policy<br />
          </div>
          <div class="col-md-3">
            <p>
              <p>In our studio we edit and print <strong>animal portraits</strong> for <strong>dogs, horses, cats</strong> and your favourite pet. We set ourselves the <strong>highest quality standards</strong>.&nbsp;</p>
            </p>
          </div>
          <div class="col-md-3"><a href="#">Have a dog portrait drawn -
             A great gift for dog owners </a></div>
        </div>
      </div>
    </div>
    <div class="section section--center">
      © 2020 AnimalByMy <br>
      <p class="font-tiny">Designed with love.</p>
    </div>
  </div>
</template>

<script>
import paymentList from "./payment-list.vue";
export default {
  components: { paymentList },
};
</script>

<style></style>
