class ProProtoController < ApplicationController
  layout 'pro_post'

  def show
    @proto = StatusMessage.find(params[:id])
    @pics = @proto.photos

    if !current_user.nil?
    	@like_id = current_user.like_for(@proto).blank? ? nil : current_user.like_for(@proto).id
    end
    render :show
  end
end