module CustomHelpers
  def resp_img(title, image)
    return "![#{title}](images#{image} \"#{title}\")"
    #![Alternative text](images/IMG_0017.JPG "Title attribute"){: srcset="images/IMG_0017.JPG 2x"}
    #return image_path("IMG_0017.JPG", resize_to: 1200)
  end
end