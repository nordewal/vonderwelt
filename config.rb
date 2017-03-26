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

  blog.permalink = "{year}/{month}/{title}/index.html"
  # Matcher for blog source files
  blog.sources = "{year}/{month}/{title}/index.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "article_layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".md.erb"

  # blog.tag_template = "tag.html"
  # blog.calendar_template = "calendar.html"

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
set :strip_index_file, false

activate :i18n, :langs => [:de]

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, :livereload_css_target => 'resources/app.css'
  activate :external_pipeline,
           name: :webpack,
           command: './node_modules/webpack/bin/webpack.js --watch --watch-poll -d',
           source: ".tmp/dist",
           latency: 1
   activate :disqus do |d|
     d.shortname = "vonderwelt-dev"
     # d.shortname = nil  # or setting to `nil` will stop Disqus loading
  end
end

ignore '*.scss'
ignore /.*(?<!bundle)\.js$/
ignore '*.fsh'
ignore '/partials/*'
ignore /^((?!_(large|medium|small)).)*.jpg$/i

# Build-specific configuration
configure :build do
  ignore '*.js.map'
  ignore '*.css.map'
  ## Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash,
    :ignore => [/blog\/.*jpg$/]
  activate :asset_host,
    :host => '//1bbd085e69c44879b4aea5ce2016ffff.ds11s3ns.swisscom.com/vonderwelt',
    :ignore => [/(js|css|ico|svg)$/]

  activate :external_pipeline,
           name: :webpack,
           command: './node_modules/webpack/bin/webpack.js --bail --optimize-minimize',
           source: ".tmp/dist",
           latency: 1
   activate :disqus do |d|
     d.shortname = "vonderwelt-prd"
     # d.shortname = nil  # or setting to `nil` will stop Disqus loading
  end
end

#activate :deploy do |deploy|
#  deploy.build_before = true
#  deploy.deploy_method = :rsync
#  deploy.host   = "cedar"
#  deploy.path   = "~/apps/xyt"
#  deploy.flags  = "-avz --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r"
#end


# s3 sync
activate :s3_sync do |s3_sync|
#  ignore '*.css'
#  ignore '*.html'
  s3_sync.bucket                     = 'vonderwelt' # The name of the S3 bucket you are targeting. This is globally unique.
  s3_sync.region                     = ''     # The AWS region for your bucket.
  s3_sync.delete                     = false # We delete stray files by default.
  s3_sync.after_build                = false # We do not chain after the build step by default.
  s3_sync.prefer_gzip                = false
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = ''
  s3_sync.version_bucket             = false
end
