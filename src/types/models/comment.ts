import { Comment, Prisma } from '@prisma/client';

// Type for creating a comment (without id and relations)
export type CommentCreate = Prisma.CommentCreateInput;

// Type for updating a comment (all fields optional except id)
export type CommentUpdate = Prisma.CommentUpdateInput;

// Type for default comment (with id and no relations)
export type CommentGet = Comment;

// Type for fetched comment with relations
export type CommentRelations = Prisma.CommentGetPayload<{
  include: {
    post: true;

    _count: { select: { replies: true } };

    profile: {
      select: { firstName: true; lastName: true; avatar: true };
    };

    replies: {
      select: {
        id: true;
        name: true;
        content: true;
        createdAt: true;
        postId: true;

        _count: { select: { replies: true } };

        profile: {
          select: { id: true; firstName: true; lastName: true; avatar: true };
        };
      };
    };
  };
}>;
