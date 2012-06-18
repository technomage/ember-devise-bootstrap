Rails.application.routes.draw do

  mount EmberDeviseBootstrap::Engine => "/ember-devise-bootstrap"

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  devise_scope :users do
    get '/users/auth/:provider' => 'users/omniauth_callbacks#passthru'
  end

  root to: "application#index"
end
