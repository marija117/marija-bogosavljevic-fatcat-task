import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
    useForm,
    SubmitHandler,
    FieldValues,
    FieldErrors,
    Control,
} from 'react-hook-form';
import { useMutation } from 'react-query';
import { ZodSchema } from 'zod';

interface FormGeneratorProps<T extends FieldValues> {
    validationSchema: ZodSchema<T>;
    renderForm: (props: {
        control: Control<T>;
        errors: FieldErrors<T>;
    }) => React.ReactNode;
    onSubmitSuccess: (data: T) => void;
    onError?: (error: Error) => void;
}

export const FormGenerator = <T extends FieldValues>({
    validationSchema,
    renderForm,
    onSubmitSuccess,
    onError,
}: FormGeneratorProps<T>) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation(
        async (data: T) => {
            const postData = {
                ...data,
                userId: 1,
            };
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData),
                }
            );
            return response.json();
        },
        {
            onSuccess: (data) => {
                onSubmitSuccess(data as T);
            },
            onError: (error: Error) => {
                if (onError) {
                    onError(error);
                }
            },
        }
    );

    const onSubmit: SubmitHandler<T> = (data) => {
        mutation.mutate(data);
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(onSubmit)(e).catch((error: Error) => {
                    if (onError) {
                        onError(error);
                    }
                });
            }}
        >
            {renderForm({ control, errors })}
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {mutation.isError && <div>Submission failed</div>}
        </form>
    );
};
