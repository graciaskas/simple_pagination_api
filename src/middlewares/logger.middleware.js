module.exports = function (req, res, next) {
    const date = new Date();
    const moth = (date.getMonth()) + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    const { method, url } = req;
    console.log(`[${method}] ${url}`);
    next();
};