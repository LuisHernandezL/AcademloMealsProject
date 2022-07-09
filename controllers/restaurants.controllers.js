//Models
const { Reviews } = require('../models/reviews.model')
const { Restaurants } = require('../models/restaurants.model')

//utils
const { catchAsync } = require('../utils/catchAsync.utils')

const newRestaurant = catchAsync(async(req, res, next) => {
    const { name, address, rating} = req.body

    const newRestaurant = await Restaurants.create({
        name,
        address,
        rating
    })

    res.status(201).json({
        status: 'success',
        newRestaurant
    })
})

const allRestaurant = catchAsync(async(req, res, next) => {
    
    const data = await Restaurants.findAll({where:{status:'active'}})

    res.status(200).json({
        data
    })
})

const restaurantById = catchAsync(async(req, res, next) => {
    const { restaurant } = req

    res.status(200).json({
        restaurant
    })
})

const updateRestaurant = catchAsync(async(req, res, next) => {
    const { name, address} = req.body
    const { restaurant } = req

    await restaurant.update({
        name,
        address
    })

    res.status(204).json({})

})

const deletRestaurant = catchAsync(async(req, res, next) => {
    const { restaurant } = req

    await restaurant.update({status: 'delete'})

    res.status(204).json({})
})

const newReviewRestaurant = catchAsync(async(req, res, next) => {
    const { comment, rating } = req.body
    const { restaurantId } = req.params

    const newReview = await Reviews.create({
        userId:1,
        restaurantId,
        comment,
        rating
    })

    console.log(newReview);

    res.status(201).json({
        status: "success",
        newReview
    })
})

const updateReview = catchAsync(async(req, res, next) => {
    const { comment, rating } = req.body
    const { review } = req

    await review.update({
        comment,
        rating
    })

    res.status(204).json({})

})

const deleteReview = catchAsync(async(req, res, next) => {
    const { review } = req

    await review.update({
        status: 'deleted'
    })

    res.status(204).json({})
})


module.exports = { newRestaurant,
    allRestaurant,
    restaurantById,
    updateRestaurant,
    deletRestaurant,
    newReviewRestaurant,
    updateReview,
    deleteReview
}