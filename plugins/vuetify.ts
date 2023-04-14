import { ThemeDefinition, createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#10141e",
    primary: "#161d2f",
    success: "#3EB75E",
    accent: "#FF7F5C",
    white: "#ffffff",
    greyblue: "#5a698f",
    warning: "#FF8F3C",
    error: "#fc4747",
    cyan: "#42D3D5",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
