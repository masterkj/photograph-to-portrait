<template>
  <div>
    <div class="container">
      <carousel
        :perPageCustom="[
          [1, 2],
          [575, 1],
          [780, 2],
          [1024,3]
        ]"
        autoplay
        autoplayHoverPause
      >
        <!-- [768, 3],
        [1024, 4], -->
        <slide v-for="(feedback, idx) in feedbacks" :key="idx">
          <feedback-card
            class="slide-element"
            :img="feedback.img"
            :name="feedback.name"
            :description="feedback.description"
            :rate="feedback.rate"
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import feedbackCard from "./feedback-card";
import FeedbackCard from "./feedback-card.vue";

export default {
  components: {
    feedbackCard,
  },
  data() {
    return {
      feedbacks: [
        {
          img: "https://images.loox.io/uploads/2020/6/18/E1btH0jV6d.jpg",
          name: "Annabelle G",
          description:
            "Lorem ipsum, dolor sit amet consectetur \
            adipisicing elit. Fuga, aspernatur, inventore repellendus \
             cumque veritatis ab at praesentium ex in nisi sit perspiciatis \
              delectus libero? Recusandae dolorum repudiandae eaque aut quos! ",
          rate: 5,
        },
        {
          img: "https://images.loox.io/uploads/2020/6/18/NkYVIoE6O.jpg",
          name: "Annabelle G",
          description:
            "Lorem ipsum, dolor sit amet consectetur \
            adipisicing elit. Fuga, aspernatur, inventore repellendus \
             cumque veritatis ab at praesentium ex in nisi sit perspiciatis \
              delectus libero? Recusandae dolorum repudiandae eaque aut quos! ",
          rate: 5,
        },
        {
          img: "https://images.loox.io/uploads/2020/6/18/NkYVIoE6O.jpg",
          name: "Annabelle G",
          description:
            "Lorem ipsum, dolor sit amet consectetur \
            adipisicing elit. Fuga, aspernatur, inventore repellendus \
             cumque veritatis ab at praesentium ex in nisi sit perspiciatis \
              delectus libero? Recusandae dolorum repudiandae eaque aut quos! ",
          rate: 5,
        },
        {
          img: "https://images.loox.io/uploads/2020/6/18/NkYVIoE6O.jpg",
          name: "Annabelle G",
          description:
            "Lorem ipsum, dolor sit amet consectetur \
            adipisicing elit. Fuga, aspernatur, inventore repellendus \
             cumque veritatis ab at praesentium ex in nisi sit perspiciatis \
              delectus libero? Recusandae dolorum repudiandae eaque aut quos! ",
          rate: 5,
        },
        {
          img: "https://images.loox.io/uploads/2020/6/18/E1btH0jV6d.jpg",
          name: "Annabelle G",
          description:
            "Lorem ipsum, dolor sit amet consectetur \
            adipisicing elit. Fuga, aspernatur, inventore repellendus \
             cumque veritatis ab at praesentium ex in nisi sit perspiciatis \
              delectus libero? Recusandae dolorum repudiandae eaque aut quos! ",
          rate: 5,
        },
      ],
    };
  },
};
</script>

<style></style>
