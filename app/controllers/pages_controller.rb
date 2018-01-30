class PagesController < ApplicationController
  def index
  end

  # Info route to return things such as environment variables
  # dependency versions, etc
  def info
    # UpdateJob.perform_in(5)

    self_update = UpdateService.new

    render json: {
      config: Setting['config'],
      git_global_config: Rugged::Config.global,
      app: {
        pending_updates: self_update.check
      }
    }
  end
end
