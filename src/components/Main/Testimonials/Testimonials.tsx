import Card from "./Card";

function Testimonials() {
    const testimonials : {img:string,text:string,name:string}[] = [
        {img:'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg',text:'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.',name:'Jennifer Lewis'},
        {img:'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-2.jpeg',text:'Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.',name:'Alicia Heart'},
        {img:'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-1.jpeg',text:'Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.',name:'Juan Carlos'}];
  return (
    <section className='testimonials'>
        <div className="container">

        <h1 className=' mb-20 text-start font-semibold tracking-wider text-2xl md:text-4xl'>
        What Our Customers Say
        </h1>
        <div className="grid md:grid-cols-3 gap-20">
            {
                testimonials.map((item,index)=>{
                    return <Card key={index} img={item.img} text={item.text} name={item.name} />
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Testimonials