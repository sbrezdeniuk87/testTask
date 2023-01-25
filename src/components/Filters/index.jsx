import './Filters.css'

export const Filters = ({selectedGlasses, onFilter}) => {
    const nameArray = selectedGlasses.split('-');

    const colorHandler = (event) => {
        onFilter('color', event.target.title);
    }

    const shapeHandler = (event) => {
        onFilter('shape', event.target.title);
    }
    return (
        <div className="filters-container">
            <div></div>
            <div className="header-collection-name">
                {nameArray[0]} {nameArray[1]}
            </div>
            <div className="header-filter-search-div">
                <div className="filter-div-colors">
                    <button className="dropbtn">Colour</button>
                    <div className="dropdown-content-colors">
                        <span title='black' onClick={colorHandler}>Black</span>
                        <span title='tortoise' onClick={colorHandler}>Tortoise</span>
                        <span title='coloured' onClick={colorHandler}>Coloured</span>
                        <span title='crystal' onClick={colorHandler}>Crystal</span>
                        <span title='dark' onClick={colorHandler}>Dark</span>
                        <span title='bright' onClick={colorHandler}>Bright</span>
                    </div>
                </div>
                <div className="filter-div-shape">
                    <button className="dropbtn-shape">Shape</button>
                    <div className="dropdown-content-shape">
                        <span title='square' onClick={shapeHandler}>Square</span>
                        <span title='rectangle' onClick={shapeHandler}>Rectangle</span>
                        <span title='round' onClick={shapeHandler}>Round</span>
                        <span title='cat-eye' onClick={shapeHandler}>Cat-Eye</span>
                    </div>
                </div>
            </div>            
        </div>
    );
}