# share-popup.js

A simple JavaScript wrapper for sharing content on different social networks, including: Twitter, Facebook, Pinterest, LinkedIn and Google+. Now also via Whatsapp and SMS.

## Usage

```js
SharePopUp.facebook('http://devtin.io');
```

PS: remember pop-up's are only allowed by most browser during a mouse event.
 
 ```js
 $('a.fb-share').on('click',function() {
    SharePopUp.facebook('http://devtin.io');
 });
 ```
 
## Methods

Most methods share the same last three parameters: width, height and blank. **width** is default to 640px, **height** is default to 400px and **blank** is default to false.
 
The **blank** parameter basically overrides the **width** and **height** and opens the share screen on a new window instead of in a pop-up. 

```js
SharePopUp.twitter ( text [, width , height , blank ] )
SharePopUp.facebook ( url [, width , height , blank ] )
SharePopUp.pinterest ( url , imageUrl , description [, width , height , blank ] )
SharePopUp.linkedIn ( url , tittle , summary , source [, width , height , blank ] )
SharePopUp.googlePlus ( url [, width , height , blank ] )
SharePopUp.email ( to , cc , bcc , subject , body [, width , height , blank ] )


/*
Please note that this function won't perform any validation regarding the device where the app is running or if Whatsapp is installed or not.
 */
SharePopUp.whatsapp ( text )

/*
Please note that this function won't perform any validation regarding the device where the app is running or wether if the device can send SMS's or not.
 */
SharePopUp.sms ( text [, phoneNumber ] )
```

## License
MIT