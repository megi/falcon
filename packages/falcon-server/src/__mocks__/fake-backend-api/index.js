const { ApiDataSource } = require('@deity/falcon-server-env');

module.exports = class FakeBackendApi extends ApiDataSource {
  getEndpoints() {
    return [
      {
        path: '/info',
        methods: ['get'],
        handler: (ctx, next) => {
          ctx.body = 'foo';
          next();
        }
      }
    ];
  }
};
