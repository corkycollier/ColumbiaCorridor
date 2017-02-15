Rails.application.routes.draw do

  root to: 'pages#home'

  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]

  post 'mail', to: "pages#mailing_list"
  get 'mailings', to: "pages#mailings"
  get '/:page' , to: "pages#page"
  post "forgot_password" , to: "application#forgot_password"

  namespace :api, defaults: { format: :json } do
    post "mail", to: 'api#mail'
    patch "save" , to: "api#save"
    resources :news
    resources :events
    resources :users
    resources :sponsors
    resources :boards
    resources :staffs
    resources :archives

  end
end
