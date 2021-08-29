Rails.application.routes.draw do

  root to: 'home#index'
  post "/links" => 'links#create'

end
