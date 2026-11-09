// Resolve a site-relative Celeris asset path ('/shaders/x.wgsl', './logo.png') against
// window.celerisHost.assetBase, so an embedding page can serve Celeris from a sub-folder.
// Anything else (blob:, http:, user-supplied URLs) and the no-host case pass through unchanged.
export function assetUrl(path) {
    const base = window.celerisHost?.assetBase;
    if (!base || typeof path !== 'string' || !/^\.?\//.test(path)) {
        return path;
    }
    return base + path.replace(/^\.?\//, '');
}
