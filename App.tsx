import React from 'react';
import './styles/App.scss';
import Background from './components/background';
import Title from './components/title';
import Navbar from './components/navbar';
import SectionTitle from './components/section-title';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Background></Background>
      <section className="flex text-center w-full h-screen justify-center items-center">
        <Title></Title>
      </section>
      <Navbar></Navbar>
      <section id="about" className="flex text-center w-full h-screen justify-center">
        <SectionTitle title="About"></SectionTitle>
      </section>
      <section id="projects" className="flex text-center w-full h-screen justify-center">
        <SectionTitle title="Projects"></SectionTitle>
      </section>
      <section id="services" className="flex text-center w-full h-screen justify-center">
        <SectionTitle title="Services"></SectionTitle>
      </section>
      <section id="contact" className="flex text-center w-full h-screen justify-center">
        <SectionTitle title="Contact"></SectionTitle>
      </section>
    </div>
  );
}

export default App;
