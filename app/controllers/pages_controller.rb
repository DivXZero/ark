class PagesController < ApplicationController
  def index
  end

  # Info route to return things such as environment variables
  # dependency versions, etc
  def info
    # Grab settings from config/app.yml
    info = Setting.get_all('config')

    # Grab repo details
    g = Git.open('.')
    up_to_date = g.fetch('origin').empty?
    info.merge!(
      git: {
        config: g.config
      },
      up_to_date: up_to_date
    )

    render json: info
  end
end
