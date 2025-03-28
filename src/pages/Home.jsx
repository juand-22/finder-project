import { useState } from 'react';
import '../css/index.css';

const responseexample = `[
  {
    "name": "pepe",
    "password": "pepe1234",
    "ip": "1.1.1.1",
    "server": "SERVER"
  },
  {
    "name": "pepe",
    "password": "pepe1234",
    "ip": "1.1.1.1",
    "server": "SERVER"
  }
]`;

function Home() {
    const [username, setusername] = useState('');

    const handleSearch = () => {
        if (username.trim()) {

            window.location.href = `/search?username=${encodeURIComponent(username)}`;
        }
    };

    return (
        <div className="container">
            <div className="content">
                <div className="top-container">
                    <p className="title">Finder</p>
                </div>
                <div className="center-container">
                    <div className="searcher">
                        <input type="text" placeholder="Ingresa el username" id="username" value={username} onChange={(e) => setusername(e.target.value)}/>
                        <button id="searchbtn" onClick={handleSearch} type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /> <path d="M21 21l-6 -6" /></svg>
                        </button>
                    </div>
                    <div className="api-use">
                        <p className="text-api">API: </p>
                        <div className="code-container">
                            <p>GET https://srv726415.hstgr.cloud:5000/api/searchuser?username=pepe</p>
                        </div>
                        <p className="text-example-response-api">Esta peticion devuelve: </p>
                        <div className="code-container">
                            <pre>
                                <code>{responseexample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <a href="https://github.com/juand-22/finder-project/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg>
                        Github
                    </a>
                    <p className="no_ad" id="no_ad">designed by no_ad</p>
                </div>
            </div>
        </div>
    );
}

export default Home;