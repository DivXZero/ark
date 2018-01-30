class SettingsController < ApplicationController
  before_action :encode_params, only: :set
  before_action :decode_params

  def get
    render json: @settings
  end

  def set
    # Store git credentials
    git_config = Rugged::Config.global
    git_config.store('credential.helper', 'store')
    git_config.store('user.name', @settings['repo']['username'])
    git_config.store('user.password', @settings['repo']['password'])

    render json: @settings
  end

  protected

  def decode_params
    @settings = Setting['config']
    @settings['database']['sql'] = Base64.decode64(@settings['database']['sql'])
  end

  def encode_params
    @encoded_settings = params[:config]
    @encoded_settings['database']['sql'] = Base64.encode64(@encoded_settings['database']['sql'])
    Setting['config'] = @encoded_settings
  end
end
