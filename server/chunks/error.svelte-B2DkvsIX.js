import { e as escape_html } from './escaping-CqgfEcN3.js';
import './client-7D2-p5b1.js';
import { g as getContext } from './context-CXhJZien.js';
import './state.svelte-5N6iYCbg.js';
import './utils2-Br0E7FLR.js';
import './utils-DLWGgpsG.js';
import './index-DPQSUItb.js';

function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  });
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-B2DkvsIX.js.map
