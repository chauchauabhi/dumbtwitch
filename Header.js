import React from 'react'
import {Avatar} from "@material-ui/core"
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__leftLogo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png" alt="Twitch Logo"/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="heaedr__verticalLine"></div>
                <h2>Esports</h2>
                <h2>Music</h2>
                <i className="fas fa-ellipsis-v"></i>
            </div>

            <div className="header__center">
                <input type="text" placeholder="Search" />
                <div className="header__centerLogoContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>

            <div className="header__right">
                <div className="header__rightContainer">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i className="fas fa-comments"></i>
                    <div className="header__rightBits">
                        <i class="fas fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header

