import { useEffect, useState } from 'react'
import "./App.css"


function App() {
    const [cats, setCats] = useState([]);
    const [after, setAfter] = useState(null)

    useEffect(() => {
        const req = async () => {
            const tata = await fetch('https://www.reddit.com/r/cats.json')
            const tutu = await tata.json()
            setCats([...tutu.data.children])
            setAfter(tutu.data.after)

        }
        req()
    }, [])

    const onClick = async () => {
        const tata = await fetch(`https://www.reddit.com/r/cats.json?after=${after}`)
        const tutu = await tata.json()
        setCats([...cats,...tutu.data.children])
        setAfter(tutu.data.after)

    }
    return (
        <div className="main">
            <div className="content_main">
                {cats && cats.map(cat => (
                    <div className="content">
                        {
                            cat.data.secure_media?.reddit_video ? (
                                <video autoplay controls >
                                    <source src={cat.data.secure_media.reddit_video.fallback_url} type="video/mp4"></source>
                                </video>) : cat.data.url_overridden_by_dest && (<img src={cat.data.url_overridden_by_dest}/>)
                        }
                    </div>
                ))}
                <button className="btn" onClick={onClick}>ЕЩЕ КОТИКОВ</button>
            </div>

        </div>
    );
}

export default App;

