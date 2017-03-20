
/* global window, xcomponent: true  */

window.MyButton = xcomponent.create({

    // The html tag used to render my component
    tag: 'my-button-component',

    contexts: {
        iframe: true,
        lightbox: true,
        popup: true
    },
    scrolling: false,

    context: 'iframe',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    url: '/button',

    // The size of the component on their page
    dimensions: {
        width: 350,
        height: 450
    },

    // The properties they can (or must) pass down to my component
    props: {

        onComplete: {
            type: 'function'
        }
    }
});

