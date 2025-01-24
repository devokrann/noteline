import { hasLength, useForm } from '@mantine/form';
import { useState } from 'react';
import { Variant } from '@/enums/notification';
import { showNotification } from '@/utilities/notifications';
import { useNetwork } from '@mantine/hooks';

export const useFormListCreate = () => {
  const networkStatus = useNetwork();

  const [submitted, setSubmitted] = useState(false);

  const lengths = {
    name: { min: 2, max: 60 },
    description: { min: 0, max: 300 },
  };

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      private: false,
    },
    validate: {
      name: hasLength(
        lengths.name,
        `Between ${lengths.name.min} and ${lengths.name.max} characters`
      ),
      description: hasLength(
        lengths.description,
        `Between ${lengths.description.min} and ${lengths.description.max} characters`
      ),
    },
  });

  const parseValues = () => {
    return {
      firstName: form.values.name.trim(),
      lastName: form.values.description.trim(),
      private: form.values.private,
    };
  };

  const handleSubmit = async () => {
    if (form.isValid()) {
      try {
        if (!networkStatus.online) {
          return showNotification({
            variant: Variant.WARNING,
            title: 'Network Error',
            desc: 'Please check your internet connection.',
          });
        }

        setSubmitted(true);
      } catch (error) {
        showNotification({
          variant: Variant.FAILED,
          desc: (error as Error).message,
        });
      } finally {
        setSubmitted(false);
      }
    }
  };

  return {
    form,
    submitted,
    handleSubmit,
    lengths,
  };
};
