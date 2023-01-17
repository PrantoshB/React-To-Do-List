import React from 'react';
import {
  Link, useNavigate, Route, Routes,
} from 'react-router-dom';
import SinglePage from './SinglePage';
// eslint-disable-next-line
const About = () => {
  const { url, path } = useNavigate();
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${path}/:slug`} element={<SinglePage />} />
      </Routes>
    </div>
  );
};
export default About;
