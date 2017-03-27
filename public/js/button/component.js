
/* global window, xcomponent: true  */

window.MyButton = xcomponent.create({

    // The html tag used to render my component
    tag: 'my-button-component',

    scrolling: false,

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    url: '/button',

    

    // The properties they can (or must) pass down to my component
    props: {

        onComplete: {
            type: 'function'
        }
    }
});

