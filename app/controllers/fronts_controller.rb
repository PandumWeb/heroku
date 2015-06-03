class FrontsController < ApplicationController
  before_action :set_about, only: [:show, :edit, :update, :destroy]

  # GET /abouts
  # GET /abouts.json
  def index
    @posts = Post.last(4)
  
    render 'index'
  end

  def contact
    render 'contact'
  end

  def resources
    render 'resources'
  end

  def about
    render 'about'
  end

  def portfolio
    render 'portfolio'
  end

  def blogSingle
    render 'blog-single'
  end

  def blog
    @posts = Post.paginate(:page => params[:page], :per_page => 6).order('created_at DESC')
    render 'blog'
  end

  def show
    @post = Post.find(params[:id])
     if user_signed_in?
      render 'show'
    else
      render 'fronts/blog-single'
    end
  end

   def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(params[:comment].permit(:name, :body))

    redirect_to post_path(@post)
  end

 
end
