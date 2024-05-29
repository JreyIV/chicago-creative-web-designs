import { contact_background } from "../assets/images";

const ContactPage = () => {
  return (
    <main className="bg-[#f8f7ff] min-h-lvh max-w-[1920px] mx-auto overflow-x-hidden">
      <div
        className="h-[25rem] max-md:h-[15rem] overlay flex justify-center items-center"
        style={{
          backgroundImage: `url(${contact_background})`,
          backgroundPosition: "0% 50%",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-poppins text-4xl font-bold text-white mt-20 tracking-wider">
          Contact
        </h1>
      </div>
    </main>
  );
};

export default ContactPage;
