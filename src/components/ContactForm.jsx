// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import Toast from "./Toast";
import toast, { Toaster } from "react-hot-toast";

{
  /* 
import toast, { Toaster } from "react-hot-toast";
  const notify = () => toast("Here is your toast.");

<button onClick={notify}>Make me a toast</button>
      <Toaster /> */
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const checkWatch = watch();
  const successNotification = () =>
    toast((t) => <Toast onClick={() => toast.dismiss(t.id)} />);

  const onSubmit = (data) => {
    console.log(data);
    successNotification();
    reset();
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--grey-900)",
            color: "#fff",
          },
        }}
      />
      <form className="contact-card" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Contact Us</h1>

        <div className="row">
          <div className="form-input">
            <label htmlFor="firstname" className="input-label">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              {...register("firstname", { required: "This is required" })}
              aria-invalid={errors.firstname ? "true" : "false"}
              className={errors.firstname && "error-input"}
            />
            {errors.firstname?.type === "required" && (
              <p role="alert" className="error-alert">
                This Field is required
              </p>
            )}
          </div>
          <div className="form-input">
            <label htmlFor="lastname" className="input-label">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              {...register("lastname", { required: true })}
              aria-invalid={errors.lastname ? "true" : "false"}
              className={errors.lastname && "error-input"}
            />
            {errors.lastname?.type === "required" && (
              <p role="alert" className="error-alert">
                This Field is required
              </p>
            )}
          </div>
        </div>

        <div className="form-input">
          <label htmlFor="email" className="input-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            className={errors.email && "error-input"}
          />
          {errors.email && (
            <p role="alert" className="error-alert">
              Please enter a valid email address
            </p>
          )}
        </div>

        <div className="form-input">
          <label className="input-label">
            Query Type <span className="required">*</span>
          </label>
          <div className="query-input-row">
            <label
              className={
                errors.option
                  ? "radio-input error-input"
                  : checkWatch.option === "generalEnquiry"
                  ? "radio-input checked-input"
                  : "radio-input"
              }
            >
              <input
                type="radio"
                id="genEnq"
                value="generalEnquiry"
                {...register("option", { required: true })}
                aria-invalid={errors.option ? "true" : "false"}
              />{" "}
              <span>General Enquiry</span>
            </label>
            <label
              htmlFor="supportReq"
              className={
                errors.option
                  ? "radio-input error-input"
                  : checkWatch.option === "supportRequest"
                  ? "radio-input checked-input"
                  : "radio-input"
              }
            >
              <input
                type="radio"
                id="supportReq"
                value="supportRequest"
                {...register("option", { required: true })}
                aria-invalid={errors.option ? "true" : "false"}
              />{" "}
              <span>Support Request</span>
            </label>
          </div>
          {errors.option && (
            <p role="alert" className="error-alert">
              Please select a query type
            </p>
          )}
        </div>

        <div className="form-input">
          <label htmlFor="message" className="input-label">
            Message <span className="required">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className={errors.message && "error-input"}
          ></textarea>
          {errors.message && (
            <p role="alert" className="error-alert">
              This field is required
            </p>
          )}
        </div>

        <div className="consent-check">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            {...register("consentcheck", { required: true })}
            aria-invalid={errors.consentcheck ? "true" : "false"}
          />{" "}
          <label htmlFor="consent">
            I consent to to being contacted by the team.{" "}
            <span className="required">*</span>
          </label>
        </div>
        {errors.consentcheck && (
          <p role="alert" className="error-alert">
            To submit this form, Please consent to be contacted
          </p>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
