// import styles from './List.module.css';

const List = ({ heading, img }) => {
  console.log(typeof img);

  return (
    <div className={`w-[300px] h-[150px] bg-[url(${img})]`}>
      <h3 className={''}>{heading}</h3>
    </div>
  );
};

export default List;
