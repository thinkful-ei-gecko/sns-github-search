import React, { useState, useEffect } from 'react';

export default function App() {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.github.com/users/${searchTerm}/repos`)
            .then(res => res.json())
            .then(repos => setSearchResults(repos))
        }

    const [searchResults, setSearchResults] = useState([]);

    return (
        <main>
            <header>
                <h1>

                </h1>
            </header>
            <section>
                <form className="gh-search-form" onSubmit={handleSubmit}>
                    <label htmlFor="gh-search">
                        <input
                            id="gh-search"
                            placeholder="find repos by user"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}>

                        </input>
                        <button type="submit">Search</button>
                    </label>
                </form>
            </section>
            <section>
                <ul>
                    {searchResults.map(repo => {
                    return (
                    <a href={repo.html_url}><li>{repo.name}</li></a>
                    )
                    })}
                </ul>
            </section>
        </main>
    )
}