require "net/http"
require "uri"

Given /^no session$/ do
  Capybara.reset_sessions!
  begin
    uri = URI.parse("http://localhost:#{Capybara.server_port}")
    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Delete.new(destroy_user_session_path)
    response = http.request(request)
  rescue => e
  end
end

Given /^I am on the home page$/ do
  visit '/'
end

When /^sleep (\d+)$/ do | n |
  sleep n.to_i
end

