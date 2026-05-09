type CardProps = {
  image: string;
  title: string;
  reverse?: boolean;
  children?: React.ReactNode;
};

const CardFloating = ({ image, title, reverse, children }: CardProps) => {
  return (
    <div className="bg-white px-8 w-full border border-border mt-24">
      <div
        className={`flex items-center gap-8 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-64 object-cover w-96 -translate-y-12"
        />

        <div className="p-8 flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero accusamus eveniet porro commodi, magnam quod eos magni sed
            dolores dolore, molestias, repellendus unde? Porro laudantium
            perspiciatis sapiente impedit beatae!
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardFloating;
