import Image from "next/image";

const NotFound = () => {
  return (
    <div>
      <p>{"Not found"}</p>
      <Image src={"../gang_rocket.png"} alt="Picture of gank rocket" />
    </div>
  )
}

export default NotFound;