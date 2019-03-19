<template>
  <v-app>
    <ces-toolbar></ces-toolbar>

    <v-content>
      <v-layout row wrap>
        <v-flex xs12 md9>
          <v-container>
            <v-sheet color="grey lighten-3">
              <the-categories></the-categories>
            </v-sheet>
          </v-container>
        </v-flex>
        <v-flex xs12 md3>
          <v-container>
            <v-sheet color="grey lighten-3">
              <categories-summary></categories-summary>
            </v-sheet>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import CesToolbar from '@/components/core/CesToolbar';
import TheCategories from '@/components/vuex/TheCategories';
import CategoriesSummary from '@/components/vuex/CategoriesSummary';

export default {
  name: 'App',
  components: {
    CesToolbar,
    TheCategories,
    CategoriesSummary,
  },
  data () {
    return {
      //
    };
  },
}
</script>
