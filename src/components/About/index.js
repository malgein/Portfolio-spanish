import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate text-animate-hover')

  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
          <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'c', 'e', 'r', 'c', 'a', '', 'd', 'e', '', 'm', 'i']}
                idx={15}
              />
          </h1>
          <p>
          Soy desarrollador front-end, me especializo en la estructura y
           creación de interfaz de usuario, actualmente aprendiendo desarrollo back-end para un
           mejor aporte a quienes quieran adquirir mis servicios, busco oportunidades laborales donde pueda demostrar mi valía en conjunto con otros compañeros que comparten mi visión
          </p>
          <p align="LEFT">
          Tengo una mente crítica, pensamiento abierto, si tienes un problema soy parte.
           de la solución, me encanta aprender y trabajar en equipo
          </p>
          <p>
          Soy un desarrollador amante de la programación, las computadoras y todo ese tipo de tecnologías,
           esa es mi pasión después de las ciencias de la salud, mi especialidad es el front-end, me encanta diseñar y crear aplicaciones increíbles, es realmente genial crear algo dando instrucciones a una máquina.
          </p>
        </div>
        <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNode} color="green" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
	)
}

export default About