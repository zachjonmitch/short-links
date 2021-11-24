Rails.application.routes.draw do
  root to: 'home#index'

  post "/links" => 'links#create'

  get "/:lookup_code" => 'links#show'
end
