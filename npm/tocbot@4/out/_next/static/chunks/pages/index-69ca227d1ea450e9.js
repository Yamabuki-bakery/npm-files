(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9546:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return p}});var t=a(7294),e=a(4001),l=a(7720),o=JSON.parse('{"y8":"<h1 class=\\"dn\\">\\n<a href=\\"http://tscanlin.github.io/tocbot\\">Tocbot</a>\\n</h1>\\n<p><a class=\\"no-decoration\\" href=\\"https://github.com/tscanlin/tocbot/actions\\" target=\\"_blank\\"><img src=\\"https://github.com/tscanlin/tocbot/actions/workflows/node.js.yml/badge.svg\\" alt=\\"github-actions\\" /></a></p>\\n<p>Tocbot builds a <a href=\\"https://en.wikipedia.org/wiki/Table_of_contents\\">table of contents</a> (TOC) from headings in an HTML document. This is useful for documentation websites or long markdown pages because it makes them easier to navigate. This library was inspired by <a href=\\"http://gregfranko.com/jquery.tocify.js/\\">Tocify</a>, the main difference is that Tocbot uses native DOM methods and avoids the jQuery &amp; jQuery UI dependencies.</p>\\n<h2 id=\\"get-started\\">Get Started</h2>\\n<p>You can use npm to install it or include the script on the page with HTML.</p>\\n<p><a href=\\"https://github.com/tscanlin/tocbot/releases/\\"><strong>Download it here</strong></a></p>\\n<h3 id=\\"include-js\\">Include JS</h3>\\n<p>Install it with npm.</p>\\n<pre><code class=\\"hljs\\">npm install --save tocbot</code></pre><p>OR</p>\\n<p>Include the script at the bottom of the page before the closing body tag.</p>\\n<pre><code class=\\"hljs\\"><span class=\\"hljs-tag\\">&lt;<span class=\\"hljs-name\\">script</span> <span class=\\"hljs-attr\\">src</span>=<span class=\\"hljs-string\\">&quot;https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.min.js&quot;</span>&gt;</span><span class=\\"hljs-tag\\">&lt;/<span class=\\"hljs-name\\">script</span>&gt;</span></code></pre><h3 id=\\"include-css\\">Include CSS</h3>\\n<p>CSS is used for expanding &amp; collapsing groupings and some basic styling.</p>\\n<pre><code class=\\"hljs\\"><span class=\\"hljs-tag\\">&lt;<span class=\\"hljs-name\\">link</span> <span class=\\"hljs-attr\\">rel</span>=<span class=\\"hljs-string\\">&quot;stylesheet&quot;</span> <span class=\\"hljs-attr\\">href</span>=<span class=\\"hljs-string\\">&quot;https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css&quot;</span>&gt;</span></code></pre><p>OR</p>\\n<p>If you installed it with npm and use sass / postcss you might try importing the styles from \'node_modules\', <a href=\\"https://github.com/sass/node-sass#includepaths\\">see the includePath option documentation for more info</a></p>\\n<pre><code class=\\"hljs\\"><span class=\\"hljs-keyword\\">@import</span> <span class=\\"hljs-string\\">&#x27;tocbot/src/scss/tocbot&#x27;</span>;</code></pre><h3 id=\\"usage\\">Usage</h3>\\n<p>Initialize the script at the bottom of the page before the closing body tag.</p>\\n<pre><code class=\\"hljs\\">tocbot.init({\\n  <span class=\\"hljs-comment\\">// Where to render the table of contents.</span>\\n  <span class=\\"hljs-attr\\">tocSelector</span>: <span class=\\"hljs-string\\">&#x27;.js-toc&#x27;</span>,\\n  <span class=\\"hljs-comment\\">// Where to grab the headings to build the table of contents.</span>\\n  <span class=\\"hljs-attr\\">contentSelector</span>: <span class=\\"hljs-string\\">&#x27;.js-toc-content&#x27;</span>,\\n  <span class=\\"hljs-comment\\">// Which headings to grab inside of the contentSelector element.</span>\\n  <span class=\\"hljs-attr\\">headingSelector</span>: <span class=\\"hljs-string\\">&#x27;h1, h2, h3&#x27;</span>,\\n  <span class=\\"hljs-comment\\">// For headings inside relative or absolute positioned containers within content.</span>\\n  <span class=\\"hljs-attr\\">hasInnerContainers</span>: <span class=\\"hljs-literal\\">true</span>,\\n});</code></pre><p><strong>NOTE:</strong> Make sure the body is scrollable and the document headings have id attributes, tocbot and your browser needs these things to make hashes jump to the proper heading, some markdown libraries (like <a href=\\"https://github.com/chjj/marked\\">marked</a>) already do this for you.</p>\\n<p>If content in the div has changed then trigger a refresh (optionally with new options).</p>\\n<pre><code class=\\"hljs\\">tocbot.refresh();</code></pre><p>Also you can use it within typescript:</p>\\n<pre><code class=\\"hljs\\"><span class=\\"hljs-keyword\\">import</span> * <span class=\\"hljs-keyword\\">as</span> tocbot <span class=\\"hljs-keyword\\">from</span> <span class=\\"hljs-string\\">&#x27;tocbot&#x27;</span>;\\n\\ntocbot.init({\\n  <span class=\\"hljs-comment\\">// Options</span>\\n});\\n\\ntocbot.refresh();\\n\\ntocbot.destroy();</code></pre><h2 id=\\"examples\\">Examples</h2>\\n<ul>\\n<li><a href=\\"http://tscanlin.github.io/tocbot/\\">Tocbot Homepage</a></li>\\n<li><a href=\\"https://spqr.wtf/projects/toc\\">Pagekit TOC</a></li>\\n<li><a href=\\"https://developers.optimizely.com/x/solutions/javascript/reference/index.html\\">Optimizely\'s Developer Documentation</a></li>\\n</ul>\\n<p>If you\'d like to add your page to this list open a pull request.</p>\\n<h2 id=\\"requirements\\">Requirements</h2>\\n<p>This library uses <strong>vanilla JavaScript</strong>. It is less than 350 bytes of CSS and about 3.6Kb of JavaScript (minified and gzipped) it also has no dependencies.</p>\\n<p>This script works in <strong>all modern browsers and IE 9+</strong>.</p>\\n<p><strong>Make sure rendered headings have id attributes</strong>, some markdown libraries (like <a href=\\"https://github.com/chjj/marked\\">marked</a>) already do this. If you need to do this client side see <a href=\\"https://github.com/tscanlin/tocbot/blob/master/src/utils/make-ids.js\\">this script</a>.</p>\\n<p><strong>NOTE:</strong> to exclude anchor elements from smooth scrolling, add the class <code>no-smooth-scroll</code>.</p>\\n<h3 id=\\"fixed-headers\\">Fixed headers</h3>\\n<p>To handle fixed headers with tocbot, just pass the header offsets as options to tocbot. For example, the options needed for a <code>40px</code> tall fixed header would be:</p>\\n<pre><code class=\\"hljs\\">tocbot.init({\\n  headingsOffset: 40,\\n  scrollSmoothOffset: -40\\n})</code></pre><h2 id=\\"api\\">API</h2>\\n<h3 id=\\"options\\">Options</h3>\\n<pre><code class=\\"hljs\\"><span class=\\"hljs-comment\\">// Where to render the table of contents.</span>\\n<span class=\\"hljs-attr\\">tocSelector</span>: <span class=\\"hljs-string\\">&#x27;.js-toc&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Or, you can pass in a DOM node instead</span>\\n<span class=\\"hljs-attr\\">tocElement</span>: element,\\n<span class=\\"hljs-comment\\">// Where to grab the headings to build the table of contents.</span>\\n<span class=\\"hljs-attr\\">contentSelector</span>: <span class=\\"hljs-string\\">&#x27;.js-toc-content&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Or, you can pass in a DOM node instead</span>\\n<span class=\\"hljs-attr\\">contentElement</span>: element,\\n<span class=\\"hljs-comment\\">// Which headings to grab inside of the contentSelector element.</span>\\n<span class=\\"hljs-attr\\">headingSelector</span>: <span class=\\"hljs-string\\">&#x27;h1, h2, h3&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Headings that match the ignoreSelector will be skipped.</span>\\n<span class=\\"hljs-attr\\">ignoreSelector</span>: <span class=\\"hljs-string\\">&#x27;.js-toc-ignore&#x27;</span>,\\n<span class=\\"hljs-comment\\">// For headings inside relative or absolute positioned containers within content</span>\\n<span class=\\"hljs-attr\\">hasInnerContainers</span>: <span class=\\"hljs-literal\\">false</span>,\\n<span class=\\"hljs-comment\\">// Main class to add to links.</span>\\n<span class=\\"hljs-attr\\">linkClass</span>: <span class=\\"hljs-string\\">&#x27;toc-link&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Extra classes to add to links.</span>\\n<span class=\\"hljs-attr\\">extraLinkClasses</span>: <span class=\\"hljs-string\\">&#x27;&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Class to add to active links,</span>\\n<span class=\\"hljs-comment\\">// the link corresponding to the top most heading on the page.</span>\\n<span class=\\"hljs-attr\\">activeLinkClass</span>: <span class=\\"hljs-string\\">&#x27;is-active-link&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Main class to add to lists.</span>\\n<span class=\\"hljs-attr\\">listClass</span>: <span class=\\"hljs-string\\">&#x27;toc-list&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Extra classes to add to lists.</span>\\n<span class=\\"hljs-attr\\">extraListClasses</span>: <span class=\\"hljs-string\\">&#x27;&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Class that gets added when a list should be collapsed.</span>\\n<span class=\\"hljs-attr\\">isCollapsedClass</span>: <span class=\\"hljs-string\\">&#x27;is-collapsed&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Class that gets added when a list should be able</span>\\n<span class=\\"hljs-comment\\">// to be collapsed but isn&#x27;t necessarily collapsed.</span>\\n<span class=\\"hljs-attr\\">collapsibleClass</span>: <span class=\\"hljs-string\\">&#x27;is-collapsible&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Class to add to list items.</span>\\n<span class=\\"hljs-attr\\">listItemClass</span>: <span class=\\"hljs-string\\">&#x27;toc-list-item&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Class to add to active list items.</span>\\n<span class=\\"hljs-attr\\">activeListItemClass</span>: <span class=\\"hljs-string\\">&#x27;is-active-li&#x27;</span>,\\n<span class=\\"hljs-comment\\">// How many heading levels should not be collapsed.</span>\\n<span class=\\"hljs-comment\\">// For example, number 6 will show everything since</span>\\n<span class=\\"hljs-comment\\">// there are only 6 heading levels and number 0 will collapse them all.</span>\\n<span class=\\"hljs-comment\\">// The sections that are hidden will open</span>\\n<span class=\\"hljs-comment\\">// and close as you scroll to headings within them.</span>\\n<span class=\\"hljs-attr\\">collapseDepth</span>: <span class=\\"hljs-number\\">0</span>,\\n<span class=\\"hljs-comment\\">// Smooth scrolling enabled.</span>\\n<span class=\\"hljs-attr\\">scrollSmooth</span>: <span class=\\"hljs-literal\\">true</span>,\\n<span class=\\"hljs-comment\\">// Smooth scroll duration.</span>\\n<span class=\\"hljs-attr\\">scrollSmoothDuration</span>: <span class=\\"hljs-number\\">420</span>,\\n<span class=\\"hljs-comment\\">// Smooth scroll offset.</span>\\n<span class=\\"hljs-attr\\">scrollSmoothOffset</span>: <span class=\\"hljs-number\\">0</span>,\\n<span class=\\"hljs-comment\\">// Callback for scroll end.</span>\\n<span class=\\"hljs-attr\\">scrollEndCallback</span>: <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> (<span class=\\"hljs-params\\">e</span>) </span>{},\\n<span class=\\"hljs-comment\\">// Headings offset between the headings and the top of the document (this is meant for minor adjustments).</span>\\n<span class=\\"hljs-attr\\">headingsOffset</span>: <span class=\\"hljs-number\\">1</span>,\\n<span class=\\"hljs-comment\\">// Timeout between events firing to make sure it&#x27;s</span>\\n<span class=\\"hljs-comment\\">// not too rapid (for performance reasons).</span>\\n<span class=\\"hljs-attr\\">throttleTimeout</span>: <span class=\\"hljs-number\\">50</span>,\\n<span class=\\"hljs-comment\\">// Element to add the positionFixedClass to.</span>\\n<span class=\\"hljs-attr\\">positionFixedSelector</span>: <span class=\\"hljs-literal\\">null</span>,\\n<span class=\\"hljs-comment\\">// Fixed position class to add to make sidebar fixed after scrolling</span>\\n<span class=\\"hljs-comment\\">// down past the fixedSidebarOffset.</span>\\n<span class=\\"hljs-attr\\">positionFixedClass</span>: <span class=\\"hljs-string\\">&#x27;is-position-fixed&#x27;</span>,\\n<span class=\\"hljs-comment\\">// fixedSidebarOffset can be any number but by default is set</span>\\n<span class=\\"hljs-comment\\">// to auto which sets the fixedSidebarOffset to the sidebar</span>\\n<span class=\\"hljs-comment\\">// element&#x27;s offsetTop from the top of the document on init.</span>\\n<span class=\\"hljs-attr\\">fixedSidebarOffset</span>: <span class=\\"hljs-string\\">&#x27;auto&#x27;</span>,\\n<span class=\\"hljs-comment\\">// includeHtml can be set to true to include the HTML markup from the</span>\\n<span class=\\"hljs-comment\\">// heading node instead of just including the textContent.</span>\\n<span class=\\"hljs-attr\\">includeHtml</span>: <span class=\\"hljs-literal\\">false</span>,\\n<span class=\\"hljs-comment\\">// includeTitleTags automatically sets the html title tag of the link</span>\\n<span class=\\"hljs-comment\\">// to match the title. This can be useful for SEO purposes or</span>\\n<span class=\\"hljs-comment\\">// when truncating titles.</span>\\n<span class=\\"hljs-attr\\">includeTitleTags</span>: <span class=\\"hljs-literal\\">false</span>,\\n<span class=\\"hljs-comment\\">// onclick function to apply to all links in toc. will be called with</span>\\n<span class=\\"hljs-comment\\">// the event as the first parameter, and this can be used to stop,</span>\\n<span class=\\"hljs-comment\\">// propagation, prevent default or perform action</span>\\n<span class=\\"hljs-attr\\">onClick</span>: <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> (<span class=\\"hljs-params\\">e</span>) </span>{},\\n<span class=\\"hljs-comment\\">// orderedList can be set to false to generate unordered lists (ul)</span>\\n<span class=\\"hljs-comment\\">// instead of ordered lists (ol)</span>\\n<span class=\\"hljs-attr\\">orderedList</span>: <span class=\\"hljs-literal\\">true</span>,\\n<span class=\\"hljs-comment\\">// If there is a fixed article scroll container, set to calculate titles&#x27; offset</span>\\n<span class=\\"hljs-attr\\">scrollContainer</span>: <span class=\\"hljs-literal\\">null</span>,\\n<span class=\\"hljs-comment\\">// prevent ToC DOM rendering if it&#x27;s already rendered by an external system</span>\\n<span class=\\"hljs-attr\\">skipRendering</span>: <span class=\\"hljs-literal\\">false</span>,\\n<span class=\\"hljs-comment\\">// Optional callback to change heading labels.</span>\\n<span class=\\"hljs-comment\\">// For example it can be used to cut down and put ellipses on multiline headings you deem too long.</span>\\n<span class=\\"hljs-comment\\">// Called each time a heading is parsed. Expects a string and returns the modified label to display.</span>\\n<span class=\\"hljs-comment\\">// Additionally, the attribute `data-heading-label` may be used on a heading to specify</span>\\n<span class=\\"hljs-comment\\">// a shorter string to be used in the TOC.</span>\\n<span class=\\"hljs-comment\\">// function (string) =&gt; string</span>\\n<span class=\\"hljs-attr\\">headingLabelCallback</span>: <span class=\\"hljs-literal\\">false</span>,\\n<span class=\\"hljs-comment\\">// ignore headings that are hidden in DOM</span>\\n<span class=\\"hljs-attr\\">ignoreHiddenElements</span>: <span class=\\"hljs-literal\\">false</span>,\\n<span class=\\"hljs-comment\\">// Optional callback to modify properties of parsed headings.</span>\\n<span class=\\"hljs-comment\\">// The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.</span>\\n<span class=\\"hljs-comment\\">// Function has to return the same or modified obj.</span>\\n<span class=\\"hljs-comment\\">// The heading will be excluded from TOC if nothing is returned.</span>\\n<span class=\\"hljs-comment\\">// function (object, HTMLElement) =&gt; object | void</span>\\n<span class=\\"hljs-attr\\">headingObjectCallback</span>: <span class=\\"hljs-literal\\">null</span>,\\n<span class=\\"hljs-comment\\">// Set the base path, useful if you use a `base` tag in `head`.</span>\\n<span class=\\"hljs-attr\\">basePath</span>: <span class=\\"hljs-string\\">&#x27;&#x27;</span>,\\n<span class=\\"hljs-comment\\">// Only takes affect when `tocSelector` is scrolling,</span>\\n<span class=\\"hljs-comment\\">// keep the toc scroll position in sync with the content.</span>\\n<span class=\\"hljs-attr\\">disableTocScrollSync</span>: <span class=\\"hljs-literal\\">false</span></code></pre><h3 id=\\"methods\\">Methods</h3>\\n<h4 id=\\"init\\">.init</h4>\\n<p>Initialize tocbot with an options object.</p>\\n<pre><code class=\\"hljs\\">tocbot.init(options)</code></pre><h4 id=\\"destroy\\">.destroy</h4>\\n<p>Destroy tocbot and remove event listeners.</p>\\n<pre><code class=\\"hljs\\">tocbot.destroy()</code></pre><h4 id=\\"refresh\\">.refresh</h4>\\n<p>Refresh tocbot if the document changes and it needs to be rebuilt.</p>\\n<pre><code class=\\"hljs\\">tocbot.refresh()</code></pre><h2 id=\\"troubleshooting\\">Troubleshooting</h2>\\n<ul>\\n<li>Tocbot scrolls to the right position onClick but highlighting doesn\'t seem to show the active section\\n<ul>\\n<li>Try running this from the console: <code>tocbot.refresh({ ...tocbot.options, hasInnerContainers: true })</code>. If that works then one option (<code>hasInnerContainers: true</code>) to handle inner containers should be all you need to add.</li>\\n</ul>\\n</li>\\n</ul>\\n<h2 id=\\"contributing\\">Contributing</h2>\\n<p>Contributions and suggestions are welcome! Please feel free to open an issue if you run into a problem or have a feature request. I\'ll do my best to respond in a timely fashion.</p>\\n<p>If you want to open a pull request just fork the repo but please make sure all tests and lint pass.</p>\\n<h3 id=\\"running-tests\\">Running Tests</h3>\\n<pre><code class=\\"hljs\\">npm run <span class=\\"hljs-built_in\\">test</span></code></pre><h3 id=\\"steps-to-publish\\">Steps to publish</h3>\\n<ul>\\n<li>Push a branch and open a pull request</li>\\n<li>run <code>npm version &lt;patch|minor|major&gt;</code></li>\\n<li>Update readme.md with notes</li>\\n<li>Merge the pull request</li>\\n<li>commit dist/</li>\\n<li>run <code>npm publish</code></li>\\n<li>make release on github</li>\\n</ul>\\n<h2 id=\\"license\\">License</h2>\\n<p><a href=\\"http://opensource.org/licenses/MIT\\">MIT</a></p>\\n"}'),p=s=>t.createElement(e.Z,{title:l.Z.title,subtitle:l.Z.subtitle,description:l.Z.description,stylesheets:l.Z.stylesheets,topLinks:l.Z.topLinks,bodyHtml:o.y8,repo:l.Z.repo,user:l.Z.user,siteId:l.Z.siteId})},8581:function(s,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9546)}])}},function(s){s.O(0,[684,206,888,774,179],(function(){return n=8581,s(s.s=n);var n}));var n=s.O();_N_E=n}]);