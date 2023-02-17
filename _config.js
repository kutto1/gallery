var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://kutto1:Icekinger1@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://kutto1:Icekinger1@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://kutto1:Icekinger1@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
