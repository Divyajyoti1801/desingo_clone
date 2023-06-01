"use client";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });
  return (
    <div className="flex flex-col items-center justify-center gap-[160px] mb-10">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-customPeach gap-5 md:rounded-2xl py-[3.875rem] px-[1.625rem] lg:py-[4.5rem] lg:px-[3.25rem] bg-[url('/images/contact/mobile/bg-pattern-hero-contact-mobile.svg')] lg:bg-[url('/images/contact/desktop/bg-pattern-hero-desktop.svg')] bg-no-repeat bg-contain bg-left">
        <div className="w-full h-[40%] lg:h-full flex flex-col items-center justify-between lg:w-[50%]">
          <h1 className="text-subHeading text-white w-full text-center md:text-left">
            Contact Us
          </h1>
          <p className="text-bodyText text-white w-full text-center md:text-left">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="w-full h-[60%] lg:h-full flex flex-col gap-6 lg:w-[50%]">
          <Input
            id="Name"
            label="Name"
            type="text"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="Email Address"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="Phone"
            label="Phone"
            type="text"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="Your Message"
            label="Your Message"
            type="text"
            register={register}
            errors={errors}
          />
          <div className="w-full flex items-center justify-end">
            <button className="py-4 px-8 rounded-lg bg-white text-customBlack uppercase cursor-pointer hover:bg-white/30 hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-10 justify-between">
        <div className="flex flex-col items-center justify-between gap-5">
          <div className="flex item-center justify-between bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-cover">
            <Image
              src="/images/shared/desktop/illustration-canada.svg"
              alt="Canada"
              width={200}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-customBlack text-lightHeading tracking-headerSpacing1 uppercase">
              CANADA
            </h1>
            <button className="p-4 bg-customPeach text-white hover:bg-customLightPeach cursor-pointer rounded-lg transition">
              SEE LOCATION
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5">
          <div className="flex item-center justify-between bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-cover">
            <Image
              src="/images/shared/desktop/illustration-australia.svg"
              alt="Australia"
              width={200}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <h1 className="text-customBlack text-lightHeading tracking-headerSpacing1 uppercase">
              Australia
            </h1>
            <button className="p-4 bg-customPeach text-white hover:bg-customLightPeach cursor-pointer rounded-lg transition">
              SEE LOCATION
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5">
          <div className="flex item-center justify-between bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-cover">
            <Image
              src="/images/shared/desktop/illustration-united-kingdom.svg"
              alt="UK"
              width={200}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <h1 className="text-customBlack text-lightHeading tracking-headerSpacing1 uppercase">
              United Kingdom
            </h1>
            <button className="p-4 bg-customPeach text-white hover:bg-customLightPeach cursor-pointer rounded-lg transition">
              SEE LOCATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
