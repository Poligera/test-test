import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RepoCard, Form } from '../../components';
import './style.css'

const Repo = () => {
    const [repos, setRepos] = useState([]);
    const [username, setUsername] = useState("");
    const [ error, setError ] = useState(null);

    const updateUsername = (value) => {
        setUsername(value);
    }

    const fetchRepos = async () => {
        try {
            setError(null);
            let { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
            if (!data.length ) {
                setError("Sorry, this user has no public repos");
            } else { 
                
                const array = data.reverse().map(repo => {
                let repoName = repo.name;
                let url = repo.html_url;
                let forks = repo.forks;
                let openIssues = repo.open_issues;
                let watchers = repo.watchers;
                let language = repo.language;
                return {repoName, url, forks, openIssues, watchers, language};
                });
                setRepos(array);
            }
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        if (username) {
            fetchRepos()
        }
    }, [username]);


    const renderCards = data => data.map((repoEntry, i) => <RepoCard repoName={repoEntry.repoName} key={i} link={repoEntry.url} language={repoEntry.language} forks={repoEntry.forks} openIssues={repoEntry.openIssues} watchers={repoEntry.watchers}/>);

    return (
        <>
        <Form updateUsername={updateUsername}/>
        {error? <p id="error-msg">{error}</p>: renderCards(repos)}
        </>
    )
}

export default Repo;