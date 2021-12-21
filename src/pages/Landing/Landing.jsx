import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user, setTitle }) => {
  setTitle('')
  return (
    <main className={styles.container}>
      <div className="landing-button-container">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/login">Log In</Link></button>
        </div>
    </main>
  )
}

export default Landing
