class Api::V1::CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: CommentSerializer.new(comments)
    end
end
