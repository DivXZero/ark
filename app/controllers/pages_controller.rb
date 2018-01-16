class PagesController < ApplicationController
  def index
  end

  # Info route to return things such as environment variables
  # dependency versions, etc.
  def info
    # Grab settings from config/app.yml
    info = Setting.get_all('app')

    # Grab repo details
    g = Git.open('.')
    info.merge!(
      git: {
        config: g.config,
        repo: g.fetch
      }
    )

    render json: info
  end
end
