import { i as invalidateSession, d as deleteSessionTokenCookie } from './auth-BrLhzN_F.js';
import { f as fail, r as redirect } from './shared-server-BbTDZD9t.js';
import { e as getRequestEvent } from './utils-DLWGgpsG.js';
import 'postgres';

const load = async () => {
  const user = requireLogin();
  return { user };
};
const actions = {
  logout: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await invalidateSession(event.locals.session.id);
    deleteSessionTokenCookie(event);
    return redirect(302, "/demo/lucia/login");
  }
};
function requireLogin() {
  const { locals } = getRequestEvent();
  if (!locals.user) {
    return redirect(302, "/demo/lucia/login");
  }
  return locals.user;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-VdKn0JwG.js')).default;
const server_id = "src/routes/demo/lucia/+page.server.ts";
const imports = ["_app/immutable/nodes/4.WqHhPp8L.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CP5tR_5M.js","_app/immutable/chunks/BS-UehVV.js","_app/immutable/chunks/BEyCoWCH.js","_app/immutable/chunks/CPt4mp5l.js","_app/immutable/chunks/BlOL-Os8.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-DGjCAl8t.js.map
