import trollFace from '../images/troll-face.svg'

function Header() {
    return (
        <header>
            <img src={trollFace} alt="Meme troll face" />
            <h1>Meme Genarator</h1>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header