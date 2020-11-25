<template>
  <div>
    <div class="section section--center">
      <h1>Customer Feedbacks</h1>
    </div>

    <div class="section section--center">
      <div class="w-md-50 centerize">
        <h2>👏What our customers say👏</h2>
        <p>
          In the meantime we have already been able to draw over 2000 pets for
          you. To bring you joy with our little works of art is a matter of the
          heart for us. We are all the more pleased about the many wonderful
          messages we receive from you via Instagram. A small excerpt can be
          found here.
          <br />
          <b>Thank you for your words ❤</b>
        </p>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="card-columns w-md-75 centerize">
          <feedback-card
            v-for="(feedback, idx) in feedbacks"
            :key="idx"
            :img="feedback.img"
            :name="feedback.name"
            :description="feedback.description"
            :rate="feedback.rate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feedbackCard from "@/components/feedback-card";

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
