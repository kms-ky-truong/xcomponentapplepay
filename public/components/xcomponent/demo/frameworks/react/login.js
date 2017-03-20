
window.MyLoginComponent = xcomponent.create({

    // The html tag used to render my component

    tag: 'my-login-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page

    url: './login.htm',

    // The size of the component on their page

    dimensions: {
        width: 250,
        height: 150
    },

    remoteRenderDomain: /.*/,

    // The properties they can (or must) pass down to my component

    props: {

        prefilledEmail: {
            type: 'string',
            required: false
        },

        onLogin: {
            type: 'function'
        }
    }
});