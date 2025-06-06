const CACHE_NAME = 'baby-food-tracker-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './icons.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap'
];

// Installation du Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache ouvert');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activation du Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Suppression de l\'ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interception des requêtes
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Retourner la ressource du cache si elle existe
                if (response) {
                    return response;
                }
                
                // Sinon, essayer de la récupérer du réseau
                return fetch(event.request).then(response => {
                    // Vérifier si la réponse est valide
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Cloner la réponse pour la mettre en cache
                    const responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                });
            })
            .catch(() => {
                // En cas d'échec, retourner une page hors ligne si c'est une navigation
                if (event.request.destination === 'document') {
                    return caches.match('./index.html');
                }
            })
    );
}); 