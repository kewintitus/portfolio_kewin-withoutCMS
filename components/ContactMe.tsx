import React from 'react';

import { PhoneIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';

import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    window.location.href = `mailto:kewintitus@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col items-center justify-center">
      <h3
        className="absolute z-10 top-24 uppercase 
        tracking-[5px] md:tracking-[15px]
        text-gray-500 
        text-xl"
      >
        Contact
      </h3>
      <div>
        <h4 className="text-xl font-semibold text-center mb-3">
          Get in <span className="underline decoration-red-600">Touch</span>
        </h4>
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-3">
            <PhoneIcon className="text-red-500 h-5 w-5  " />
            <p>+91 9791815544</p>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPinIcon className="text-red-500 h-5 w-5" />
            <p>Chennai, Tamil Nadu</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-80 md:w-fit mx-auto text-black mt-6"
        >
          <div className="flex gap-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contact-input w-[50%]"
              type="text"
            ></input>
            <input
              {...register('email')}
              placeholder="Email"
              className="contact-input w-[50%]"
              type="email"
            ></input>
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contact-input "
            type="text"
          ></input>
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contact-input"
          />
          <button
            type="submit"
            className="bg-red-400 text-gray-100 py-2 px-10 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
