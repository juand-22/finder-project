import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../css/index.css';
import "../assets/steve.png"

function Search() {
    const [searchParams] = useSearchParams();
    const username = searchParams.get('username');
    const [data, setdata] = useState(null);
    const [avatar, setavatar] = useState('../assets/steve.png');

    useEffect(() => {
        const fetchData = async () => {
            if (!username) return;
            try {

                const uuid = await fetch(`https://srv726415.hstgr.cloud:5000/api/uuid/${username}`);

                const uuidData = await uuid.json();

                if (uuidData.id){
                    setavatar(`https://crafatar.com/avatars/${uuidData.id}`)
                }else {
                    setavatar('https://minecraftfaces.com/wp-content/bigfaces/big-steve-face.png');
                }

                const response = await fetch(`https://srv726415.hstgr.cloud:5000/api/searchuser?username=${encodeURIComponent(username)}`);

                setdata(await response.json())


            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [username]);

    return (
        <div className="container-searched">
            <div className="content">
                <div className="top-container top-container-searched">
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 7l-5 5l5 5" /><path d="M17 7l-5 5l5 5" /></svg></a>
                    <div className="content-top">
                        <p className="title">Resultados</p>
                        <p className="description">Se encontraron {data && Array.isArray(data) ? data.length : 0} resultados para: {username}</p>
                    </div>
                </div>
                <div className="center-container">
                    {data && Array.isArray(data) ? (
                        <div className="container-users-results">
                        {data.map((item, index) => (
                            <div key={index} className="content-users-results">
                                <div className="top-content-users-results">
                                    <p className="username-results">{item.name}</p>
                                    <img src={avatar} />
                                </div>
                                <div className="button-content-users-results">

                                    <p className="colum-users"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /></svg> Password: </p>

                                    <div className="code-container">
                                        <p>{item.password || 'null'}</p>
                                    </div>
                                </div>
                                <div className="button-content-users-results">

                                    <p className="colum-users"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg> Ip address: </p>

                                    <div className="code-container">
                                        <p>{item.ip || 'null'}</p>
                                    </div>
                                </div>
                                <div className="button-content-users-results">
                                    <p className="colum-users"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-server"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M7 8l0 .01" /><path d="M7 16l0 .01" /></svg> Server: </p>

                                    <div className="code-container">
                                        <p>{item.server || 'null'}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <p className="error-searched">No se encontraron resultados</p>
                    )}
                </div>
                <div className="button-container">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg> Github</a>
                <p className="no_ad" id="no_ad">designed by no_ad</p>
                </div>
            </div>
        </div>
    );    
}

export default Search;