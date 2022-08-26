/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/subweb/js/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/subweb/js/workbox-v4.3.1"});

importScripts(
  "/subweb/js/precache-manifest.8046bb9e233a36cbf1319033413fa882.js"
);

workbox.core.setCacheNameDetails({prefix: "sub-web"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/subweb/"), {
  
  blacklist: [/\/api\//],
});
