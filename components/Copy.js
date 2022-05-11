import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Copy = () => {
  const [text, setText] = useState(null);

  const [input, setInput] = useState([]);
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);

  const [short1, setShort] = useState(null);
  const [short2, setShort2] = useState(null);
  const [short3, setShort3] = useState(null);
  const [short4, setShort4] = useState(null);
  const [short5, setShort5] = useState(null);
  const [short6, setShort6] = useState(null);
  const [short7, setShort7] = useState(null);
  const [short8, setShort8] = useState(null);
  const [short9, setShort9] = useState(null);
  const [copied,setCopied]=useState()
  const [copied1,setCopied1]=useState()
  const [copied2,setCopied2]=useState()
  const [copied3,setCopied3]=useState()
  const [copied4,setCopied4]=useState()
  const [copied5,setCopied5]=useState()
  const [copied6,setCopied6]=useState()
  const [copied7,setCopied7]=useState()
  const [copied8,setCopied8]=useState()

  // useEffect(()=>{
  //   axios.get("https://api.shrtco.de/v2/info?code=example").then((result)=>{
  //     setResult(result.data.result.url);
  //     console.log("data ge",result.data.result )
  //   })
  // },[])

  const [search, setSearch] = useState("");

  const onInputChange = (ev) => {
    setInput(ev.target.value);
    console.log(ev.target.value);
  };
  const onSearch = () => {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((result) => {
        setResult(result.data.result.code);
        setShort(result.data.result.short_link);
        setShort2(result.data.result.full_short_link);
        setShort3(result.data.result.short_link2);
        setShort4(result.data.result.full_short_link2);
        setShort5(result.data.result.short_link3);
        setShort6(result.data.result.full_short_link3);
        setShort7(result.data.result.share_link);
        setShort8(result.data.result.full_share_link);
        setShort9(result.data.result.original_link);

        console.log("links here", result.data.result.code);
      });
  };
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  // useEffect(() => {
  //   axios.get("https://api.shrtco.de/v2/info?code=example").then((text) => {
  //     setText(text.data.result.url);
  //     console.log("data ge", text.data.result);
  //   });
  // }, []);

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const copy = () => {
    setCopied([navigator.clipboard.writeText(short1)]);
  };

  const copy1 = () => {
    setCopied1([navigator.clipboard.writeText(short2)]);
  };
  const copy2 = () => {
    setCopied2([navigator.clipboard.writeText(short3)]);
  };
  const copy3 = () => {
    setCopied3([navigator.clipboard.writeText(short4)]);
  };
  const copy4 = () => {
    setCopied4([navigator.clipboard.writeText(short5)]);
  };
  const copy5 = () => {
    setCopied5([navigator.clipboard.writeText(short6)]);
  };
  const copy6 = () => {
    setCopied6([navigator.clipboard.writeText(short7)]);
  };
  const copy7 = () => {
    setCopied7([navigator.clipboard.writeText(short8)]);
  };
  const copy8 = () => {
    setCopied8([navigator.clipboard.writeText(short9)]);
  };

  return (
    <div>
      <div className={styles.inputs}>
        <input
          className={styles.inputsField1}
          type="text"
          onChange={onInputChange}
          value={input}
          onKeyDown={onKeyDown}
          placeholder="shorten linkes here..."
        />
        <button onClick={onSearch} type="button" className={styles.shortenButton}>
          Shorten it
        </button>
      </div>
      {short1 && short1.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short1} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy} disabled={!short1}>
            {copied?"copied":"copy"}
          </button>
        </div>
      ) : (
        <h3>Please Search Data From Here</h3>
      )}
      {short2 && short2.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short2} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy1} disabled={!short2}>
          {copied1?"copied":"copy"}
          </button>
        </div>
      ) : (
        null
      )}
      {short3 && short3.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short3} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy2} disabled={!short3}>
          {copied2?"copied":"copy"}
          </button>
        </div>
      ) : (
        null
      )}
      {short4 && short4.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short4} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy3} disabled={!short4}>
          {copied3?"copied":"copy"} 
          </button>
        </div>
      ) : (
        null
      )}
      {short5 && short5.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short5} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy4} disabled={!short5}>
          {copied4?"copied":"copy"} 
          </button>
        </div>
      ) : (
        null
      )}
      {short6 && short6.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short6} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy5} disabled={!short6}>
          {copied5?"copied":"copy"}
          </button>
        </div>
      ) : (
        null
      )}
      {short7 && short7.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short7} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy6} disabled={!short7}>
          {copied6?"copied":"copy"} 
          </button>
        </div>
      ) : (
        null
      )}
      {short8 && short8.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short8} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy7} disabled={!short8}>
          {copied7?"copied":"copy"} 
          </button>
        </div>
      ) : (
        null
      )}
      {short9 && short9.length > 0 ? (
        <div>
          <input className={styles.inputsField} type="text" value={short9} onChange={inputHandler} />
          <button className={styles.copy} onClick={copy8} disabled={!short9}>
          {copied8?"copied":"copy"}
          </button>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default Copy;
