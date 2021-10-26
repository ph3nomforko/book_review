Rails.application.routes.draw do
 # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :books
  # resources :categories
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create]
      resources :categories, only: [:index]
      resources :comments, only: [:index, :create]
    end
  end
end
