import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../../users/schemas/users.schema';
import { Model } from 'mongoose';
import { Blogs, BlogsDocument } from '../../blogs/schemas/blogs.schema';
import {
  Comments,
  CommentsDocument,
} from '../../comments/schema/comments.schema';
import { Posts, PostsDocument } from '../../posts/schemas/posts.schema';
import {
  RecoveryCode,
  RecoveryCodeDocument,
} from '../../auth/schemas/recoveryCode.schemas';
import {
  LikeStatus,
  LikeStatusDocument,
} from '../../comments/schema/likeStatus.schema';
import {
  Devices,
  DevicesDocument,
} from '../../devices/schemas/devices.schemas';
import {
  UserBanned,
  UserBannedDocument,
} from '../../blogs/schemas/user-banned.schema';

@Injectable()
export class TestingRepository {
  constructor(
    @InjectModel(Blogs.name) private readonly blogsModel: Model<BlogsDocument>,
    @InjectModel(Devices.name)
    private readonly devicesModel: Model<DevicesDocument>,
    @InjectModel(LikeStatus.name)
    private readonly likeStatusModel: Model<LikeStatusDocument>,
    @InjectModel(Posts.name) private readonly postsModel: Model<PostsDocument>,
    @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>,
    @InjectModel(RecoveryCode.name)
    private readonly recoveryCodeModel: Model<RecoveryCodeDocument>,
    @InjectModel(UserBanned.name)
    private readonly userBannedModel: Model<UserBannedDocument>,
    @InjectModel(Comments.name)
    private readonly commentsModel: Model<CommentsDocument>,
  ) {}

  async deleteAllData(): Promise<boolean> {
    try {
      await Promise.all([
        this.usersModel.deleteMany(),
        this.blogsModel.deleteMany(),
        this.postsModel.deleteMany(),
        this.commentsModel.deleteMany(),
        this.recoveryCodeModel.deleteMany(),
        this.likeStatusModel.deleteMany(),
        this.devicesModel.deleteMany(),
        this.userBannedModel.deleteMany(),
      ]);
      return true;
    } catch (e) {
      return false;
    }
  }
}
