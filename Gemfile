source "http://rubygems.org"

# Declare your gem's dependencies in ember-devise-bootstrap.gemspec.
# Bundler will treat runtime dependencies like base dependencies, and
# development dependencies will be added by default to the :development group.
gemspec

# jquery-rails is used by the dummy application
gem "jquery-rails"
gem "devise"
gem "omniauth-facebook"
gem "twitter-bootstrap-rails"
gem "ember-rails"

# Declare any dependencies that are still in development here instead of in
# your gemspec. These might include edge Rails or gems from your path or
# Git. Remember to move these dependencies to your gemspec before releasing
# your gem to rubygems.org.

# To use debugger
# gem 'debugger'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '>= 3.2.3'
  gem 'coffee-rails', '>= 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platform => :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :test do
   gem 'cucumber-rails'
   gem "rspec-rails"
   gem "database_cleaner"
   gem "spork"
   gem "capybara"
end
