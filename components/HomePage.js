import Image from "next/image";
import { useState } from "react";
import Copy from "./Copy";
import Footer from "./Footer";
import Navs from "./Navs";
import styles from '../styles/Home.module.css'
import people from '../assets/people.png';
import iconBrand from '../assets/iconBrand.svg'

const HomePage = () => {
    const [input, setInput] = useState([]);
    const [data, setData] = useState([]);
    const [result, setResult] = useState(null);
  
    const [short1, setShort] = useState(null);
  
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
          console.log("links here", result.data.result.code);
        });
    };
    const onKeyDown = (ev) => {
      if (ev.keyCode === 13) {
        onSearch();
      }
    };
  
    return (
      <div>
        <Navs />
        <div>
          <h1 className={styles.heading}>MORE THAN JUST SHORTER LINKS</h1>
          <div className={styles.image}>
            <Image src={people} alt="loading..." />
          </div>
          <div>
          
            <div className={styles.resultDiv}>
           
            <Copy />
  
              <div className={styles.advance}>
                <h1>Advanced Statics</h1>
                <p>
                  Track how your links are performing across the web with our
                  statics dashboard
                </p>
              </div>
              <div className={styles.Maincard}>
                <div className={styles.card}>
                  <div className={styles.card1}>
                    <div className={styles.icondiv}>
                      <Image src={iconBrand} alt="loading..." />
                    </div>
                    <h3>Brand Recognize</h3>
                    <p>
                      Boost Your Brand Recognize with each click. generic links
                      don't mean a thing. Branded linkes helps in still confidance
                      in your content.
                    </p>
                  </div>
                  <div className={styles.card1}>
                    <div className={styles.icondiv}>
                      <Image src={iconBrand} alt="loading..." />
                    </div>
                    <h3>Brand Recognize</h3>
                    <p>
                      Boost Your Brand Recognize with each click. generic links
                      don't mean a thing. Branded linkes helps in still confidance
                      in your content.
                    </p>
                  </div>
                  <div className={styles.card1}>
                    <div className={styles.icondiv}>
                      <Image src={iconBrand} alt="loading..." />
                    </div>
                    <h3>Brand Recognize</h3>
                    <p>
                      Boost Your Brand Recognize with each click. generic links
                      don't mean a thing. Branded linkes helps in still confidance
                      in your content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.boost}>
              <div>
                <h1 className={styles.text}>Boost Your Links Today</h1>
                <button className={styles.getStated}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
       <div>
       <Footer/>
       </div>
      </div>
    );
  };
  
  export default HomePage;
  