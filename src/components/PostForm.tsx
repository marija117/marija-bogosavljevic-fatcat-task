import React, { useState } from 'react';

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

const PostForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const renderForm = ({
        control,
        errors,
    }: {
        control: Control<FormData>;
        errors: FieldErrors<FormData>;
    }) => (
        <>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                >
                    Title
                </label>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            {...field}
                        />
                    )}
                />
                {errors.title && (
                    <span className="text-red text-xs italic">
                        {errors.title.message}
                    </span>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="body">
                    Body
                </label>
                <Controller
                    name="body"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="body"
                            {...field}
                        />
                    )}
                />
                {errors.body && (
                    <span className="text-red text-xs italic">
                        {errors.body.message}
                    </span>
                )}
            </div>
        </>
    );

    const onSubmitSuccess = (data: FormData) => {
        setSuccessMessage(
            `Post created successfully! Title: ${data.title}, Body: ${data.body}`
        );
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <FormGenerator<FormData>
                validationSchema={validationSchema}
                renderForm={renderForm}
                onSubmitSuccess={onSubmitSuccess}
            />
            {successMessage && (
                <div className="text-blue mt-4">{successMessage}</div>
            )}
        </div>
    );
};

export default PostForm;
