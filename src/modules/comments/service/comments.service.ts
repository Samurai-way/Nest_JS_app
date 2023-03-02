import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from '../repository/comments.repository';
import { PaginationDto } from '../../helpers/dto/pagination.dto';
import { PaginationViewModel } from '../../helpers/pagination/pagination-view-model';
import { CommentsViewModal } from '../schema/comments.schema';
import { PostsRepository } from '../../posts/repository/posts.repository';

@Injectable()
export class CommentsService {
  constructor(
    private commentsRepository: CommentsRepository,
    private postsRepository: PostsRepository,
  ) {}
  async findCommentsByPostId(
    postId: string,
    paginationDto: PaginationDto,
  ): Promise<PaginationViewModel<CommentsViewModal[]>> {
    const findPostById = await this.postsRepository.findPostById(postId);
    if (!findPostById)
      throw new NotFoundException(`Post with ID ${postId} not found`);
    return this.commentsRepository.findCommentsByPostId(postId, paginationDto);
  }
}