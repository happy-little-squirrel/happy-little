const List = ({ heading, img }) => {

  return (
    <div className=" max-lg:h-[24%] bg-white h-[80vh] w-[100%] flex relative ">
      <img className=" w-[100%] hover:opacity-100 object-cover opacity-80 " src={img}></img>
      <h3 className=" max-md:text-[15px] max-lg:text-[18px] absolute flex justify-center items-center h-[100%] text-center w-[100%] text-[#f5eaea] text-[20px] uppercase " >{heading}</h3>
    </div>
  );
};

export default List;
