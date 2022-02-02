

module.exports = function (req, res) {
    let pagination = {
        totalPages: usersDemoData.length,
        pages: Math.ceil(usersDemoData.length / 3),
        data : usersDemoData
    };  
};