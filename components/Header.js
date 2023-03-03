"use client"
import React, { useState, useEffect } from 'react'
import '../styles/header.css'

const categories = [
    { name: "home", link: "/" },
    { name: "trending", link: "/trending" },
    { name: "destination", link: "/destination" },
    { name: "testimonials", link: "/testimonials" },
    { name: "about", link: "/about" },
]

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWidthScreen(window.innerWidth);
        };
        window.addEventListener('scroll', toggleVisible)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', toggleVisible)
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <header style={{
            background: visible ? 'var(--bg-main)' : 'transparent',
            boxShadow: visible ? '2px 20px 30px var(--shadow-color)' : 'none'
        }}>
            <nav>
                <a href='#' className='logo'>
                    <i className="fa-solid fa-earth-americas has-text-primary"></i> Travel
                </a>
                {
                    widthScreen < 800 ?
                        <a href='#' className="hamberger">
                            <i class="fa-solid fa-bars"></i>
                        </a>
                        :
                        <ul>
                            {
                                categories.map(category => (
                                    <li key={category.name}>
                                        <a href={category.link} className=""> {category.name} </a>
                                    </li>
                                ))
                            }
                        </ul>
                }
            </nav>
        </header>
    )
}

export default Header