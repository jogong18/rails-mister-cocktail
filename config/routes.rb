Rails.application.routes.draw do

  root to: 'cocktails#index'

  resources :cocktails do
    resources :doses, only: [:new, :create, :edit, :update]
  end

  delete "doses/:id", to: "doses#destroy", as: :dose
  get "doses/:id/edit", to: "doses#edit", as: :dose_edit


end
