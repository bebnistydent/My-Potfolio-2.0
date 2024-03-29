import './App.css';
import React from 'react';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skill.Section';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contact } from './layout/sections/contacts/Contact';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Footer } from './layout/footer/Footer';
import {GoTopBtn} from './assets/components/goTopBtn/GoTopBtn';



function App() {
    return (
        <div className="App">

            <Header />
            <Main />
            <Skills/>
            <Works /> 
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
            <GoTopBtn />

            
        </div>
    );
}

export default App;

