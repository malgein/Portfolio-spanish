import logoTitle from '../../assets/images/logo.svg'
import AnimatedLetters from '../AnimatedLetters'
import {Link} from 'react-router-dom'
import './index.scss'

const Home =() =>{

	const letterClass = 'text-animate text-animate-hover'

  const nameArray = ['','','','','','','','i' , 'l' , 'm' , 'e' , 'r' ]
  const jobArray = [
    'd',
    'e',
    's',
    'a',
    'r',
    'r',
    'o',
    'l',
    'l',
    'a',
    'd',
    'o',
    'r',
    ' ',
    'w',
    'e',
    'b',
    '.',
  ]

	

	return(
		<div className="container home-page">
			<div className="text-zone">
				<h1> <span className={letterClass}>H</span>
            <span className={`${letterClass} _16`}>ola,</span>
            <br />
            <span className={`${letterClass} _17`}>s</span>
            <span className={`${letterClass} _18`}>oy</span>
            <img src={logoTitle} alt="logo" />
					<AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
				</h1>
				<h2>Desarrollador Front-end / Experto en JavaScript / Desarrollador React</h2>
				<Link to='/contact' className='flat-button'>
					CONTACTAME
				</Link>
			</div>
      <img src={logoTitle} alt="logo2" className="big-img" />
		</div>
	)
}

export default Home