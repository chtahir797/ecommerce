import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <>
      <div className="letterparent">
        <div className="newsparent">
          <div className="msg">
            <div className="news">
              <h2>Newsletter & Get Updates</h2>
            </div>
            <div className="letter">
              <p>Sign up for our newsletter to get up-to-date from us</p>
            </div>
          </div>
          <div className="subscription">
            <div className="subs-input">
              <input type="text" placeholder="Enter Your Email" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
