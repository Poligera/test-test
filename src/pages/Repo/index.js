import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components'

const Repo = () => {
    const [username, setUsername] = useState("Poligera");
    const [repos, setRepos] = useState([]);

    useEffect(() => fetchRepos(), [])

    const fetchRepos = async () => {
        try {
            let data = await axios.get(`https://api.github.com/users/shavvimal/repos`);
            console.log(data);
            const array = data.data.map(repo => {
                let repoName = repo.name;
                let url = repo.html_url;
                let forks = repo.forks;
                let openIssues = repo.open_issues;
                let watchers = repo.watchers;
                return {repoName, url, forks, openIssues, watchers};
                }
            );
            setRepos(array);
        } catch (err) {
            console.warn(err);
        }
    }



    // const renderCards = data => data.map((repoEntry) => <Card repoName={repoEntry.repoName}/>)





    return (
        <>
            <p> {JSON.stringify(repos)} </p>
        {/* {renderCards(repos)}; */}

        {/* <Card/> */}
        </>
    )
}

export default Repo;