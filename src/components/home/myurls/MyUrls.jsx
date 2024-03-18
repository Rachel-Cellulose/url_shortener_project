import { useState } from "react";
import LinkResult from "../LinkResult";
import "./MyUrls.css";
const MyUrls = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }
  return (
    <section>
      <div className="url-container">
        <div className="url-background">
          <div className="url-header">
            <form>
              <div className="url-box">
                <input
                  type="text"
                  placeholder="Paste url here ...."
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <div className="new-url">
                  <input
                    className="url-domain"
                    type="text"
                    placeholder="Choose Domain"
                    value=""
                  />
                  <input
                    className="url-alias"
                    type="text"
                    placeholder="Type alias here"
                    value=""
                  />
                </div>
                <LinkResult />

                <button onClick={handleClick}>Trim URL</button>
              </div>

              <p>
                By clicking TrimURL, I agree to the Terms of Service, <br />
                Privacy Policy and Use of Cookies.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyUrls;
