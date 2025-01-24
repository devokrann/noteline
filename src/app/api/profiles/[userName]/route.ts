import prisma from '@/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { userName: string } }
) {
  try {
    const profileRecord = await prisma.profile.findUnique({
      where: { userName: params.userName },

      include: {
        _count: { select: { posts: true } },

        categories: {
          include: {
            _count: { select: { posts: true } },

            profile: true,

            posts: {
              include: {
                _count: { select: { comments: true } },

                tags: true,
              },

              orderBy: { createdAt: 'desc' },
            },
          },
        },

        posts: {
          include: {
            _count: { select: { comments: true } },

            tags: true,
          },

          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return NextResponse.json(
      { profile: profileRecord },
      { status: 200, statusText: 'Profile Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get profile):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
