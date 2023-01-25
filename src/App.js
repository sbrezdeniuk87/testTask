import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import { Navbar } from './components/Navbar';
import { Filters } from './components/Filters';
import { WomenPage } from './pages/WomenPage';
import { MenPage } from './pages/MenPage';

const MainContents = styled.div`
    border-left: 1px solid #000;
    border-right: 1px solid #000;
`;

function App() {
    const navigation = useNavigate();
    const [selectedGlasses, setSelectedGlasses] = useState('spectacles-women');
    const [filters, setFilters] = useState({
        color: '',
        shape: ''
    });

    const selectedGlassesHandler = (selected) => {
        setSelectedGlasses(selected);
    };

    const setFiltersHandler = (filed, value) => {
        setFilters(prevFilters => ({...prevFilters, [filed]: value}))
    }

    useEffect(() => {
        if(selectedGlasses === 'spectacles-men' || selectedGlasses === 'sunglasses-men') {
            navigation('/men');
        }
        if(selectedGlasses === 'spectacles-women' || selectedGlasses === 'sunglasses-women') {
            navigation('/');
        }
    }, [selectedGlasses]);



    return (
        <>
            <Navbar onSelected={selectedGlassesHandler}/>
            <Filters selectedGlasses={selectedGlasses} onFilter={setFiltersHandler}/>
            <MainContents>
                <Routes>
                    <Route path='/' element={<WomenPage selectedGlasses={selectedGlasses} filters={filters}/>}/>
                    <Route path='/men' element={<MenPage selectedGlasses={selectedGlasses} filters={filters}/>}  />
                </Routes>
            </MainContents>
        </>
        
    );
}

export default App;
