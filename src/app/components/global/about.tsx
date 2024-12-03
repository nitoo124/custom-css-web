import React from 'react'
import Button from './button'
import Image from 'next/image'
import styles from '../../css/About.module.css'


function About() {
    return (
        <main className={styles.about}>

            {/* image section */}
            <section className={styles.imgSection}>

                <Image className={styles.img} src={'/images/about.webp'} alt='beautifull girl image' width={400} height={400} loading='lazy' />

            </section>

            {/*Content section  */}
            <section className={styles.contentSection}>
                <h1 className=''>About Me</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                    architecto facere modi quia molestias nihil assumenda aut nobis, quaerat quae
                    inventore, magni esse dolorem neque libero corporis tempore quisquam. Error?Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Possimus, quia. Magnam quibus
                    dam iure rerum perspiciatis! Aut modi provident quos doloribus harum, obcaecati
                    amet, magnam consequatur soluta suscipit accusantium eum alias!</p>
                <div className=''>
                    <Button text='Order Now' />
                </div>
            </section>
        </main>
    )
}

export default About