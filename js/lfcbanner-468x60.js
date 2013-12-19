// check if we're in mobile or not
var bannerHTML = '';
var bannerWidth = 468;
var bannerHeight = 60;
var swffile = 'https://flywebdata.blob.core.windows.net/banner-swf/468x60-main.swf';
var imgfile = 'https://flywebdata.blob.core.windows.net/banner-images/468x60-3.gif';

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// this is mobile, we show image banner
	bannerHTML += '<a href="http://www.lfctvthailand.com"><img src="'+imgfile+'" /></a>';
}else{
	// this is desktop, we show flash banner
	bannerHTML += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+bannerWidth+'" height="'+bannerHeight+'" id="lfctvbanner" align="middle">';
	bannerHTML += '<param name="movie" value="'+swffile+'" />';
	bannerHTML += '<param name="quality" value="high" />';
	bannerHTML += '<param name="bgcolor" value="#ffffff" />';
	bannerHTML += '<param name="play" value="true" />';
	bannerHTML += '<param name="loop" value="true" />';
	bannerHTML += '<param name="wmode" value="gpu" />';
	bannerHTML += '<param name="scale" value="showall" />';
	bannerHTML += '<param name="menu" value="true" />';
	bannerHTML += '<param name="devicefont" value="false" />';
	bannerHTML += '<param name="salign" value="" />';
	bannerHTML += '<param name="allowScriptAccess" value="sameDomain" />';
	bannerHTML += '<!--[if !IE]>-->';
	bannerHTML += '<object type="application/x-shockwave-flash" data="'+swffile+'" width="'+bannerWidth+'" height="'+bannerHeight+'">';
	bannerHTML += '<param name="movie" value="'+swffile+'" />';
	bannerHTML += '<param name="quality" value="high" />';
	bannerHTML += '<param name="bgcolor" value="#ffffff" />';
	bannerHTML += '<param name="play" value="true" />';
	bannerHTML += '<param name="loop" value="true" />';
	bannerHTML += '<param name="wmode" value="gpu" />';
	bannerHTML += '<param name="scale" value="showall" />';
	bannerHTML += '<param name="menu" value="true" />';
	bannerHTML += '<param name="devicefont" value="false" />';
	bannerHTML += '<param name="salign" value="" />';
	bannerHTML += '<param name="allowScriptAccess" value="sameDomain" />';
	bannerHTML += '<!--<![endif]-->';
	bannerHTML += '<a href="http://www.adobe.com/go/getflash">';
	bannerHTML += '<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />';
	bannerHTML += '</a>';
	bannerHTML += '<!--[if !IE]>-->';
	bannerHTML += '</object>';
	bannerHTML += '<!--<![endif]-->';
	bannerHTML += '</object>';
}
document.write(bannerHTML);
