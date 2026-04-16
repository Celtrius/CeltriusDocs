import {
  Fragment,
  computed,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderList,
  toDisplayString
} from "./chunk-2NCXJYS6.js";

// node_modules/.pnpm/@miletorix+vitepress-image-group@1.1.5_vue@3.5.32/node_modules/@miletorix/vitepress-image-group/dist/image-group.es.js
var w = {
  key: 0,
  class: "image-group-images icon-group"
};
var C = ["src", "alt"];
var z = {
  key: 1,
  class: "image-group-images"
};
var I = ["src", "alt"];
var b = {
  key: 2,
  class: "image-group-caption"
};
var x = defineComponent({
  __name: "ImageGroup",
  props: {
    sources: {},
    type: {},
    width: {},
    alt: {},
    caption: {}
  },
  setup(a) {
    const e = a, t = computed(() => {
      if (e.type && e.type !== "auto") return e.type;
      const r = e.sources.length;
      return r === 1 ? "big" : r === 2 ? "double" : "icon";
    });
    function l(r) {
      return r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const s = computed(() => {
      const r = e.caption || e.alt || `ImageGroup - ${t.value}`;
      return l(r);
    }), d = computed(
      () => t.value === "manual" ? "image-preview-manual" : `image-preview-${t.value}`
    ), v = computed(() => `image-preview-div-for-${t.value}`), y = computed(() => t.value === "manual" && e.width ? { width: e.width, height: "auto" } : {});
    return (r, S) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(v.value)
    }, [
      t.value === "icon" ? (openBlock(), createElementBlock("div", w, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.sources, (i, u) => (openBlock(), createElementBlock("img", {
          key: u,
          src: i,
          alt: s.value,
          class: "image-preview-icon",
          loading: "lazy"
        }, null, 8, C))), 128))
      ])) : (openBlock(), createElementBlock("div", z, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.sources, (i, u) => (openBlock(), createElementBlock("img", {
          key: u,
          src: i,
          alt: s.value,
          class: normalizeClass(d.value),
          style: normalizeStyle(y.value),
          loading: "lazy"
        }, null, 14, I))), 128))
      ])),
      a.caption ? (openBlock(), createElementBlock("p", b, toDisplayString(a.caption), 1)) : createCommentVNode("", true)
    ], 2));
  }
});
var G = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [l, s] of e)
    t[l] = s;
  return t;
};
var B = G(x, [["__scopeId", "data-v-6505caf9"]]);
export {
  B as ImageGroup
};
//# sourceMappingURL=@miletorix_vitepress-image-group.js.map
