import { useState } from 'react';
import './Navbar.css';


export const Navbar = ({ onSelected }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenSubMenu, setIsOpenSubMenu] = useState('');

    const openMenuHover = () => {
        setIsOpenMenu(true);
    }

    const closedMenuHover = () => {
        setIsOpenMenu(false);
    }

    const openSubMenuHover = (event) => {
        setIsOpenSubMenu(event.target.id);
    }

    const closedSubMenuHover = () => {
        setIsOpenSubMenu('');
    }

    const closedAllMenu = (selected) => {   
        setIsOpenSubMenu('');
        setIsOpenMenu(false);
        onSelected(selected);
    };

    return (
        <div className='bloobloom-header'>
            <div className={`bloobloom-side-menu ${isOpenMenu && 'bloobloom-side-menu-open'}`} onMouseLeave={closedMenuHover}>
                <div className='sidemenu-main'>
                    <div id='spectacles' className='sidemenu-main-tab' onMouseEnter={openSubMenuHover} onMouseLeave={closedSubMenuHover}>
                        <span className='sidemenu-tab-title'>Spectacles</span>
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" className="sidemenu-tab-icon">
                            <path d="M1 1L9 8.2L1 15.4" stroke="black" strokeOpacity="0.85" strokeWidth="1.5"></path>
                        </svg>
                        <div className={`bloobloom-side-sub-menu ${isOpenSubMenu === 'spectacles' && 'bloobloom-side-sub-menu-open'}`}>
                            <div className='side-sub-menu-main'>
                                <div className='sidemenu-main-tab' onClick={() => closedAllMenu('spectacles-women')}>
                                    <span className='side-sub-menu-tab-title'>Women</span>
                                </div>
                                <div className='sidemenu-main-tab' onClick={() => closedAllMenu('spectacles-men')}>
                                    <span className='side-sub-menu-tab-title'>Men</span>
                                </div>
                            </div>
                        </div>                         
                    </div>
                    <div id='sunglasses' className='sidemenu-main-tab' onMouseEnter={openSubMenuHover} onMouseLeave={closedSubMenuHover}>
                        <span className='sidemenu-tab-title'>Sunglasses</span>
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" className="sidemenu-tab-icon">
                            <path d="M1 1L9 8.2L1 15.4" stroke="black" strokeOpacity="0.85" strokeWidth="1.5"></path>
                        </svg>
                        <div className={`bloobloom-side-sub-menu ${isOpenSubMenu === 'sunglasses' && 'bloobloom-side-sub-menu-open'}`}>
                            <div className='side-sub-menu-main'>
                                <div className='sidemenu-main-tab' onClick={() => closedAllMenu('sunglasses-women')}>
                                    <span className='side-sub-menu-tab-title'>Women</span>
                                </div>
                                <div className='sidemenu-main-tab' onClick={() => closedAllMenu('sunglasses-men')}>
                                    <span className='side-sub-menu-tab-title'>Man</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='sidemenu-main-tab'>
                        <span className='sidemenu-tab-title'>Home try on</span>
                    </div>
                    <div className='sidemenu-main-tab'>
                        <span className='sidemenu-tab-title'>Pair for pair</span>
                    </div>
                </div>                               
            </div>            
            <div className='bloobloom-header-btns'>
                <a className='bloobloom-header-button menu-button' onMouseEnter={openMenuHover}>
                    <span>Menu</span>
                </a>
            </div>
        </div>
    );
}