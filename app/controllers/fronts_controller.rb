class FrontsController < ApplicationController
  before_action :set_about, only: [:show, :edit, :update, :destroy]

  # GET /abouts
  # GET /abouts.json
  def index
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


 
end
