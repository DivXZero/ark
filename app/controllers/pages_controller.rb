class PagesController < ApplicationController
  def index
  end

  # Info route to return things such as environment variables
  # dependency versions, etc
  def info
    repo = Rugged::Repository.discover('.')
    remote = repo.remotes['origin']
    check = remote.check_connection(:fetch)
    fetch = remote.fetch

    render json: {
      config: Setting['config'],
      git_global_config: Rugged::Config.global,
      status: {
        connection: check,
        fetch: fetch
      }
    }
  end
end
