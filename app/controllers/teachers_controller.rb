class TeachersController < ApplicationController
  def index
    @teachers = Teacher.all
    render json: @teachers
  end

  def show
    @teacher = Teacher.find(params[:id])
    render json: @teacher
  end

  def create
    @teacher = Teacher.new(teacher_params)
    if @teacher.save
      render json: @teacher
    else
      err
    end
  end

  def destroy
    @teacher.destroy
  end


  private

  def teacher_params
    params.permit(:name)
  end

  def err
    render json: @teacher.errors, status: :unprocessable_entity
  end
end
