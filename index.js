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

var key = aerospike.key("test", "users", "aadfd15c-564b-4aa2-8fce-8446bf0e6704");
client.get(key, function(err, rec, meta) {
     // Check for errors
     if ( err.code === aerospike.status.AEROSPIKE_OK ) {
         console.log(rec);
     }
     else {
         console.log('error');
     }
 });
