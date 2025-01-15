import { useState, useMemo, useEffect } from 'react';

interface PageRange {
  from: number;
  to: number;
}

const chunk = <T>(array: T[], size: number): T[][] => {
  return array.length
    ? [array.slice(0, size), ...chunk(array.slice(size), size)]
    : [];
};

export const usePaginate = <T>(params: { list: T[]; pageSize: number }) => {
  const [items, setItems] = useState<T[]>([]);
  const [activePage, setActivePage] = useState(1);

  const chunkedList = useMemo(
    () => (params.list ? chunk(params.list, params.pageSize) : []),
    [params.list, params.pageSize]
  );

  const pageRange = useMemo((): PageRange | null => {
    if (!chunkedList.length) return null;

    const lastChunkLength = chunkedList[chunkedList.length - 1].length;
    const isLastChunk =
      lastChunkLength === items.length && lastChunkLength !== params.pageSize;

    return {
      from: isLastChunk
        ? params.list.length - items.length + 1
        : (activePage - 1) * params.pageSize + 1,
      to: isLastChunk ? params.list.length : activePage * params.pageSize,
    };
  }, [chunkedList, activePage, params.list, params.pageSize, items]);

  useEffect(() => {
    if (!params.list) return;

    const currentPageItems = chunkedList[activePage - 1];

    if (currentPageItems) {
      setItems(currentPageItems);
    } else if (activePage > 1) {
      setActivePage(activePage - 1);
    } else {
      setItems([]);
    }
  }, [params.list, activePage, params.pageSize, chunkedList]);

  return {
    items,
    setItems,
    activePage,
    setActivePage,
    chunkedList,
    pageRange,
  };
};
