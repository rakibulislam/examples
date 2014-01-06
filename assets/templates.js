define('appkit/templates/application', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class=\"navbar-header\">\n    {{#link-to 'index' classNames=\"navbar-brand\"}}Ember Sherpa Examples{{/link-to}}\n  </div>\n</nav>\n<div class=\"container\">\n    {{outlet}}\n</div>\n\n"); });

define('appkit/templates/code/_news', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("{{#each}}\n{{! the template for news-post component acts as layout to the component's block}}\n    {{#news-post}}\n    {{! component block is a template for this component}}\n      <h5>{{title}}</h5>\n      <p>{{content}}</p>\n    {{/news-post}}\n{{/each}}"); });

define('appkit/templates/component-blocks', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h3>Component Blocks</h3>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <blockquote class=\"twitter-tweet\" data-cards=\"hidden\" lang=\"en\"><p>In ember, you can do \\{{x-foo}} without a template or Ember.Component behind it, use it liberally when building out your app.</p>&mdash; Ryan Florence (@ryanflorence) <a href=\"https://twitter.com/ryanflorence/statuses/418828288069361664\">January 2, 2014</a></blockquote>\n    <blockquote class=\"twitter-tweet\" data-cards=\"hidden\" lang=\"en\"><p><a href=\"https://twitter.com/EmberSherpa\">@EmberSherpa</a> So what <a href=\"https://twitter.com/ryanflorence\">@ryanflorence</a> is saying is that a “template-less” component just has a default \\{{yield}}. See: <a href=\"https://t.co/RFkhC0do6D\">https://t.co/RFkhC0do6D</a></p>&mdash; Robert Jackson (@rwjblue) <a href=\"https://twitter.com/rwjblue/statuses/418962456942501889\">January 3, 2014</a></blockquote>\n    <blockquote class=\"twitter-tweet\" data-cards=\"hidden\" lang=\"en\"><p><a href=\"https://twitter.com/EmberSherpa\">@EmberSherpa</a> Take a look at the buttonset component in <a href=\"https://t.co/I13dhJPXyd\">https://t.co/I13dhJPXyd</a>. It’s template is simply \\{{yield}}.&#10;&#10;/cc <a href=\"https://twitter.com/ryanflorence\">@ryanflorence</a></p>&mdash; Robert Jackson (@rwjblue) <a href=\"https://twitter.com/rwjblue/statuses/418965493182377984\">January 3, 2014</a></blockquote>\n  </div>\n  <div class=\"col-lg-6\">\n    <p>You can declare a new component without writing JavaScript by adding \\{{component-name}} to a Handlebars template.</p>\n    <p>This is not particularly useful until you add a template and \\{{yield}} to that template. Now your component will output whatever is inside of its block.</p>\n    <p><strong>The component's template will act as a wrapper to the contents of the block.</strong></p>\n    <h4>Code</h4>\n      <ul>\n        <li>Demo template: {{github-link 'app/templates/code/_news.hbs'}}</li>\n        <li>Component template: {{github-link 'app/templates/components/news-post.hbs'}}</li>\n      </ul>\n    <h4>Example</h4>\n    {{partial 'code/news'}}\n  </div>\n</div>"); });

define('appkit/templates/components/news-post', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<div class=\"news-post\">\n    {{yield}}\n</div>"); });

define('appkit/templates/deck', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h3>Slide Deck</h3>\n<p>\n    The goal of this demo is to show how to add custom views to a CollectionView.\n    This is possible because CollectionView class extends ContainerView which allows an array of child views to be\n    rendered.\n</p>\n\n<h4>Instructions</h4>\n<ol>\n    <li>click Add Slide</li>\n    <li>enter text in newly created input field</li>\n    <li>click save</li>\n</ol>\n\n<p>\n    Your input will be added to the content property after you click save.\n</p>\n\n<hr>\n<button {{action 'new'}}>Add Slide</button>\n\n{{view 'deck-collection' content=content}}\n<strong>content.length = {{content.length}}</strong>\n<hr>\n\n<h3>Code</h3>\n<ul>\n    <li>{{github-link 'app/templates/deck.hbs'}} - this template</li>\n    <li>{{github-link 'app/routes/deck.js'}} - route provides initial content</li>\n    <li>{{github-link 'app/controllers/deck.js'}} - controller handles actions</li>\n    <li>{{github-link 'app/views/deck-collection.js'}} - collection view</li>\n    <li>{{github-link 'tests/acceptance/deck_test.js'}} - tests</li>\n</ul>"); });

define('appkit/templates/group-by', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h2>groupBy Computed Property Example</h2>\n\n<h3>Original content</h3>\n\n<ul>\n  {{#each}}\n      <li>{{name}} ({{type}})</li>\n  {{/each}}\n</ul>\n\n<h3>groupBy('type')</h3>\n<ul>\n    {{#each grouped}}\n        <li>\n          <h4>{{group}}</h4>\n            <ul>\n            {{#each content}}\n                <li>{{name}}</li>\n            {{/each}}\n            </ul>\n        </li>\n    {{/each}}\n</ul>\n"); });

define('appkit/templates/index', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<ul>\n  <li>{{#link-to 'group-by'}}groupBy Computed Property{{/link-to}}</li>\n  <li>{{#link-to 'deck'}}Manually Adding Custom Views to CollectionView{{/link-to}}</li>\n  <li>{{#link-to 'component-blocks'}}Component Blocks{{/link-to}}</li>\n</ul>"); });