import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  console.log(inputValue);
  const [shortenLink, setShortenLink] = useState("Hello world");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
        setLoading(true)
    } catch (err) {
    } finally {
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="result">
      <p> {shortenLink}</p>

      <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
        <button className={copied ? "copied" : ""}>Copy to clipboard</button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkResult;
