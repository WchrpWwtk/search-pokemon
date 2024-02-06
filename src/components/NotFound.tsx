import Image from "next/image";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>{"Not found"}</p>
      <Image
        src="/gang_rocket.png"
        alt="Picture of gang rocket"
        width={300}
        height={300}
      />
    </div>
  );
};

export default NotFound;
