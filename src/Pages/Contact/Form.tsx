import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-1 justify-center rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex w-full flex-col gap-10 p-6 xl:p-12 bigDesktop:p-16"
      >
        <Input
          register={register}
          errors={errors}
          validationSchema={{
            required: "Name is required.",
            minLength: {
              value: 3,
              message: "Please enter a minimum of 3 characters.",
            },
          }}
          name="Name"
          type="text"
          labelText="Name"
          placeholder="John Doe"
        />
        <Input
          register={register}
          errors={errors}
          validationSchema={{
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          }}
          name="Email"
          type="email"
          labelText="Email"
          placeholder="email@example.com"
        />
        <Input
          register={register}
          errors={errors}
          validationSchema={{
            pattern: {
              value: /^\d{3}-\d{3}-\d{4}$/,
              message:
                "Please enter a valid 10-digit US phone number in the format xxx-xxx-xxxx",
            },
          }}
          type="tel"
          name="Phone Number"
          labelText="Phone Number"
          placeholder="222-222-2222"
        />
        <Input
          register={register}
          errors={errors}
          validationSchema={{
            required: "Message is required.",
            minLength: {
              value: 15,
              message: "Please enter a minimum of 15 characters.",
            },
          }}
          type="textarea"
          name="Message"
          labelText="Message"
          placeholder="How can I help you?"
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex-1 rounded-xl border border-primary-600 bg-primary-600 px-4 py-2.5 text-base font-bold text-gray-50 shadow transition-all duration-300 ease-out hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:bg-gray-400 bigDesktop:text-xl"
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
