/* global window, xcomponent: true */
window.MyLightbox = xcomponent.create({

    autoResize: true,

    sandboxContainer: false,

    dimensions: {
        width: '90%',
        height: '50%'
    },

    scrolling: true,

    containerTemplate: xcomponent.containerTemplate,

    // The html tag used to render my component
    tag: 'my-lightbox-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    url: '/lightbox',

    // The properties they can (or must) pass down to my component
    props: {

        onComplete: {
            type: 'function'
        }
    }
});

