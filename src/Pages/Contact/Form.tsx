import Cta from "../../Components/Cta";
import Input from "../../Components/Input";

const Form = () => {
  return (
    <div className="xs:px-12 flex flex-1 rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100 px-8 py-10 sm:px-16 md:px-24 laptop:px-20 desktop:px-32">
      <form className="flex flex-1 flex-col items-center gap-10 ">
        <Input type="input" labelText="Name" placeholder="John Doe" />
        <Input type="input" labelText="Email" placeholder="email@example.com" />
        <Input
          type="input"
          labelText="Phone Number"
          placeholder="(666) 666-6666"
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
