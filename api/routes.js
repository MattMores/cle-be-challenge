import { playerOverviews } from "./test.js"
import { playerDetails } from "./test.js"
import { playerOverviews } from "./test.js"

const express = require('express');
const app = express.Router();
const asyncHandler = require('express-async-handler');

app.get("/players", asyncHandler(async function (req, res) {
    let playersOverviews = {players: playerOverviews} // import in PlayerOverviews
    return res.json(playersOverviews)
}));

app.get("/players/:playerId", asyncHandler (async function (req, res) {
    let singlePlayer = playerDetails.find(obj => obj.playerId === req.params.playerId) // find first occurance of where it happens
    let playerInfo = {playerDetails: singlePlayer} // import in PlayerDetails
    return res.json(playerInfo)
}));

app.get("/pitches/:playerId", asyncHandler(async function (req, res) {
    let singlePlayerPitches = playerDetails.filter(obj => obj.pitcherId === req.params.playerId) // array of every matcn
    let playerInfo = {pitches: singlePlayerPitches} // simulates a query
    return res.json(playerInfo) // import in Pitches
}));


module.exports = app;
