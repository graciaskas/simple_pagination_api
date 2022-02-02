const axios = require("axios");
const baseURL = "https://api.github.com/users";
const usersDemoData = require("../data/users.data");

/**
 * 
 * @param {*} param0 request query object
 * @param {*} content data array
 * @returns sliced array
 */
const paginate = function ({ page = 1, limit = 3 }, content ) {
    const items = content.length;
   
    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);
    const pages = Math.ceil(items / limitInt);

    const start = (pageInt - 1) * limitInt; 
    const end = pageInt * limitInt;
    //slice the array
    const data = content.slice(start, end);
    console.log(start,end);
    return {
        totlItems : items,
        pages,
        page,
        limit,
        items: data.length,
        data
    };
};

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
        // const { data } = await axios.get(baseURL);
        const result = paginate(req.query, usersDemoData);
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