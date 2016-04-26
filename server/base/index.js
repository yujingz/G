// Base routes for default index/root path, about page, 404 error pages, and others..
exports.register = function(server, options, next){
  server.route([
    {
      method: 'GET',
      path: '/api/getrandomnum',
      handler: (request, reply) => {
        reply(55555)
      },
    },
    {
      method: 'GET',
      path: '/cdkeyd/verify/{cdkey}/{machineCode}/{randomNum}',
      handler: (request, reply) => {
        reply(true)
      },
    },
    {
      method: 'GET',
      path: '/cdkeyd/update/{cdkey}/{machineCode}/{randomNum}',
      handler: (request, reply) => {
        reply(true)
      },
    },
    {
      method: 'GET',
      path: '/api/getcdkeytime/{cdkey}',
      handler: (request, reply) => {
        reply('2999-12-31 23:59:59 (北京时间)')
      },
    }
  ]);

  next();
}

exports.register.attributes = {
  name: 'base'
};
