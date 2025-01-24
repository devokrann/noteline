'use client';

import React from 'react';
import { useState } from 'react';
import {
  Combobox,
  ComboboxDropdown,
  ComboboxEmpty,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTarget,
  TextInput,
  useCombobox,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Search() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase().trim())
      )
    : groceries;

  const options = filteredOptions.map((item) => (
    <ComboboxOption value={item} key={item}>
      {item}
    </ComboboxOption>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
      withinPortal={false}
    >
      <ComboboxTarget>
        <TextInput
          placeholder="Search"
          leftSection={
            <IconSearch size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
          }
          size="sm"
          variant="filled"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </ComboboxTarget>

      <ComboboxDropdown>
        <ComboboxOptions>
          {options.length === 0 ? (
            <ComboboxEmpty>Nothing found</ComboboxEmpty>
          ) : (
            options
          )}
        </ComboboxOptions>
      </ComboboxDropdown>
    </Combobox>
  );
}

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
];
