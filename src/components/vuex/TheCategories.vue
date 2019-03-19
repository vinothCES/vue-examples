<template>
  <v-container>
    <v-layout row wrap>
      <h2>Categories</h2>
      <br><br>
      <v-flex xs12>
        <form @submit.prevent="addCategory">
          <v-text-field
              label="Enter category name"
              solo
              v-model="newCategory">
          </v-text-field>
        </form>
      </v-flex>

      <v-flex xs12>
        <v-card flat v-for="(item, index) in getAllCategories" :key="index" class="ma-1">
          <v-card-title>
            {{item.name}}
            <v-spacer></v-spacer>
            <v-btn small flat color="secondary" dark @click="removeCategory(index)">Delete</v-btn>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      newCategory: '',
    };
  },
  computed: {
    ...mapGetters([
      'getAllCategories'
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_CATEGORY'
    ]),
    ...mapActions([
      'initCategories',
      'remove'
    ]),
    addCategory: function() {
      var obj = {id: (this.$store.state.categories.length + 1), name: this.newCategory};
      this.ADD_CATEGORY(obj);
      this.newCategory = '';
    },
    removeCategory: function(index) {
      this.remove(index);
    }
  }
}
</script>
