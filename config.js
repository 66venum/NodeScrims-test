var config = {}

/*Steam and Express configuration*/
config.steamAPIKey = '783D53DFA75B53079CF4852DF98BBE8B';
config.sessionSecret = '';

/*RCON Information*/
config.rconPassword = '';

/*Digital Ocean Configuration
config.digitalOceanAPIKey = '';
config.digitalOceanPerPage = RESULTS_PER_PAGE;
config.snapshotID = 0;*/

/*Droplet Configuration
config.dropletConfig = {},
config.dropletConfig.name = "";
config.dropletConfig.region = "";
config.dropletConfig.size = "";
config.dropletConfig.image = config.snapshotID;
config.dropletConfig.ssh_keys = [];
config.dropletConfig.backups = false;
config.dropletConfig.ipv6 = true;
config.dropletConfig.user_data = null;
config.dropletConfig.private_networking = null;*/

config.sshTimeout = 60000;

module.exports = config;
