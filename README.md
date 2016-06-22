# specialtemplate

A blank(ish) template for The Denver Post's special reports layout.

### Options

#### Options in function.js

You can tweak three settings directly in functions.js:

```
var showAds = true; //show slide-up leaderboards at bottom
var slideAds = 3; //number of times to slide up a leaderboard
var titleFade = true; //whether to fade the Denver Post logo in the top-bar to show the "DP" and a text title
```

There are a lot of options, whether remnants from eariler projects, or just combinations of things designed to work indepentendly or together, when you base a project on this template.

#### scrollDownTo(div,offset)

Use this for internal links to scroll smoothly around the page and offset the top a bit to prevent the top of the target section/div from being hidden behind the top-bar. Example:

```
<a href="javascript:scrollDownTo('#targetdivid',45);">Link Text</a>
```

The offset (optional) is in pixels; it defaults to 60 pixels below the top of the viewport.

#### revealSocial(type,link,title,image,desc,twvia,twrel)

Used to build a popup share window for different social networks. How your HTML should look:

```
<a href="javascript:void(0);" onclick="revealSocial('twitter','http://dpo.st/sportsyear14','Special Projects Template: Special Projects Template description','','','denverpost','nickijhabvala');">Tweet this</a>
<a href="javascript:void(0);" onclick="revealSocial('facebook','http://dpo.st/shortlink','Project title','url://of.img','Project description');">Share on Facebook</a>
<a href="javascript:void(0);" onclick="revealSocial('gplus','http://dpo.st/sportsyear14');">Share on Google+</a>
```

Each network works a little differently in terms of what it uses to build the intent request. Explanation of config variables:

* **_type_**
  * 'twitter','facebook', or 'gplus' currently supported.
  * Required
* **_link_**
  * The link to share on social -- preferably a custom bit.ly (dpo.st) shortlink.
  * Required
* **_title_**
  * The title to share -- this is the tweet text for Twitter, or article title for Facebook.
  * Optional
  * Not used by gplus intent
* **_image_**
  * Image to share with Facebook post -- usually the same as the share image for Twitter Card and OpenGraph meta tags.
  * Optional
  * Not used by twitter or gplus intents
* **_desc_**
  * Description to share on Facebook -- usually the same as the og:description.
  * Optional
  * Not used by twitter or gplus intents
* **_twvia_**
  * Twitter account to add in tweet body -- no '@' required.
  * Usually `denverpost` or another institutional account
  * Appended to end in format `[tweet text] [link] via [twvia]`
  * Optional
  * Not used by facebook or gplus intents
* **_twvia_**
  * Twitter account to recommend after tweet sent -- no '@' required.
  * Usually the author, photographer or other principal in the project.
  * Usually
  * Optional
  * Not used by facebook or gplus intents

##### Notes:

* Be careful to use the empty single quotes (`''`) for items you do not use for that intent. The order must be respected.

#### Photos

Photos can be inset left or right, centered int he column, break out into the full document width, fill the width of the viewport, or double up across the entire viewport with several different classes.

##### centerphoto

`class="centerphoto"` removes padding so image fills entire parent column.

##### solo

`class="solo"` forces column to full document width (large-12) and removes padding. Use in a standalone row

##### Twin Photo

Use outside of any parent row or columns for full-screen width. Captions just like anything else. Markup is relatively simple:

```
<div class="photorow twinphoto">
	<div class="photoleft">
		<img src="http://placehold.it/1200x800&text=Left+Photo" alt="alt" />
		<p class="caption"><span class="captionhed">Caption hed</span> Health goth cardigan fingerstache tattooed, put a bird on it lumbersexual butcher meditation trust fund irony Wes Anderson.</p>
	</div>
	<div class="photoright">
		<img src="http://placehold.it/1200x800&text=Right+Photo" alt="alt" />
		<p class="caption">Brunch Odd Future farm-to-table, Tumblr Austin art party mustache jean shorts Pinterest asymmetrical. Kogi four dollar toast keffiyeh, polaroid meh bicycle rights readymade authentic chia.</p>
	</div>
	<div class="clear"></div>
</div>
```

##### Inset photos

Use the same class as video insets described below, and go be left or right. Put inside a parent `row` and `columns`. Example markup:

```
<div class="large-6 medium-6 small-12 columns inset-video-right">
	<img src="http://placehold.it/1200x600&text=Side+Photo" alt="alt" />
	<p class="caption">Side photo caption.</p>
</div>
```

#### Inset boxes

Float left or right depending on the class associated, have a light grey background and sans-serif text by default. Use for infobox duties. Best if the content is only a few column-inches.

