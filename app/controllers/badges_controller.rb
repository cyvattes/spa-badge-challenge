class BadgesController < ApplicationController
  def index
  end

  def show
    render json: @badge
  end

  def create
    @badge = Badge.new(badge_params)
    if @badge.save
      render json: @badge
    else
      err
    end
  end

  def destroy
    @badge.destroy
  end


  private

  def badge_params
    params.permit(:description)
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end
end
