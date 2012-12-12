class ProMyController < ApplicationController
	layout 'pro_post'

	def show
		@my_likes = current_user.likes
		render :show
	end
end