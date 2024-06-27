import { useState } from 'react';

import { Control, Controller, FieldErrors } from 'react-hook-form';
import { z } from 'zod';

import { FormGenerator } from '@homework-task/components/FormGenerator';

const validationSchema = z.object({
    title: z
        .string()
        .nonempty('Title is required')
        .max(100, 'Title must be at most 100 characters'),
    body: z
        .string()
        .nonempty('Body is required')
        .max(500, 'Body must be at most 500 characters'),
});

interface FormData {
    title: string;
    body: string;
}

const PostForm = () => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const renderForm = ({
        control,
        errors,
    }: {
        control: Control<FormData>;
        errors: FieldErrors<FormData>;
    }) => (
        <>
            <div>
                <label htmlFor="title">Title</label>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => <input id="title" {...field} />}
                />
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <Controller
                    name="body"
                    control={control}
                    render={({ field }) => <textarea id="body" {...field} />}
                />
                {errors.body && <span>{errors.body.message}</span>}
            </div>
        </>
    );

    const onSubmitSuccess = (data: FormData) => {
        setSuccessMessage(
            `Post created successfully! Title: ${data.title}, Body: ${data.body}`
        );
    };

    return (
        <>
            <FormGenerator<FormData>
                validationSchema={validationSchema}
                renderForm={renderForm}
                onSubmitSuccess={onSubmitSuccess}
            />

            {successMessage && <div>{successMessage}</div>}
        </>
    );
};

export default PostForm;
