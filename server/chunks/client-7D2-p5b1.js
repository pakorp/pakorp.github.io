import './state.svelte-5N6iYCbg.js';
import './utils2-Br0E7FLR.js';
import './utils-DLWGgpsG.js';
import { w as writable } from './index-DPQSUItb.js';

function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
//# sourceMappingURL=client-7D2-p5b1.js.map
