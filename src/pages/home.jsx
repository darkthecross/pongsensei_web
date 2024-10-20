import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Navbar from "./navbar";
import viteLogo from '/vite.svg'
import './home.css'


function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section class="text-center container-fluid">
            <Navbar />
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Album example</h1>
                        <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <a href="#" class="btn btn-primary my-2">Main call to action</a>
                            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                        </p>
                    </div>
                </div>
            </section>
            {/* <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p>
                Click on the Vite and React logos to learn more
            </p> */}
        </>
    );
};

export default Home;
