import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SurveyComponent from '../Components/Survey';
import TestComponent from '../Components/Test';
export default function Main() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/survey">Survey</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestComponent />} />
                    <Route path="/survey" element={<SurveyComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}