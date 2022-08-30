import { createApp, h } from "vue";
import "./style.css";

let App = {
  props: ["props1", "props2"],
  setup(props, context) {
    return () => [
      h(
        "h1",
        "Title1"
      ),
      h(
        "p",
        "paragraphe 1...."
      ),
      h(
        "p",
        "paragraphe 2...."
      ),
      h(
        "h1",
        "Title2"
      ),
       h(
        "p",
        "paragraphe 3...."
      ),
    ];
  }
};
createApp(App).mount("#app");
