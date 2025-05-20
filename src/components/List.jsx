const List = ({ heading, img }) => {

  return (
    <div className=" relative bg-white ">
      <img className=" hover:opacity-100 opacity-80 h-[100%] " src={img}></img>
      <h3 className=" absolute top-[50%] text-center w-[100%] text-[#f5eaea] text-[20px] uppercase " >{heading}</h3>
    </div>
  );
};

export default List;
