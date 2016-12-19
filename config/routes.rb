Rails.application.routes.draw do

  root to: 'pages#home'
  get 'mailing_list', to: "api#mailing_list"
  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]

  namespace :api, defaults: { format: :json } do
    get "mailing_list", to: 'api#add_to_mailing_list'
  end
end
