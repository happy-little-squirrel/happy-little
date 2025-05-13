
const Block = ({ img, heading, title }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-[20px]  ">
      <img className=" w-[15%] " src={img}></img>
      <h2 className=" uppercase text-[20px] ">{heading}</h2>
      <p className=" text-center h-[50%] font-normal ">{title}</p>
    </div>
  );
};

export default Block;
