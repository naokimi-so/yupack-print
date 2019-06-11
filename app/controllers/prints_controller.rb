class PrintsController < ApplicationController
  def index

  end

  def label
    @user = current_user 
  end

  private

    def print_params
      params.require(:destination).permit(:name, :address, :postal_code, :tel)
    end

end
