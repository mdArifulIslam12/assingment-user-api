const express = require('express');

const router = express.Router()
const userController = require('../controllers/users.controller')



// All Users or Users limit than query parmeters or router user/all
router.route('/all').get(userController.getAllUser)

// user for random or router user/random
router.route('/random').get(userController.getRandomUser)

// Single user post for body json is save json or router user/save

router.route('/save').post(userController.userASave)

// Single user update for body json or router user/update

router.route('/update').patch(userController.userUpdate)

// Multiple user update

router.route('/bulk-update').patch(userController.userMultipleDataUpdate)

// Single user for body json id number user delete or router is user/delete
router.route('/delete').delete(userController.deleteUser)

module.exports = router