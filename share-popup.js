/**
 * @license
 * MIT
 * https://github.com/devtin/share-popup
 */

var SharePopUp = {};

SharePopUp.rawurlencode = function(str) {
    str = (str + '')
        .toString();

    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
};

SharePopUp.popup = function(url,w,h,blank) {
    w = w||640;
    h = h||400;

    var left = Math.round((screen.width-(w))/2),
        top = Math.round((screen.height-(h))/2);

    window.open(url,'share',blank ? null : 'width='+w+',height='+h+',toolbars=no,left='+left+',top='+top);
};

SharePopUp.twitter = function(text,width,height,blank) {
    this.popup('http://twitter.com/intent/tweet?text='+this.rawurlencode(text),width,height,blank);
};

SharePopUp.facebook = function(url,width,height,blank) {
    this.popup('https://www.facebook.com/sharer.php?u='+this.rawurlencode(url),width,height,blank);
};

SharePopUp.pinterest = function(url,imageUrl,description,width,height,blank) {
    description = description||'';
    this.popup('https://pinterest.com/pin/create/button/?url='+this.rawurlencode(url)+'&media='+this.rawurlencode(imageUrl)+'&description='+this.rawurlencode(description),width,height,blank);
};

SharePopUp.linkedIn = function(url,title,summary,source,width,height,blank) {
    summary = summary||'';
    source = source||'';
    this.popup('https://www.linkedin.com/shareArticle?mini=true&url='+this.rawurlencode(url)+'&title='+this.rawurlencode(title)+'&summary='+this.rawurlencode(summary)+'&source='+this.rawurlencode(source),width,height,blank);
};

SharePopUp.googlePlus = function(url,width,height,blank) {
    this.popup('https://plus.google.com/share?url='+this.rawurlencode(url),width,height,blank);
};

SharePopUp.email = function(to,cc,bcc,subject,body,width,height,blank) {
    to = to||'';
    cc = cc||'';
    bcc = bcc||'';
    subject = subject||'';
    body = body||'';
    this.popup('mailto:'+this.rawurlencode(to)+'?&cc='+this.rawurlencode(cc)+'&bcc='+this.rawurlencode(bcc)+'&subject='+this.rawurlencode(subject)+'&body='+this.rawurlencode(body),width,height,blank);
};