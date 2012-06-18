$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "ember-devise-bootstrap/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "ember-devise-bootstrap"
  s.version     = EmberDeviseBootstrap::VERSION
  s.authors     = ["Michael Latta"]
  s.email       = ["mlatta@technomage.com"]
  s.homepage    = "http://www.technomage.com"
  s.summary     = "An Ember and Twitter Bootstrap based login UI for Devise."
  s.description = "An Ember and Twitter Bootstrap based login UI for Devise."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", ">= 3.2.6"
  s.add_dependency "ember-rails"
  s.add_dependency "twitter-bootstrap-rails"
  s.add_dependency "devise"
  s.add_dependency "omniauth"
  s.add_dependency "omniauth-facebook"

  s.add_development_dependency "sqlite3"
end
