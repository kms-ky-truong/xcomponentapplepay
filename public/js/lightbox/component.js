/* global window, xcomponent: true */
window.MyLightbox = xcomponent.create({

    autoResize: true,

    sandboxContainer: false,

    // The html tag used to render my component
    tag: 'my-lightbox-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    url: 'https://2e2d2a55.ngrok.io/lightbox',

    context: 'lightbox',

    // The size of the component on their page
    dimensions: {
        width: 350,
        height: 450
    },

    remoteRenderDomain: /.*/,

    // The properties they can (or must) pass down to my component
    props: {

        onComplete: {
            type: 'function'
        }
    }
});