```
<section class="large-6 medium-6 small-12 columns inset left">
	<h3 class="subheading">Left sidebar hed</h3>
	<p>Lorem ipsum Occaecat laborum sunt culpa ullamco eu ea magna cillum dolore laborum anim dolore eu occaecat do deserunt in eiusmod id Excepteur incididunt id id laboris in aute do anim.</p>
	<p>Lorem ipsum Occaecat laborum sunt culpa ullamco eu ea magna cillum dolore laborum anim dolore eu occaecat do deserunt in eiusmod id Excepteur incididunt id id laboris in aute do anim.</p>
	<p>Lorem ipsum Occaecat laborum sunt culpa ullamco eu ea magna cillum dolore laborum anim dolore eu occaecat do deserunt in eiusmod id Excepteur incididunt id id laboris in aute do anim.</p>
</section>
```

#### Expanding inset boxes

These have a component that floats left or right, just like above, but which acts as a preview and expands to a larger inset (full column width) and which can be linked to directly. Markup:

```
<section class="large-6 medium-6 small-12 columns inset right" id="insetlink">
	<h3 class="subheading">Related: [related head]</h3>
	<p>Bespoke cliche Williamsburg skateboard bicycle rights, normcore crucifix hoodie banh mi lomo viral. Carles bicycle rights before they sold out fingerstache cred, cornhole lomo umami beard meh...</p>
	<p><a class="expandme" href="javascript:toggleSidebar('#inset','#insetlink');">Expand this story</a></p>
</section>
<section class="row inset large-inset hide" id="inset">
	<div class="large-10 large-centered medium-11 medium-centered small-12 columns">
		<h3 class="subheading">[releated head]</h3>
		<p class="lead">Bespoke cliche Williamsburg skateboard bicycle rights, normcore crucifix hoodie banh mi lomo viral. Carles bicycle rights before they sold out fingerstache cred, cornhole lomo umami beard meh.</p>
		<p>Farm-to-table paleo Tumblr, normcore umami American Apparel raw denim chambray occupy health goth. You probably haven't heard of them Banksy Godard YOLO, lomo readymade health goth tattooed. Shoreditch Pinterest Wes Anderson, post-ironic wayfarers 8-bit mustache seitan stumptown. Banjo roof party Intelligentsia tote bag Helvetica keffiyeh, four dollar toast cold-pressed semiotics meggings PBR&B Schlitz.</p>
		<p>Vinyl wayfarers slow-carb letterpress, stumptown cold-pressed cronut jean shorts ennui gluten-free health goth occupy bespoke. Salvia actually brunch tousled, meditation Shoreditch YOLO McSweeney's hoodie freegan scenester retro sustainable. Scenester Truffaut selfies direct trade.</p>
		<p>Wayfarers High Life tousled, leggings mustache mlkshk Williamsburg aesthetic fanny pack selfies you probably haven't heard of them whatever VHS Marfa roof party. Actually quinoa slow-carb health goth, beard Godard synth ugh Schlitz. Biodiesel before they sold out butcher, quinoa literally readymade stumptown wayfarers.</p>
		<p>Gluten-free migas kitsch Bushwick banjo organic, post-ironic lo-fi meggings pickled roof party Carles stumptown scenester. Neutra small batch quinoa, Tumblr cold-pressed narwhal pour-over synth next level plaid crucifix lumbersexual Thundercats. Pug pop-up cred hashtag DIY. Gluten-free post-ironic Kickstarter selfies.</p>
		<p><a class="hideme" href="javascript:toggleSidebar('#insetlink','#inset');">Collapse this story</a></p>
	</div>
</section>
```

