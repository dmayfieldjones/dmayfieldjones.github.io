(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_GreatDaneGenomeBrowser_1b3916._.js", {

"[project]/app/GreatDaneGenomeBrowser/Ideogram.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ReactIdeogram)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ideogram$2f$src$2f$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ideogram/src/js/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
function ReactIdeogram(props) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReactIdeogram.useEffect": ()=>{
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ideogram$2f$src$2f$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                ...props,
                dataDir: '/',
                container: '#ideo-container'
            });
        }
    }["ReactIdeogram.useEffect"], [
        props
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 10,
            margin: 10
        },
        id: "ideo-container"
    }, void 0, false, {
        fileName: "[project]/app/GreatDaneGenomeBrowser/Ideogram.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(ReactIdeogram, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ReactIdeogram;
var _c;
__turbopack_refresh__.register(_c, "ReactIdeogram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/GreatDaneGenomeBrowser/MyIdeogram.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MyIdeogram)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$GreatDaneGenomeBrowser$2f$Ideogram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/GreatDaneGenomeBrowser/Ideogram.tsx [app-client] (ecmascript)");
;
;
function MyIdeogram({ selectedGene, setGene, geneCategories }) {
    const annotations = geneCategories.map((r)=>{
        const { type, location, name } = r;
        if (location) {
            const [chr, rest] = location.split(':');
            const [start, stop] = rest.split('-');
            return {
                name,
                type,
                color: name === selectedGene ? 'blue' : '#bf141c',
                chr: chr.replace('chr', ''),
                start: +start.replaceAll(',', ''),
                stop: +stop.replaceAll(',', '')
            };
        } else {
            return undefined;
        }
    }).filter((f)=>!!f);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$GreatDaneGenomeBrowser$2f$Ideogram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        columns: 2,
        organism: "canis-lupus-familiaris",
        rotatable: false,
        chrWidth: 10,
        chrHeight: 500,
        showNonNuclearChromosomes: true,
        orientation: "horizontal",
        annotations: annotations,
        onClickAnnot: (arg)=>{
            const f = geneCategories?.find((f)=>f.name === arg.name)?.type;
            if (f) {
                setGene(arg.name);
            }
        }
    }, void 0, false, {
        fileName: "[project]/app/GreatDaneGenomeBrowser/MyIdeogram.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = MyIdeogram;
var _c;
__turbopack_refresh__.register(_c, "MyIdeogram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_GreatDaneGenomeBrowser_1b3916._.js.map