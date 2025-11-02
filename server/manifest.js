const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.D5g0ijtc.js",app:"_app/immutable/entry/app.BTiFNI3h.js",imports:["_app/immutable/entry/start.D5g0ijtc.js","_app/immutable/chunks/BlOL-Os8.js","_app/immutable/chunks/BS-UehVV.js","_app/immutable/chunks/CP5tR_5M.js","_app/immutable/chunks/BEyCoWCH.js","_app/immutable/entry/app.BTiFNI3h.js","_app/immutable/chunks/C7RcfOMk.js","_app/immutable/chunks/CP5tR_5M.js","_app/immutable/chunks/BS-UehVV.js","_app/immutable/chunks/BEyCoWCH.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DDW3rHR_.js')),
			__memo(() => import('./chunks/1-CdW3XCoZ.js')),
			__memo(() => import('./chunks/2-DzA3HlH0.js')),
			__memo(() => import('./chunks/3-BmOsjS_i.js')),
			__memo(() => import('./chunks/4-DGjCAl8t.js')),
			__memo(() => import('./chunks/5-BiywizZ8.js')),
			__memo(() => import('./chunks/6-QuDTCSvk.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/demo",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/demo/lucia",
				pattern: /^\/demo\/lucia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/demo/lucia/login",
				pattern: /^\/demo\/lucia\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/demo/paraglide",
				pattern: /^\/demo\/paraglide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
