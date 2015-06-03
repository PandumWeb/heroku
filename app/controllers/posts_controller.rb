class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    if user_signed_in?
      if params[:category_id]
         @category = Category.find(params[:category_id])
        @posts = @category.posts
      else
        @posts = Post.all.order('created_at DESC')
      end
    else
      render 'fronts/index'
    end
  end
  def new
    @post = Post.new
  end
  def create
     @post = Post.new(post_params)
    @post = current_user.posts.build(params[:post].permit(:title, :body, :category_id, :image))
    if @post.save
      redirect_to @post
    else
       render'new'
    end
  end
  def show
    @post = Post.find(params[:id])
     if user_signed_in?
      render 'show'
    else
      render 'fronts/blog-single'
    end
  end
  def edit
    @post = Post.find(params[:id])
  end
  def update
    @post = Post.find(params[:id])
    if @post.update(params[:post].permit(:title, :body, :category_id,:image))
      redirect_to @post
    else
      render 'edit'
    end
  end
  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    redirect_to root_path
  end

  private
    def post_params
      params.require(:post).permit(:title, :body, :category_id,:image)     
    end
end
