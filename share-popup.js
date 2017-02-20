/**
 * SharePopUp - v1.1
 *
 * Author: Martín Rafael González
 * devtin.io
 *
 * @license
 * MIT
 * https://github.com/devtin/share-popup
 */

var SharePopUp = { version : '1.1' };

SharePopUp._rawurlencode = function(str) {
    str = (str + '')
        .toString();

    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
};

SharePopUp._isTouchable = function() {
    return ('ontouchstart' in window);
};

SharePopUp.popup = function(url,w,h,blank) {
    w = w||640;
    h = h||400;

    var left = Math.round((screen.width-(w))/2),
        top = Math.round((screen.height-(h))/2);

    window.open(url,'share',blank ? undefined : 'width='+w+',height='+h+',toolbars=no,left='+left+',top='+top);
};

SharePopUp.twitter = function(text,width,height,blank) {
    this.popup('http://twitter.com/intent/tweet?text='+this._rawurlencode(text),width,height,blank);
};

SharePopUp.facebook = function(url,width,height,blank) {
    this.popup('https://www.facebook.com/sharer.php?u='+this._rawurlencode(url),width,height,blank);
};

SharePopUp.pinterest = function(url,imageUrl,description,width,height,blank) {
    description = description||'';
    this.popup('https://pinterest.com/pin/create/button/?url='+this._rawurlencode(url)+'&media='+this._rawurlencode(imageUrl)+'&description='+this._rawurlencode(description),width,height,blank);
};

SharePopUp.linkedIn = function(url,title,summary,source,width,height,blank) {
    summary = summary||'';
    source = source||'';
    this.popup('https://www.linkedin.com/shareArticle?mini=true&url='+this._rawurlencode(url)+'&title='+this._rawurlencode(title)+'&summary='+this._rawurlencode(summary)+'&source='+this._rawurlencode(source),width,height,blank);
};

SharePopUp.googlePlus = function(url,width,height,blank) {
    this.popup('https://plus.google.com/share?url='+this._rawurlencode(url),width,height,blank);
};

SharePopUp.email = function(to,cc,bcc,subject,body,width,height,blank) {
    var opts = {
        cc      : cc||'',
        bcc     : bcc||'',
        subject : subject||'',
        body    : body||''
    };

    var eopts = [];

    for (var i in opts) {
        if (!opts.hasOwnProperty(i) || !opts[i]) continue;
        eopts.push(i+'='+this._rawurlencode(opts[i]));
    }

    var url = 'mailto:'+(to||'')+'?'+eopts.join('&');

    this._isTouchable() ? top.location.href=url : this.popup(url,width,height,blank);
};

SharePopUp.whatsapp = function(text) {
    top.location.href = 'whatsapp://send?text='+this._rawurlencode(text);
};

SharePopUp.sms = function(text,phoneNumber) {
    top.location.href = 'sms:'+(phoneNumber||'')+'&body='+this._rawurlencode(text);
};