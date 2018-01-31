class BranchesController < ApplicationController
  def index
    render json: {
      branches: []
    }
  end
end
