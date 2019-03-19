import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.indigo,
    secondary: colors.red.darken4,
    accent: colors.shades.black,
    error: colors.red.accent3,
    info: colors.blue.accent3,
    success: colors.green,
    warning: colors.orange.darken1,
  },
})
