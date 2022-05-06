const fs = require("fs");

module.exports = {
    "env": "local",
    "awsConnectionParam": {
        "endpoint": "http://localhost:4566",
        "region": "eu-west-1",
        "accessKeyId": "xxx",
        "secretAccessKey": "xxx"
    },
    "sqsConfig": {
        "apiVersion": "2012-11-05",
        "ServiceURL": "http://localhost:4566/queue",
        "Region": "eu-west-1",
        "AuthenticationRegion": "eu-west-1",
        "queueName": "issuing-risk-and-fraud-transactions-events"
    }
};
