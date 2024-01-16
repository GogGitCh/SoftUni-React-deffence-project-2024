import styles from './Portfolio.module.css'

import CardPortfolio from '../../components/portfolio_card/CardPortfolio';

function Portfolio() {
    return (
        <div className={styles['portfolio-wrapper']}>
            <div className={styles['portfolio-owner']}>
                <div className={styles['avatar-wrapper']}>
                    <img className={styles['owner-avatar']} src="/public/images/team/team-02.png" alt="bri" />
                </div>
                <h1 className={styles['h1']}>[User] Portfolio</h1>
                <a className={styles['link']} href="">Contact with</a>
            </div>
            <CardPortfolio />

            <p><a href="https://www.freepik.com/free-photo/white-concrete-wall_4410360.htm#query=white%20background&position=5&from_view=keyword&track=ais&uuid=86123232-cccf-45ef-8343-0a5c5b7a68f5">Background image by rawpixel.com</a> on Freepik</p>
        </div>
    );
}

export default Portfolio
