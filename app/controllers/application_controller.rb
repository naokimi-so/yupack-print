class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    prints_path
  end

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :address, :tel, :postal_code])
    end

  private
    def sign_in_required
      redirect_to new_user_session_url unless user_signed_in?
    end
end
