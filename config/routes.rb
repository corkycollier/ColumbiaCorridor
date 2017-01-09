Rails.application.routes.draw do

  root to: 'pages#home'

  get '/:page' , to: "pages#page"
  get '/:page/:page' , to: "pages#page"

  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]

  namespace :api, defaults: { format: :json } do
    post "mailing_list", to: 'api#mailing_list'
    patch "save" , to: "api#save"
    resources :news
    resources :events
    resources :users
    resources :sponsors
  end
end
