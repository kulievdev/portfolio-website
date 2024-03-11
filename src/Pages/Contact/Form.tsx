import Cta from "../../Components/Cta";
import Input from "../../Components/Input";

const Form = () => {
  return (
    <div className="flex-1 rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100 px-32 py-8 desktop:px-52">
      <form className="flex flex-1 flex-col gap-10 ">
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
