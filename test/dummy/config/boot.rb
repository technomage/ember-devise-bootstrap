require 'rubygems'
gemfile = File.expand_path('../../../../Gemfile', __FILE__)

if File.exist?(gemfile)
  ENV['BUNDLE_GEMFILE'] = gemfile
  require 'bundler'
  Bundler.setup
else
  Rails.logger.error "Gemfile not found"
end

$:.unshift File.expand_path('../../../../lib', __FILE__)
