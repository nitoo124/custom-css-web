import Image from 'next/image'
import Button from './button'
import styles from '../../css/Hero.module.css'




function Hero() {
    return (
        <main className={styles.hero}>
            {/* content section */}
            <section className={styles.leftbar}>
                <h1>Eat Like No One<br/> Is Watching</h1>
                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dignissimos
                    error officia inventore! Temporibus eveniet libero id molestiae, numquam qui inventore ab
                    iste, tempore dolorum fugiat hic animi ut.</p>
                <div>
                    <Button text='Learn More' />
                </div>

            </section>

            {/* image section */}
            <section className={styles.rightbar}>

                <Image className={styles.homeimg} src={'/Dishes_Img/home.jpeg'} alt='beatutifull girls with laptop' width={500} height={500} loading='lazy' />

            </section>
        </main>

    )
}

export default Hero