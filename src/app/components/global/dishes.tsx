import styles from '../../css/Dishes.module.css'
import Image from 'next/image'
import Button from './button'


function Dishes() {
  return (
    <div className ={styles.main}>

      <h1>Dishes</h1>

      <div className={styles.products}>


        {/* dish 1 */}

      <div className={styles.wrapper}>

      <div className={styles.box}>

        <Image className ={styles.img} src={'/Dishes_Img/dish1.jpeg'} alt='' width={250} height={250} loading='lazy'/>
        <h3>Delicious Food</h3>
        <p>Rs 500</p>
        <Button text='Order Now'/>
      
        </div>
      </div>
       

       {/* dish2 */}
      <div className={styles.wrapper}>

      <div className={styles.box}>

        <Image className ={styles.img} src={'/Dishes_Img/dish2.jpeg'} alt='' width={250} height={250} loading='lazy'/>
        <h3>Delicious Food</h3>
        <p>Rs 500</p>
        <Button text='Order Now'/>
      
        </div>
      </div>

        {/* dish3 */}
        <div className={styles.wrapper}>

<div className={styles.box}>

  <Image className ={styles.img} src={'/Dishes_Img/dish3.webp'} alt='' width={250} height={250} loading='lazy'/>
  <h3>Delicious Food</h3>
  <p>Rs 500</p>
  <Button text='Order Now'/>

  </div>
</div>

  {/* dish4 */}
  <div className={styles.wrapper}>

<div className={styles.box}>

  <Image className ={styles.img} src={'/Dishes_Img/dish4.jpeg'} alt='' width={250} height={250} loading='lazy'/>
  <h3>Delicious Food</h3>
  <p>Rs 500</p>
  <Button text='Order Now'/>

  </div>
</div>

 {/* dish 5 */}
 <div className={styles.wrapper}>

<div className={styles.box}>

  <Image className ={styles.img} src={'/Dishes_Img/dish5.jpeg'} alt='' width={250} height={250} loading='lazy'/>
  <h3>Delicious Food</h3>
  <p>Rs 500</p>
  <Button text='Order Now'/>

  </div>
</div>

 {/* dish 6*/}
 <div className={styles.wrapper}>

<div className={styles.box}>

  <Image className ={styles.img} src={'/Dishes_Img/dish6.jpeg'} alt='' width={250} height={250} loading='lazy'/>
  <h3>Delicious Food</h3>
  <p>Rs 500</p>
  <Button text='Order Now'/>

  </div>
</div>

 {/* dish 7 */}
 <div className={styles.wrapper}>

<div className={styles.box}>

  <Image className ={styles.img} src={'/Dishes_Img/dish7.jpeg'} alt='' width={250} height={250} loading='lazy'/>
  <h3>Delicious Food</h3>
  <p>Rs 500</p>
  <Button text='Order Now'/>

  </div>
</div>

 {/* dish 8 */}
 <div className={styles.wrapper}>

<div className={styles.box}>

  <Image className ={styles.img} src={'/Dishes_Img/dish8.jpeg'} alt='' width={250} height={250} loading='lazy'/>
  <h3>Delicious Food</h3>
  <p>Rs 500</p>
  <Button text='Order Now'/>

  </div>
</div>
      </div>

    </div>

  )
}

export default Dishes