requirejs(['modules/logger', 'modules/sum'], function (logger, sum) {
    logger(sum(1, 2));
});
