
const ShowMoreProducts = ({ id }) => {

  const ClickMe = () => {
    console.log("Button Clicked", id);
  };
  return (
    <>
      <button onClick={ClickMe}>Show More</button>
    </>
  );
};

export default ShowMoreProducts;
