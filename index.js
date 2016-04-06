const aerospike = require ('aerospike');

var client = aerospike.client({
  hosts: [
      { addr: "127.0.0.1", port: 3000 }
  ],
  log: {
      level: aerospike.log.INFO
  }
});

client.connect(function (response) {
    if ( response.code === 0) {
        // handle success
        console.log("\nConnection to Aerospike cluster succeeded!\n");
    }
    else {
        // handle failure
        console.log("\nConnection to Aerospike cluster failed!\n");
        console.log(response);
    }
});
