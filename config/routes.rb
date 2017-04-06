Rails.application.routes.draw do

  root to: 'pages#home'
  get 'mailings', to: "pages#mailings"
  get '/:page' , to: "pages#page"

  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]

  post 'mail', to: "pages#mailing_list"

  post "forgot_password" , to: "application#forgot_password"

  namespace :api, defaults: { format: :json } do
    get "company_names", to: 'api#company_names'
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
