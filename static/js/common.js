/** 
 * 设置导航active class="<%= isMainActive("/") %>">
 */
exports.mainActive = function (req, res, next) {
    res.locals.isMainActive = function (nav) {
        let currentPath = req.path;
        let activeClass = nav == currentPath ? 'active' : '';
        return activeClass;
    };
    next();
};