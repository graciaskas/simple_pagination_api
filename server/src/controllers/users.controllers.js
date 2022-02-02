const axios = require("axios");
const { paginate } = require("../utils/main.utils");

//Base API url ==> You can replace with your
const baseURL = "https://api.github.com/users";

const sendResponse = function (res, status= 200, data={}) {
    return res.status(status).json({
        status: status,
        ...data
    });
};

const sendError = function (error, res) {
    return res.status(500).json({
        status: 500,
        error: error.message
    });
};

exports.findMany = async function (req, res) {
    try {
        const { data } = await axios.get(baseURL);
        const result = paginate(req.query, data);
        sendResponse(res, 200, result);
    } catch (error) {
        sendError(error, res);
    }
};

exports.findOne = async function (req, res) {
    try {
        const { data } = await axios.get(baseURL+"/"+req.params.id);
        res.json(data);
    } catch (error) {
        sendError(error, res);
    }
};

exports.insertOne = function (req, res) {
    
};

exports.insertMay = function (req, res) {
    
};

exports.updateOne = function (req, res) {
    
};

exports.updateMay = function (req, res) {
    
};

exports.deleteOne = function (req, res) {
    
};

exports.deleteMany = function (req, res) {
    
};