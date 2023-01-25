import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useGetCollections } from "../../hooks";

import { Glasse } from "../../components/Glasse";
import { LoadinWrapper } from "../../components/LoadingWrapper";

const ColectionPageMain = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    justify-items: center;
    align-items: flex-start;
    background: #fff;
`;

export const MenPage = ({selectedGlasses, filters}) => {
    const {color, shape} = filters
    const [page, setPage] = useState(1)
    const { glasses, total_count, isLoading } = useGetCollections(selectedGlasses, color, shape, page);
    const [glasseData, setGlasseData] = useState([])

    const onScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
        const maxPages = total_count / 12;
        if (scrollHeight - scrollTop <= clientHeight) {
            if(page <= maxPages) {
                setPage(prevPage => prevPage + 1);
            }            
        }
    }

    useEffect(() => {
        if(page > 1 && glasses.length !== 0) {
            setGlasseData(prevData => [...prevData, ...glasses])
        }
        return () => {
            setPage(1);
            setGlasseData([]);
        }
    }, [glasses]);

    useEffect(() => {
        document.addEventListener('scroll', onScroll);
        if(page === 1){
            setGlasseData([...glasses])
        }
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [total_count, page]);

    useEffect(() => {
        if(!!color || !!shape) {
            setPage(1);
            setGlasseData([]);
        }
    }, [color, shape]);
    return (
        <LoadinWrapper isLoading={isLoading && page === 1}>
            <ColectionPageMain>
                {glasseData.map((glasse) => <Glasse  key={glasse.id} {...glasse}/>)}
            </ColectionPageMain>
        </LoadinWrapper>
    );
}