import { Link } from 'react-router-dom';
import './jungleintropage.css'


export default function JungleIntroPage(){


return(
        <>   
         <main className= 'main-area'>


            <div className='the-title-text-area'>

                <h1 className='activity-intro-h1'>Jungle Sums</h1>

            </div>    


            <div className='the-card-div-intro'>

                <p className='the-activity-number'>DEMO VERSION</p>
                <h3 className='activity-intro-h3'>
                    Welcome to Jungle Sums, a KS1 maths adventure! </h3>
                <p className='activity-intro-descr'>Jungle Sums is a full stack app, built as an educational tool for home-schooling.</p>
                <p className='activity-intro-descr'>The UK curriculum was used as reference in the design process.</p>
                <p className='activity-intro-descr'>The following exercise is an extract from the full app.</p>

                <section className = "the-button-container">

                    <nav>
                        <Link to="/activity-intro" style={{textDecoration: "none"}} >
                            <button className='back-button-intro'>Let's Go!</button>
                        </Link>
                    </nav>

                </section>

            </div>
            
        </main>
        </> 
)
}