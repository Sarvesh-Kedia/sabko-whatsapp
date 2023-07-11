const whatsappKaro = "whatsapp-karo-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/assets/logo.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(whatsappKaro).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})