Note that the teaser inset and the expanded version need to have the same ID, with "link" added to the teasers (i.e.: #teaserlink, #teaser)

#### Slideshows

A gallery can be built from images and loaded in-line or lazy loaded and then built with slick.js.

In the default implementation, all galleries are instantiated one-by-one on the first scroll, or on page-load if a hash is detected in the URL (i.e.: link directly to a sub-section).

The parent div just needs to have a unique ID and the `centergallery` class.

Your HTML needs to look like this:

```
<div class="centergallery" id="parentgallery">
	<div class="large-10 columns">
		<img src="http://placehold.it/1200x800&text=Gallery+Photo+1" alt="Synth mumblecore swag vinyl viral" />
		<p class="caption">Synth mumblecore swag vinyl viral. Craft beer hella squid keffiyeh, post-ironic freegan selvage 8-bit mixtape 3 wolf moon narwhal Wes Anderson viral taxidermy.</p>
	</div>
	<div class="large-10 columns">
		<img src="./img/loading.gif" data-src="http://placehold.it/1200x800&text=Gallery+Photo+2" alt="Gluten-free kale chips irony" />
		<p class="caption"><span class="captionhed">freegan forage</span> Gluten-free kale chips irony, pour-over raw denim chillwave meh swag gentrify vegan. Listicle Vice sriracha you probably haven't heard of them fixie.</p>
	</div>
	<!-- add chunks as above for each photo -->
</div>
```

##### Notes:

* Captions in Galleries are optional. the `captionhead` class can be used for a one or two word heading -- the are bold and all-caps.
* For best performance, the first image should be loaded directly in the `src` attribute. For subsequent pictures, leave the `src="./img/loading.gif"` and instead put the image URL into the `data-src` attribute. They will be lazy-loaded after the rest of the page before slick is called.
* Wrap the gallery in parent `row` and `columns` divs to fit them to the content width, or let them stand alone to make them bigger. The size of the photo is determined by the `columns` size in each individual photo block -- which should all be the same.

#### Videos

Videos can be either YouTube embeds or similar, HTML5 videos or Ooyala videos. The basic HTML format is the same:

```
<div class="large-12 large-centered medium-12 medium-centered small-12 columns centervideo">
	<div class="vid-embed-wrap">
		<div class="vid-height-space"></div>
		<div class="vid-embed" id="video1" onclick="playerCreator('video1', 'NlM3d3cTognXIao7-hQCvWj7bdsKxnj7');" style="background-image:url('http://placehold.it/1200x800&text=Video+Preview');"> <!-- Doc (main) -->
			<div class="vid-embed-play">
				<div class="playicon"></div>
				<div class="playtext"></div>
			</div>
		</div>
		<div class="clear"></div>
	</div>
	<p class="caption">This caption is exactly like a photo caption -- can even have a captionhed span.</p>
</div>
```

This example has a static image with an animated Play icon on it, which asynchronously loads an Ooyala player when clicked. The `vid-embed` div is the one that will contain the player when loaded, and its ID must match the ID of the playerCreator function. The second argument for playerCreator is the video ID.

Embedding something from YouTube or other video sites is somewhat simpler. Just be sure to add the `vid-embed` class to the `iframe` in the embed code and drop it after the `vid-height-space` div:

```
 <div class="large-7 columns inset-video-left" id="foyeclip">
	 <div class="vid-embed-wrap">
		<div class="vid-height-space"></div>
		<iframe width="100%" height="100%" src="http://www.youtube.com/embed/ydx6F7mzKnA?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen class="vid-embed"></iframe>
		<div class="clear"></div>
	</div>
	<p class="caption"><span class="captionhed">Feb. 3 </span>Randy Foye stuns the Clippers.</p>
</div>
```

Note that this uses the class `inset-video-left` which will float to the left and expand outside the content block on large screens, with its right edge in the center of the column. `inset-video-right` does the smae thing, opposite-hand.

##### Notes:

* The `centervideo` class reduces padding and centers this video in its parent `row` and/or `columns` divs

#### playerCreator(embedId, playerId, divId) and playerScroller(embedId, playerId, divId)

These two functions work in tandem.

##### playerCreator(embedId, playerId, divId)

As described above, this creates a video element and starts the video. PAssing the third (optional) argument will cause the element with that ID to be highlighted. Use it with an anchor tag inside the content to highlight the related text wrapped in an anchor element with the `startVideo` class.

##### playerScroller(embedId, playerId, divId)

Add an anchor element with the class `startVideo` to some text that is related to nearby video. Make the `href` this function and pass it the ID of the the `vid-embed` div that holds the video, the video ID and itself (`this`), it will make a link with a video icon. Clicking the link will scroll to the related player and start the video, as well as highlighting the related text.

Example HTML:

```
<a href="javascript:void(0);" class="startVideo" id="hilite1" onclick="playerScroller('video3', 'Q5b3JkcTpaLJDDENZwHn_zMBA1nyDsma', this);">Most come for evaluation</a>
```

See it in operation on the project [Breakdown: Mental health in Colorado](http://dpo.st/breakdown)

##### Notes

* The class `omnitrig` triggers a new pageview to be generated in Omniture when this section is scrolled into the viewport the first time. It is totally optional; omitting it will cause the URL in the address bar to change )and the page title if `data-omni-title` is set).
* The title in `data-omni-title` is prepended to the page title in the format "New Section Title - Project Base Title" -- with the base title being whatever the initial value of `<title>` is in the HTML.

#### Tooltips

You can add a pop-up tooltip to any text by wrapping it in a span like so:

```
<span data-tooltip aria-haspopup="true" class="has-tip tip-top radius" title="This is the text that pops up when you mouse over it.">Text to hover over</span>
```

Tooltips are on-hover on the desktop, or tap-to-open on mobile/touch devices.

#### Cube Ads

Sets of two cube ads can be used between major sections with markup like this:

