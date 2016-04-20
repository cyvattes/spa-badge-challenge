Rails.application.routes.draw do
  scope '/api' do
    resources :badges, except: [:new, :edit]
    resources :teachers, except: [:new, :edit]
  end
end
