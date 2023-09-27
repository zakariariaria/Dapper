import React, { useState } from 'react';
import { Form, Carousel, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import streetwear1 from '../Images/streetwear1.webp';
import vintage from '../Images/vintage-style_1.jpg';
import casual from '../Images/casual-style_1.jpg';
import Header from '../Components/Header';
import men_sizes from '../Images/men-sizes.png';
import women_sizes from '../Images/women-sizes.png';
import classical_nautical from '../Images/classical_nautical.png';
import cool_neutrals from '../Images/cool_neutrals.png';
import desert_sunset from '../Images/desert_sunset.png';
import autumnal_hues from '../Images/autumnal_hues.png';
import neutral_elegance from '../Images/neutral_elegance.png';
import vibrant_pop from '../Images/vibrant_pop.png';
import ocean_breeze from '../Images/ocean_breeze.png';
import monochrome from '../Images/monochrome.png';
import pastel_dream from '../Images/pastel_dream.png';
import earth_tones from '../Images/earth_tones.png';
import '../Styles/SelectClothes.css'






function SelectClothes() {

    const [isHovered, setIsHovered] = useState(false);

    const [index, setIndex] = useState(0);

    const [counter, setCounter] = useState(0);

    const [gender, setGender] = useState(0);

    const colorOptions = [
        { value: 'classical_nautical', label: 'Classical Nautical', imageUrl: classical_nautical },
        { value: 'cool_neutrals', label: 'Cool Neutrals', imageUrl: cool_neutrals },
        { value: 'desert_sunset', label: 'Desert Sunset', imageUrl: desert_sunset },
        { value: 'autumnal_hues', label: 'Autumnal Hues', imageUrl: autumnal_hues },
        { value: 'neutral_elegance', label: 'Neutral Elegance', imageUrl: neutral_elegance },
        { value: 'vibrant_pop', label: 'Vibrant Pop', imageUrl: vibrant_pop },
        { value: 'ocean_breeze', label: 'Ocean Breeze', imageUrl: ocean_breeze },
        { value: 'monochrome', label: 'Monochrome', imageUrl: monochrome },
        { value: 'pastel_dream', label: 'Ocean Breeze', imageUrl: pastel_dream },
        { value: 'earth_tones', label: 'Earth Tones', imageUrl: earth_tones },
    ];

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

    function otherOnClick() {
        setCounter(1);
        setGender(2);
    }

    const handleGenderChange = (e) => {
        const value = e.target.value;
        if (value === "0") maleOnClick();
        else if (value === "1") femaleOnClick();
        else if (value === "2") otherOnClick();
        else setCounter(0);
    }

    const CustomOption = ({ data, ...props }) => (
        <div {...props.innerProps} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={data.imageUrl} alt={data.label} style={{ width: '30px', marginRight: '10px' }} />
            <span style={{ color: 'black' }}> {data.label} </span>
        </div>
    );

    const CustomSingleValue = ({ data }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={data.imageUrl} alt={data.label} style={{ width: '30px', marginRight: '10px' }} />
            <span style={{ color: 'black' }}> {data.label} </span>
        </div>
    );


    const images = [{ title: "Streetwear", img: streetwear1, description: "Streetwear is a fashion style that originated from urban culture and is characterized by its casual, comfortable, and often oversized clothing. It emerged from skate, surf, and hip-hop subcultures in the 1980s and has since become a prominent and influential trend in modern fashion. Streetwear typically includes elements like graphic t-shirts, hoodies, sneakers, caps, and baggy jeans, often featuring bold logos, pop culture references, and unique designs. This style emphasizes self-expression and individuality, often blurring the lines between high fashion and everyday attire" },
    { title: "Vintage", img: vintage, description: "Vintage style clothing refers to garments and accessories that are inspired by or designed to resemble fashion trends from past eras, typically from the 1920s to the 1990s. It involves incorporating elements from different decades into contemporary outfits, creating a sense of nostalgia and historical flair. Vintage clothing can range from elegant and sophisticated to quirky and eclectic, reflecting the diverse fashion trends of bygone eras. This style often celebrates the craftsmanship and unique details of older clothing, embracing classic silhouettes, fabrics, patterns, and accessories." },
    { title: "Casual", img: casual, description: "Casual wear style is characterized by comfortable, relaxed, and everyday clothing choices that prioritize ease and practicality over formality. It encompasses a wide range of garments suitable for informal occasions and daily activities. Key features of casual wear include comfortable fabrics, simple cuts, and versatile pieces that can be mixed and matched effortlessly. T-shirts, jeans, sweatshirts, leggings, sneakers, and other laid-back items are commonly associated with this style. While casual wear is often relaxed in nature, it doesn't necessarily mean sloppy or unkempt. The casual wear style is a go-to option for casual outings, errands, and social gatherings that don't require formal dress codes." },];

    return (
        <div className="container-fluid">
            <Header />
            <div className="my-4">
                <div className="d-flex align-items-center">
                    <Carousel activeIndex={index} onSelect={goToSlide} interval={null} className="flex-grow-1">
                        {images.map((image, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-50" // This will make the image take the full width of the carousel
                                    src={image.img}
                                    alt={image.title}
                                    style={{ marginLeft: "25%" }}
                                />
                                <Carousel.Caption>
                                    <h3>{image.title}</h3>
                                    <p>{image.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="d-flex flex-column text-white">
                    <Form.Group controlId="genderSelect">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" custom onChange={(e) => handleGenderChange(e)}>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option >Non-binary / Genderqueer</option>
                            <option >Transgender</option>
                            <option value="2">Other</option>
                        </Form.Control>
                    </Form.Group>
                    {counter === 4 && (
                        <Form.Group controlId="otherGenderInput">
                            <Form.Control type="text" placeholder="Please specify" />
                        </Form.Group>
                    )}

                    <Form.Control type="text" hidden={counter !== 1} />


                    <Form.Group controlId="colorPreferences" className="mb-3">
                        <Form.Label>Color preferences</Form.Label>
                        <Select
                            options={colorOptions}
                            isSearchable={false}
                            components={{
                                Option: CustomOption,
                                SingleValue: CustomSingleValue
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="topsSize">
                        <Form.Label>Tops Size</Form.Label>
                        <OverlayTrigger
                            placement="right"
                            overlay={
                                <Tooltip id="sizeChartTooltip">
                                    <img
                                        src={gender === 0 ? men_sizes : women_sizes}
                                        className={`img-sizes ${isHovered ? 'img-hovered' : ''}`}
                                        alt="Size Chart"
                                    />
                                </Tooltip>
                            }
                            onToggle={(isShown) => setIsHovered(isShown)}
                        >
                            <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>See size chart here</span>
                        </OverlayTrigger>

                        <Form.Control as="select" custom>
                            <option value="S">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">XXL</option>
                            <option value="">XXXL</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="bottomsSize">
                        <Form.Label>Bottoms Size</Form.Label>
                        <Form.Control as="select" custom>
                            <option value="S">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">XXL</option>
                            <option value="">XXXL</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                <button>Continue</button>
            </div>
        </div>
    );
}

export default SelectClothes;
