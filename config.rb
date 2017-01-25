###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "blog"

  blog.permalink = "{year}/{month}/{title}"
  # Matcher for blog source files
  blog.sources = "{year}/{month}/{title}/text.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "article_layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".md.erb"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false

require "lib/custom_helpers"
helpers CustomHelpers

set :css_dir, 'resources' # output of webpack
set :js_dir, 'resources' # output of webpack
set :images_dir, 'site_images'

# set :partials_dir, 'partials'
set :relative_links, true
activate :relative_assets
#set :strip_index_file, true

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, :livereload_css_target => 'resources/app.css'
end

# activate :middleman_simple_thumbnailer
#activate :thumbnailer,
#         :dimensions => {
#             :small => '400x',
#             :medium => '800x',
#             :large => '1200x'
#         },
#         :include_data_thumbnails => false
#         #:namespace_directory => %w(gallery)

activate :external_pipeline,
         name: :webpack,
         command: build? ? './node_modules/webpack/bin/webpack.js --bail --optimize-minimize' : './node_modules/webpack/bin/webpack.js --watch -d',
         source: ".tmp/dist",
         latency: 1

ignore '*.scss'
ignore /.*(?<!bundle)\.js$/

# Build-specific configuration
configure :build do
  ignore '*.js.map'
  ignore '*.css.map'
#  activate :minify_html
  #activate :gzip
  ## Append a hash to asset urls (make sure to use the url helpers)
  #activate :asset_hash
  #activate :asset_host, :host => '//YOURDOMAIN.cloudfront.net'
end

#activate :deploy do |deploy|
#  deploy.build_before = true
#  deploy.deploy_method = :rsync
#  deploy.host   = "cedar"
#  deploy.path   = "~/apps/xyt"
#  deploy.flags  = "-avz --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r"
#end