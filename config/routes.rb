Rails.application.routes.draw do
  constraints(lambda { |req| req.format == :html }) do
    root 'pages#index'
    get '*path', to: 'pages#index'
  end

  constraints(name: /.+/, ext: /(jpg|png|gif|eot|ttf|woff|json)/) do
    # Redirect for blueprintjs resources
    get '/resources/:name', to: redirect('/assets/%{name}')
  end

  constraints(lambda { |req| req.format == :json }) do
    get '/info', to: 'pages#info'
    get '/config', to: 'settings#get'
    # post '/setting/set', to: 'settings#set'
  end
end
