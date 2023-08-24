import React, {useState} from 'react';

import streetwear1 from '../Images/streetwear1.webp';
import vintage from '../Images/vintage-style_1.jpg';
import casual from '../Images/casual-style_1.jpg';
import '../Styles/SelectClothes.css';
import Footer from '../Components/Footer';
import Popup from '../Components/Popup';
import men_sizes from '../Images/men-sizes.png';
import women_sizes from '../Images/women-sizes.png';



function SelectClothes() {
    

    const [buttonPopup, setButtonPopup] = useState(false);

    const [index, setIndex] = useState(0);

    const [counter, setCounter] = useState(0);

    const [gender, setGender] = useState(0);

    const nextSlide = () => {
        if(index !== images.length - 1 ){
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    const previousSlide = () => {
        if(index !== 0 ){
            setIndex(index - 1)
        }
        else {
            setIndex(images.length-1)
        }
    }

    const goToSlide = dot_index => {
        setIndex(dot_index)
    }

    function maleOnClick() {
        setCounter(0);
        setGender(0);
    }

    function femaleOnClick() {
        setCounter(0);
        setGender(1);
    }

    
    
    const images = [ { title: "Streetwear", img: streetwear1 , description: "Streetwear is a fashion style that originated from urban culture and is characterized by its casual, comfortable, and often oversized clothing. It emerged from skate, surf, and hip-hop subcultures in the 1980s and has since become a prominent and influential trend in modern fashion. Streetwear typically includes elements like graphic t-shirts, hoodies, sneakers, caps, and baggy jeans, often featuring bold logos, pop culture references, and unique designs. This style emphasizes self-expression and individuality, often blurring the lines between high fashion and everyday attire"}, 
    { title: "Vintage", img: vintage, description: "Vintage style clothing refers to garments and accessories that are inspired by or designed to resemble fashion trends from past eras, typically from the 1920s to the 1990s. It involves incorporating elements from different decades into contemporary outfits, creating a sense of nostalgia and historical flair. Vintage clothing can range from elegant and sophisticated to quirky and eclectic, reflecting the diverse fashion trends of bygone eras. This style often celebrates the craftsmanship and unique details of older clothing, embracing classic silhouettes, fabrics, patterns, and accessories."}, 
    { title: "Casual", img: casual, description: "Casual wear style is characterized by comfortable, relaxed, and everyday clothing choices that prioritize ease and practicality over formality. It encompasses a wide range of garments suitable for informal occasions and daily activities. Key features of casual wear include comfortable fabrics, simple cuts, and versatile pieces that can be mixed and matched effortlessly. T-shirts, jeans, sweatshirts, leggings, sneakers, and other laid-back items are commonly associated with this style. While casual wear is often relaxed in nature, it doesn't necessarily mean sloppy or unkempt. The casual wear style is a go-to option for casual outings, errands, and social gatherings that don't require formal dress codes." },];

    

    return (
        <body>
            <div id="wrapper_selectClothes">
            <div id="navbar_address">
                    <ul id="list_address">
                        <a href="/plan-selection">Select Plan</a>
                        <a href="/address">Address</a>
                        <a href="/checkout">Checkout</a>
                        <a href="/clothes-selection">Select Clothes</a>
                    </ul>
            </div>
             <label>{images[index].title}</label>
             <div id="wrapper_carousel_selectClothes">
                <button onClick={()=>{previousSlide()}}>Previous</button>
                <div id="carousel_selectClothes" style={{backgroundImage: `url(${images[index].img})`}}>
                    <div id="wrapper_dots_selectClothes">{images.map((index,dot_index)=>(
                        <div key={dot_index} id="dots_selectClothes" onClick={()=>{goToSlide(dot_index)}}>•</div>
                    ))}</div>
                </div>
                <button onClick={()=>{nextSlide()}}>Next</button>
             </div>
             
             <label>{images[index].description}</label>
             <label>Gender</label>
             <select id="genders">
                <option value="" onClick={()=>{maleOnClick()}}>Male</option>
                <option value="" onClick={()=>{femaleOnClick()}}>Female</option>
                <option value="" onClick={()=>{setCounter(0)}}>Non-binary / Genderqueer</option>
                <option value="" onClick={()=>{setCounter(0)}}>Transgender</option>
                <option value="" onClick={()=>{setCounter(1)}}>Other</option>
             </select>
             <input type="text" hidden={counter !==1}></input>
             <label>Color preferences</label>
             <select id="color_options">
                <option value="classical_nautical">Classical Nautical</option>
                <option>Cool Neutrals</option>
                <option>Desert Sunset</option>
                <option>Autumnal Hues</option>
                <option>Neutral Elegance</option>
                <option>Vibrant Pop</option>
                <option>Ocean Breeze</option>
                <option>Monochrome</option>
                <option>Pastel Dream</option>
                <option>Earth Tones</option>
             </select>
             <label>Size</label>
             <label onClick={() => setButtonPopup(true)} id="size-popup">See size chart here</label>
             <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img src={men_sizes} hidden={gender !=0} className="img-sizes"></img>
                <img src={women_sizes} hidden={gender !=1} className="img-sizes"></img>
             </Popup>
             <select>
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
                <option value="">XXXL</option>
             </select>
            </div>
            <button>Continue</button>
            <Footer></Footer>
        </body>
        
    )
}

export default SelectClothes