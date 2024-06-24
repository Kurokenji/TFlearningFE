import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Form from 'react-bootstrap/Form';

const Search = ({ addQuest }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = async (query) => {
        try {
            const response = await axios.post('http://localhost:8000/api/quest/get-by-search-name', {
                searchValue: query
            });
            setResults(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

    useEffect(() => {
        if (query) {
            debouncedFetchResults(query);
        } else {
            setResults([]);
        }
    }, [query, debouncedFetchResults]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSelectQuest = (id) => {
        console.log(id);
        addQuest(id);
        setQuery('');
        setResults([]);
    };

    return (
        <div>
            <Form.Group className="mb-3" controlId="formQuest">
                  <Form.Control type="text" placeholder="Search for a quest"
                      onChange={handleChange}
                      value={query}
                      name="quest" />
            </Form.Group>
            {/* <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for a quest"
            /> */}
            <ul>
            {results.map(item => (
            <li key={item.id} onClick={() => handleSelectQuest(item.id)}>
                <p>Câu hỏi: {item.content}</p>
                <p>ID: {item.id}</p>
            </li>
            ))}
            </ul>
        </div>
    );
};

export default Search;