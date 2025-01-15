import { getCategoryColor } from '@/services/logic/colors';
import { PostRelations } from '@/types/models/post';
import { Badge, Group } from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';
import React from 'react';

export default function Post({ props }: { props: PostRelations['category'] }) {
  return (
    <Badge
      tt={'capitalize'}
      fw={'normal'}
      color={getCategoryColor(props?.title || '')}
      radius={'sm'}
      style={{ cursor: 'pointer' }}
    >
      <Group gap={4}>
        <IconCircleFilled size={12} />
        {props?.title}
      </Group>
    </Badge>
  );
}
