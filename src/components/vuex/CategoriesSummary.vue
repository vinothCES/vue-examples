<template>
  <v-container>
    <v-layout row wrap>
      <h2>Categories</h2>
      <br><br>
    </v-layout>
    <v-flex xs12>
      The number of categories is: {{totalCategories}}
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    totalCategories: function() {
      return this.$store.getters.countCategories;
    }
  }
}
</script>
