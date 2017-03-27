xcomponentapplepay
===========

Demo of issue [Apple Pay not working with xcomponent lightbox](https://github.com/krakenjs/xcomponent/issues/60)

### Installation

See [krakenjs](http://krakenjs.com/#getting-started)

```bash
npm install
bower install
grunt build
npm start
```

### Apple Pay
See [Apple Pay minimum requirements](https://stripe.com/docs/apple-pay/web)


When rendering the form as a lightbox as below, it will throw error on the Safari console.

```javascript
MyLightbox.renderTo(window.parent, {

    onComplete: function(result) {
        console.log('MyLightbox - The component called back with a result:', result);
        window.xchild.props.onComplete(result);
    }

}, window.xchild.props.element, window.xchild.props.context);
```

```bash
[Error] Trying to call an ApplePaySession API from a document with an insecure parent frame.
	checkAvailability (v2:2:18857)
	Global Code (lightbox:119)
[Error] InvalidAccessError (DOM Exception 15): The object does not support the operation or argument.
	canMakePayments (v2:2:18857)
	checkAvailability (v2:2:18857)
	Global Code (lightbox:119)
```


However, when rendering the form as an inline iframe as below, it works well.

```javascript
MyLightbox.render({

    onComplete: function(result) {
        console.log('MyLightbox - The component called back with a result:', result);
        window.xchild.props.onComplete(result);
    }

}, '#my_form');
```

Please update the code in button.dust to see different result for inline iframe and lightbox.