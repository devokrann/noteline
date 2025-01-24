'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LayoutModal from '@/components/layout/modal';
import FormListCreate from '@/components/form/list/create';

export default function Create({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        padding={'xl'}
        size={'lg'}
      >
        <LayoutModal props={{ title: `Create new list`, close }}>
          <FormListCreate functions={{ close }} />
        </LayoutModal>
      </Modal>

      <span onClick={open}>{children}</span>
    </>
  );
}
