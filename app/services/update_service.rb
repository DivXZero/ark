class UpdateService
  attr_reader :repo, :remote

  def initialize(path = '.', branch = 'master')
    @repo = Rugged::Repository.discover(path)
    @repo.checkout(branch)
    @remote = @repo.remotes['origin']
  end

  def perform
    # TODO: Run any pre & post-update scripts
    # TODO: Record output to db and display in view
    if (check)
      Rails.logger.debug(`git pull`)
      # bundle install && yarn install (if RoR)
      Rails.logger.debug(`sudo service apache2 restart`)
    else
      true
    end
  end

  # Returns true if updates are pending
  def check
    begin
      if (@remote.fetch[:total_objects] > 0)
        true
      else
        false
      end
    rescue
      false
    end
  end
end
