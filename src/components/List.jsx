
const List = ({ heading, img }) => {
  return (
    <div className=" hover:scale-105 duration-1000 flex relative ">
      <img className=" max-lg:h-[18vh] lg:h-[100%] object-cover w-[100%] opacity-100 " src={img}></img>
      <h3 className=" max-md:text-[15px] max-lg:justify-center lg:text-[20px] absolute h-[100%] w-[100%] flex items-center justify-center text-center text-[#f5eaea] uppercase " >{heading}</h3>
    </div>
  );
};

export default List;
