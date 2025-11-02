import { e as escape_html } from './escaping-CqgfEcN3.js';
import './utils2-Br0E7FLR.js';
import './utils-DLWGgpsG.js';
import './state.svelte-5N6iYCbg.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    $$renderer2.push(`<h1>Login/Register</h1> <form method="post" action="?/login"><label>Username <input name="username" class="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/></label> <label>Password <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/></label> <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Login</button> <button formaction="?/register" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Register</button></form> <p style="color: red">${escape_html(form?.message ?? "")}</p>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Dbbimqfs.js.map
