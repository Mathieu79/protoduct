class ProProtoController < ApplicationController
  layout 'pro_post'

  def show
    @protos = StatusMessage.find(params[:id]).photos
    render :show
  end
end