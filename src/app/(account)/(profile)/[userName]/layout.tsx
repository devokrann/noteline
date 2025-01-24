import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { typeParams } from '../layout';
import appData from '@/data/app';

export const generateMetadata = ({
  params,
}: {
  params: typeParams;
}): Metadata => {
  return {
    title: {
      default: params.userName,
      template: `%s - ${params.userName} - ${appData.name.app}`,
    },
  };
};

export default function LayoutProfileDetails({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
