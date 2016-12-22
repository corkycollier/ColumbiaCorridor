Rails.application.routes.draw do

  root to: 'pages#home'
  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]

  namespace :api, defaults: { format: :json } do
    post "mailing_list", to: 'api#mailing_list'
    resources :news
    resources :events
    resources :users
  end
end
