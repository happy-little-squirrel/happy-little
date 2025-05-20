
const Block = ({ img, heading, title }) => {
  return (
    <div className=" hover:opacity-100 hover:duration-350 duration-350 hover:scale-110 opacity-55 flex flex-col items-center justify-center gap-[20px]  ">
      <img className=" w-[15%] " src={img}></img>
      <h2 className=" uppercase text-[20px] ">{heading}</h2>
      <p className=" text-center font-normal ">{title}</p>
    </div>
  );
};

export default Block;
