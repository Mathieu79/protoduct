#   Copyright (c) 2010-2011, Diaspora Inc.  This file is
#   licensed under the Affero General Public License version 3 or later.  See
#   the COPYRIGHT file.

class ProcessedImage < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  def store_dir
    "uploads/images"
  end

  def extension_white_list
    %w(jpg jpeg png gif tiff)
  end

  def filename
    model.random_string + File.extname(@filename) if @filename
  end
=begin
  version :thumb_small do
    process :resize_to_fill => [50,50]
    process :strip
  end
  version :thumb_medium do
    process :resize_to_limit => [100,100]
    process :strip
  end
  version :thumb_large do
    process :resize_to_limit => [300,300]
    process :strip
  end
=end
  version :scaled_full do
    process :resize_to_limit => [700,700]
    process :strip
  end

  version :pro70 do
    process :resize_to_fill => [70,70]
    process :strip
  end

  version :pro162 do
    process :resize_to_fill => [162,162]
    process :strip
  end

  version :pro512 do
    process :resize_to_fill => [512,512]
    process :strip
  end   

  def strip
    manipulate! do |img|
      img.strip
      img = yield(img) if block_given?
      img
    end
  end

end
