const { model, default: mongoose } = require('mongoose');
const Event = require('../models/events');
const errors = require('../../errors/errors');

module.exports = async (req, res) => {
  try {
    const { title, description, date, location, organizer, price, time, imageBase64 } = req.body;
    const newEvent = new Event({
      _id: new mongoose.Types.ObjectId(),
      image,
      title,
      description,
      date,
      location,
      organizer,
      price,
    });
    try{
      const savedEvent = await newEvent.save();
      return res.status(201).json({
        statusCode: 0,
        timestamp: Date.now(),
        requestId: req.body.requestId,
        data: {
          event: savedEvent,
        },
        info: {
            code: errors['000'].code,
            message: errors['000'].message,
            displayText: errors['000'].displayText,
        }
    })
    }
    catch(e){
      errorLogger(req.custom.id, req.body.requestId, `Error while saving user in the database | ${e.message}`, e)
      return res.status(500).json({
          statusCode: 1,
          timestamp: Date.now(),
          requestId: req.body.requestId,
          info: {
              code: errors['002'].code,
              message: e.message || errors['002'].message,
              displayText: errors['002'].displayText
          },
          error: e
      })
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 1,
      timestamp: Date.now(),
      requestId: req.body.requestId,
      info: {
          code: errors['006'].code,
          message: error.message || errors['006'].message,
          displayText: errors['006'].displayText
      },
      error: error
  })
  }
};