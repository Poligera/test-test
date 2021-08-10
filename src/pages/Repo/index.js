import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RepoCard, Form } from '../../components';
import './style.css'

const Repo = () => {
    const [repos, setRepos] = useState([]);
    const [username, setUsername] = useState("");
    const [ error, setError ] = useState("");

    const updateUsername = (value) => {
        setUsername(value);
    }

    const fetchRepos = async () => {
        try {
            let data = await axios.get(`https://api.github.com/users/${username}/repos`);
            const array = data.data.reverse().map(repo => {
                let repoName = repo.name;
                let url = repo.html_url;
                let forks = repo.forks;
                let openIssues = repo.open_issues;
                let watchers = repo.watchers;
                let language = repo.language;
                return {repoName, url, forks, openIssues, watchers, language};
                }
            );
            setRepos(array);
        } catch (err) {
            console.warn(err);
            setError("Sorry, wrong username");
        }
    }

    useEffect(() => fetchRepos(), [username])


    const renderCards = data => data.map((repoEntry, i) => <RepoCard repoName={repoEntry.repoName} key={i} link={repoEntry.url} language={repoEntry.language} forks={repoEntry.forks} openIssues={repoEntry.openIssues} watchers={repoEntry.watchers}/>)


    return (
        <>
        <Form updateUsername={updateUsername}/>
        {repos? renderCards(repos): <p id="error-msg">{error}</p> }
        </>
    )
}

export default Repo;