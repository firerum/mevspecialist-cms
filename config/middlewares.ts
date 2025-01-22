export default [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            origin: ['https://www.mevspecialistcare.com', 'https://mevspecialistcare.com'],
            headers: ['*'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
