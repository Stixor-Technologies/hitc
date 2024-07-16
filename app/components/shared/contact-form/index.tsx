"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { ContactFormSchema } from "@/app/utils/formik-schema";
import React, { FC, useState } from "react";
import LinkButton from "../link-button/link-button";
import MapComponent from "../map/map-component";
import toast from "react-hot-toast";

type ContactFormProps = {
  isDark?: boolean;
};

const ContactForm: FC<ContactFormProps> = ({ isDark }) => {
  const [loading, setLoading] = useState<boolean>(false);

  type FormValue = {
    name: string;
    email: string;
    message: string;
  };

  const formFields = [
    {
      fieldType: "text",
      fieldName: "name",
      placeholder: "Enter your name",
    },

    {
      fieldType: "text",
      fieldName: "email",
      placeholder: "Enter you email address",
    },

    {
      fieldType: "textarea",
      fieldName: "message",
      placeholder: "Enter your message",
    },
  ];

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = async (
    values: FormValue,
    formikHelpers: FormikHelpers<FormValue>,
  ) => {
    setLoading(true);
    try {
      const emailTemplate = `<div>
        <p>New inquiry from: ${values?.name} - ${values?.email} </p>
        <p>Message: ${values.message} </p>
        </div>`;

      const res = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          htmlContent: emailTemplate,
        }),
      });
      const data = await res.json();
      if (data === 202) {
        toast.success("Email has been sent", {
          position: "top-right",
        });

        setTimeout(() => {
          formikHelpers.resetForm();
        }, 1000);
      } else {
        toast.error("Email has been sent", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container w-full !max-w-[1316px]">
      <div
        className={`flex flex-col gap-4 overflow-hidden rounded-[20px] shadow-md md:flex-row ${isDark ? "border-[0.5px] border-white bg-[#1A1A1A]" : "bg-white"}`}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ContactFormSchema}
        >
          {({ errors, touched }) => (
            <>
              <div
                className={`px-4 py-7 sm:px-7 md:w-[50%] md:px-10 lg:px-16 lg:py-12 xl:px-[85px] ${isDark ? "text-white" : "text-dark-gray"}`}
              >
                <div className=" ">
                  <h4 className="text-3xl md:text-4xl lg:text-[53px] lg:leading-tight ">
                    Contact Us
                  </h4>

                  <Form>
                    <div
                      className={`mt-4 flex flex-col gap-5 text-inherit md:gap-[1.057rem]`}
                    >
                      {formFields?.map(
                        ({ fieldType, fieldName, placeholder }) => {
                          if (fieldType === "textarea") {
                            return (
                              <div key={fieldName} className="">
                                <label
                                  htmlFor={fieldName}
                                  className="font-bold capitalize"
                                >
                                  {fieldName}
                                </label>
                                <Field
                                  as="textarea"
                                  name={fieldName}
                                  className={`w-full resize-none rounded-[0.453rem] border border-light-silver ${isDark ? "bg-[#242424]" : "bg-white"} px-4 py-2 placeholder-light-silver focus:outline-dark-gray`}
                                  placeholder={placeholder}
                                  rows={4}
                                />
                                {touched.message && errors.message && (
                                  <p className="ml-2 mt-1.5 text-xs italic text-red-400">
                                    {errors.message as string}
                                  </p>
                                )}
                              </div>
                            );
                          }

                          return (
                            <div key={fieldName}>
                              <label
                                htmlFor={fieldName}
                                className="font-bold capitalize"
                              >
                                {fieldName}
                              </label>
                              <Field
                                name={fieldName}
                                className={`h-11 w-full rounded-[0.453rem] border border-light-silver px-4 placeholder-light-silver focus:outline-dark-gray ${isDark ? "bg-[#242424]" : "bg-white"}`}
                                placeholder={placeholder}
                              />

                              {touched[fieldName as keyof typeof touched] &&
                                errors[fieldName as keyof typeof touched] && (
                                  <p className="ml-2 mt-1.5 text-xs italic text-red-400">
                                    {
                                      errors[
                                        fieldName as keyof typeof touched
                                      ] as string
                                    }
                                  </p>
                                )}
                            </div>
                          );
                        },
                      )}
                    </div>
                    <LinkButton
                      as={"button"}
                      loading={loading}
                      type="submit"
                      text={"Send Message"}
                      variant="sm"
                      styles={
                        "sm:max-w-[210px] mt-3.5 lg:mt-7 hover:translate-x-0"
                      }
                    />
                  </Form>
                </div>
              </div>
            </>
          )}
        </Formik>

        <MapComponent />
      </div>
    </div>
  );
};

export default ContactForm;
