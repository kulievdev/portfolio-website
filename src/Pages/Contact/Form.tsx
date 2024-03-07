import Input from "../../Components/Input";

const Form = () => {
    return (
        <div className="flex-1 rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100 px-32 py-8 desktop::px-52">
            <form className="flex flex-col flex-1 gap-10 ">
                <Input type="input" labelText="Name" placeholder="John Doe" />
                <Input
                    type="input"
                    labelText="Email"
                    placeholder="email@example.com"
                />
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
                <button
                    className="w-full rounded-xl border border-primary-600 bg-primary-600 px-4 py-2.5 text-base font-bold text-gray-50 shadow transition-all duration-300 ease-out hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                    type="submit"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Form;
