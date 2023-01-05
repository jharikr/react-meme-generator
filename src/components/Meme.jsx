import { useState, useEffect } from 'react'

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([])
    useEffect(() => {
        const getMemes = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    const getMemeImage = () => {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    type="text"
                    placeholder="Top text"
                />
                <input
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    type="text"
                    placeholder="Botton text"
                />

                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt="Randomly generated meme" className='meme-image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme