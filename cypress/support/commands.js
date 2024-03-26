// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress"/>
Cypress.Commands.add('checkValidServiceWorker', () => {
    cy.window().then((win) => {
        win.navigator.serviceWorker.getRegistrations().then((registrations) => {
            registrations.forEach((registration) => {
                registration.unregister();
            });
        });
    });
});

Cypress.Commands.add('stubAllCSSRequests', () => {
    cy.intercept('GET', '**/*.css', {
        statusCode: 200,
        body: '/* Mocked CSS Response */',
    }).as('getCss')
});

Cypress.Commands.add('stubAllJSRequests', () => {
    cy.intercept('GET', '**/*.js', {
        statusCode: 200,
        body: '// Mocked JS Response */',
    }).as('getJS')
});

Cypress.Commands.add('stubAllJSONRequests', () => {
    cy.intercept('GET', '**/*.json', {
        statusCode: 200,
        body: { "key": "value" },
    }).as('getJSON')
});
Cypress.Commands.add('stubAllPNGs', () => {
    cy.intercept('GET', 'https://dashboard.core.us.dev.amdocsplatformx.com/static/landingPageWoman.e91ed0d2.png', (req) => {
        req.reply(res => {
            if (res.statusCode === 404) {
                res.send('Image Not Found', 404)
            } else {
                res.continue()
            }
        })
    })
})

Cypress.Commands.add('stubAllPNG1s', () => {
    cy.intercept('GET', 'https://dashboard.core.us.dev.amdocsplatformx.com/static/getStarted.8cbee8ef.png', (req) => {
        req.reply(res => {
            if (res.statusCode === 404) {
                res.send('Image Not Found', 404)
            } else {
                res.continue()
            }
        })
    })
})
