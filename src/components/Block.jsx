
const Block = ({ img, heading, title }) => {
  return (
    <div className=" max-lg:h-[30vh] hover:scale-110 duration-350 flex flex-col items-center justify-center gap-5  ">
      <img className=" dark:bg-[#f5eaea] w-[15%] " src={img}></img>
      <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase ">{heading}</h2>
      <p className=" max-md:text-[15px] max-lg:h-[20vh] flex items-center text-center h-[20vh] font-normal ">{title}</p>
    </div>
  );
};

export default Block;



