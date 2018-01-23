class SettingsController < ApplicationController
  def get
    render json: Setting['config']
  end

  def set
    render json: Setting[params[:id]] = params[:value]
  end
end
