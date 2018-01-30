class UpdateJob
  include SuckerPunch::Job

  def perform(delay = 5)
    update = UpdateService.new
    update.perform

    UpdateJob.perform_in(delay, delay)
  end
end