```
<div class="row">
	<div class="large-10 large-centered medium-12 medium-centered small-12 columns">
		<div class="row adcubes">
			<div class="large-6 medium-6 small-12 columns">
				<div id="div_Cube5" class="adcube-wrap">
					<script type='text/javascript'>
					googletag.defineSlot('/8013/denverpost.com/Lifestyle/Health/Mental-health', [300,250], 'div_Cube5').addService(googletag.pubads());
					googletag.pubads().enableSyncRendering();
					googletag.enableServices();
					googletag.display('div_Cube5');
					</script>
				</div>
			</div>
			<div class="large-6 medium-6 hide-for-small columns">
				<div id="div_Cube6" class="adcube-wrap">
					<script type='text/javascript'>
					if ( window.innerWidth >= 660 ) {
						googletag.defineSlot('/8013/denverpost.com/Lifestyle/Health/Mental-health', [300,250], 'div_Cube6').addService(googletag.pubads());
						googletag.pubads().enableSyncRendering();
						googletag.enableServices();
						googletag.display('div_Cube6');
					}
					</script>
				</div>
			</div>
		</div>
	</div>
</div>
```

The second ad will be hidden on small screens. Note that every cube must have a unique div ID, and that div ID must be placed in two spots in the JavaScript ad tag, as with `div_Cube5` and `div_Cube6` in the example.

#### Image preparation

At this time we don't have a lot of fancy versions of images for different devices, etc. We can get good quality on nearly all devices by optimizing images in Photoshop:

1. Open "Image Size,"" set Width to 1100px and Resolution to 72dpi
2. Open "Save for Web & Devices," and choose "JPG High" and set quality to 70.
3. Don't use spaces, symbols or capital letters in filenames when saving.

#### Text preparation

For the best presentation possible, we want gorgeous curly quotes. Easiest way I have found to get them everywhere takes a few steps:

1. Paste raw text into empty Word document.
2. Find and Replace twice: replace " with " and ' with ' (replacing all single and double quotes with themselves force Word to calculate which direction each should curl)
3. Copy result and paste into Sublime Text and then Select All
4. Under "Tools," select "Command Pallete" and type "enc"
5. The first result should be "HTML: Encode special characters" -- hit Enter
6. Do a Find/Replace for `&ndash;` -> `&mdash;`
7. Search for any occurrences of `&quot;` and manually change them to right or left double quotes.
8. Put your cursor at the very beginning of a paragraph. Hold shift and hit the Left Arrow key.
9. Copy the highlighted line break
10. Open Find/Replace and past it into the Find box.
11. In the Replace box, type `</p>`, hit Paste, and then type `<p>`
12. Hit replace all and you should have paragraph tags on every graf (you'll have to pu in the very first `<p>` and very last `</p>` by hand)
13. Scroll through to make sure no paragraphs are broken into more than one by accident, and change the paragraph tags to `<hs class="subheading">...</h3>` if there are any subheads in the text
14. Violà!

### Checklist

When basing a projct on this template, you'll need to go through and set up the following things:

* Page title
* Meta description, keywords, etc.
* Social meta features (Twitter cards, OpenGraph for Facebook, etc.)
* Omniture (first thing inside `body`)
* Chartbeat (last thing inside `body`)
* The content (duh)
* Sharing buttons (in the top-bar and the footer)
* Check copyright year in footer
* All images working?
* Open JS console and look for errors
* Update Credits!

#### Critical changes made easy

Do a find/replace for these particular items to replace the most crucial elements quickly:

* {{Special Project Template title}} -- the title for `<title>` tag, meta and OG tags, etc.
* {{Special Project Template description}} -- the description for meta and OG tags, etc.
* {{Special Project Template keywords}} -- the description for meta and OG tags, etc.
* {{project-directory}} -- the name of the directory the project will live in on Extras
* {{FB-image-filename}} -- name of the image to use for the og:image tag and sharing options
* {{author-twitter}} -- the reporter's twitter handle (without '@')
* {{PROJECT-SECTION}} -- Overall project name, for Analytics tags
* {{PROJECT-NAME}} -- Specific page name, for Analytics tags
* {{Project Short Title}} -- the 2-3 word title used in the top-bar
* {{Tweet Text}} -- pre-filled text for Twitter sharing

### Codebase resources
* [ZURB Foundation](http://foundation.zurb.com)
# [unveil.js](https://github.com/schneidan/unveil) (a slightly-tweaked fork)
* [slick - the last carousel you'll ever need](http://kenwheeler.github.io/slick/)
* [Mozilla Developer Network for CSS3, JS, HTML5 stuffs](https://developer.mozilla.org/‎)

### Testing note

If you are using Windows and do not have a web server such as WAMP, mongoose.exe is provided here. Simply run the file from the directory to start a simple web server and open the default page (index.html) in your default browser.