const stripe = require ('stripe')(process.env.STRIPE_KEY)

const stripeController  = async (req, res) =>{
    const{ purchase , total_amount , shipping_fee } =req.body;
    const calculateTotalAmount = ()=>{
        return total_amount + shipping_fee ;
    }
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateTotalAmount(),
        currentcy :'usd'
     })
     console.log(paymentIntent);
     res.json({clientSecret:paymentIntent.client_secret})
}


module.exports = stripeController;