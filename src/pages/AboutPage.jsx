import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This site allows users to provide feedback on services. Whether you're looking to gather user opinions, suggestions, or bug reports; leave your review :)</p>
        <p><Link to='/'>Back To Home</Link></p>
      </div>
    </Card>
  )
}

export default AboutPage
