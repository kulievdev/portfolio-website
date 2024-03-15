import Cta from "../../Components/Cta";
import Input from "../../Components/Input";

const Form = () => {
  return (
    <div className="flex flex-1 justify-center rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100">
      <form className=" flex w-full flex-col gap-10 p-6 xl:p-12 bigDesktop:p-16">
        <Input type="input" labelText="Name" placeholder="John Doe" />
        <Input type="input" labelText="Email" placeholder="email@example.com" />
        <Input
          type="input"
          labelText="Phone Number"
          placeholder="(222) 222-2222"
        />
        <Input
          type="textarea"
          labelText="Message"
          placeholder="How can I help you?"
        />
        <Cta type="send message" />
      </form>
    </div>
  );
};

export default Form;
