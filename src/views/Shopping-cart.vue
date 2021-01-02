<template>
  <div>
    <div class="section section--center">
      <p class="text-lg">🛒 shopping cart</p>
      <table class="cart-table">
        <tr class="cart-table-head">
          <th></th>
          <th class="text-left">
            product
          </th>
          <th>
            price
          </th>
          <th>
            quantity
          </th>
          <th>
            total
          </th>
        </tr>
        <tr
          v-for="(product, idx) in products"
          :key="idx"
        >
          <td class="cart-table-cancel-row">X</td>
          <td class="cart-table-product-cell">
            <div class="d-flex">
              <img
                :src="product.image"
                class="cart-table-product-image"
              >
              <div>
                <h6>{{product.name}}</h6>
                <p>{{product.desc}}</p>
                <p>{{product.att}} </p>
              </div>
            </div>

          </td>
          <td>
            ${{product.price}}
          </td>
          <td>
            <span class="quantity-control">-</span>{{product.quantity}}<span class="quantity-control">+</span>
          </td>
          <td>
            ${{product.price * product.quantity}}
          </td>
        </tr>

      </table>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          id: 1,
          image: 'https://cdn.shopify.com/s/files/1/0258/1918/5238/products/sticker-case-laptop-mac-handy-smartphone-haustier-personalisiert_grande.jpg?v=1594301514',
          name: 'product name',
          desc: 'Bitte gib deine Bestellnummer',
          att: 'sss',
          price: 20,
          quantity: 2,
        },
        {
          id: 1,
          image: 'https://cdn.shopify.com/s/files/1/0258/1918/5238/products/sticker-case-laptop-mac-handy-smartphone-haustier-personalisiert_grande.jpg?v=1594301514',
          name: 'product name',
          desc: 'Bitte gib deine Bestellnummer',
          att: 'sss',
          price: 20,
          quantity: 2,
        },
        {
          id: 1,
          image: 'https://cdn.shopify.com/s/files/1/0258/1918/5238/products/sticker-case-laptop-mac-handy-smartphone-haustier-personalisiert_grande.jpg?v=1594301514',
          name: 'product name',
          desc: 'Bitte gib deine Bestellnummer',
          att: 'sss',
          price: 20,
          quantity: 2,
        }
      ]
    }
  }


}
</script>

<style>
</style>