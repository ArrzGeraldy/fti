const ContactCard = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-white border border-border px-6 py-8 ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="your name"
            className="text-sm w-full px-2 py-3 bg-[#F5F5F5] border border-border     rounded-md outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="your email"
            className="text-sm w-full px-2 py-3 bg-[#F5F5F5] border border-border     rounded-md outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-1 mt-6">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="your subject"
          className="text-sm w-full px-2 py-3 bg-[#F5F5F5] border border-border     rounded-md outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div className="flex flex-col space-y-1 mt-6">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="your message"
          className="text-sm w-full px-2 py-3 bg-[#F5F5F5] border border-border     rounded-md outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 h-44"
        ></textarea>
      </div>

      <button className="bg-primary-500 font-semibold text-sm rounded-lg px-8 py-2 text-white mt-6 cursor-pointer hover:bg-primary-600 transition-all">
        Send
      </button>
    </div>
  );
};

export default ContactCard;
