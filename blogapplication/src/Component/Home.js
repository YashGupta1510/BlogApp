import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100vh',
            padding: '0 20px',
            background: '#003366'
        },
        animatedText: {
            fontSize: '48px',  // Increased font size for prominence
            marginBottom: '10px',  // Increased spacing for a cleaner look
            // animation: 'slideLeftToRight 3s ease-in-out infinite alternate',
            animation: 'slideFromLeft 3s forwards', // "forwards" will ensure it stays at the end state of the animation
            color: 'white',
            fontFamily: "'Arial', sans-serif",
            fontWeight: 'bold',
            letterSpacing: '2px' // Spacing between letters for a refined look
        },
        button: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderColor: 'white',
            color: '#FFD700',  // Golden color for the text
            padding: '5px 10px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '20px',  // Slightly increased for better readability
            transition: 'background-color 0.3s'
        },
        icon: {
            marginRight: '10px' // Spacing between the icon and text
        }
    };

    return (
        <div style={styles.container}>
              <h1 style={styles.animatedText}>
                Welcome to My Blog
            </h1>

<a href="http://localhost:3000/blog" style={styles.button} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'grey'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Blog App &nbsp; <FontAwesomeIcon icon={faArrowRight} style={styles.icon}/>
            </a>

          
           
            <style>{`
              @keyframes slideFromLeft {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(0);
                }
            }
            `}</style>
        </div>
    );
}

export default Home;
