import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 0.5rem;
    background-color: var(--deep-dark);
    padding: 0.5rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2rem;
  }
  .projectItem__desc {
    font-size: 1.5rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 300px;
    }
  }
`;

export default function ProjectItem({
  img = 'https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg',
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link style={{textDecoration:'none', color:'#5AFF3D'}} to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}