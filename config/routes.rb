Rails.application.routes.draw do
  root 'top#index'
  get 'prints', to: 'prints#index'
  devise_for :users
  get 'prints/label', to: 'prints#label'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
